import { useState } from "react";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import CommentSkeleton from "../CommentSkeleton";
import { Pagination } from "../Pagination";
import { CommentItem } from "./CommentItem";

interface PaginatedCommentsProps<T extends any[]> {
  comments: T;
  itemsPerPage: number;
  id: string;
  isCourse?: boolean;
  courseId?: string;
}

const PaginatedComments = <T extends any[]>({
  comments,
  itemsPerPage,
  id,
  isCourse,
  courseId,
}: PaginatedCommentsProps<T>) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = comments && comments.slice(itemOffset, endOffset);
  const pageCount: number | undefined =
    comments && Math.ceil(comments?.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset =
      comments && (event.selected * itemsPerPage) % comments?.length;

    setItemOffset(newOffset!);
  };

  const commentSkeletonsArray = [1, 2, 3, 4];

  return (
    <>
      <div className="commentsWrapper">
        {currentItems && currentItems !== undefined ? (
          currentItems.map((comment: any) => {
            const {
              id: commentId,
              pictureAddress,
              inserDate,
              insertDate,
              autor,
              author,
              describe,
              likeCount,
              disslikeCount: dislikeCount,
              currentUserLikeId,
              currentUserIsLike,
              currentUserEmotion,
            } = comment;

            const formattedInsertDate = convertDateToPersian(
              inserDate || insertDate
            );

            return (
              <CommentItem
                key={commentId}
                avatarImage={pictureAddress}
                createdAt={formattedInsertDate}
                name={autor || author}
                message={describe}
                isChildren={false}
                id={id}
                parentId={commentId}
                commentId={commentId}
                likeCount={+likeCount}
                dislikeCount={dislikeCount}
                currentUserLikeId={currentUserLikeId}
                isLike={currentUserIsLike}
                isCourse={isCourse}
                courseId={courseId}
                currentUserEmotion={currentUserEmotion}
              />
            );
          })
        ) : (
          <div className="commentsWrapper">
            {commentSkeletonsArray.map((item) => (
              <CommentSkeleton key={`reply-comment-skeleton-${item}`} />
            ))}
          </div>
        )}
      </div>
      {comments && comments?.length > itemsPerPage && (
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount!} />
      )}
    </>
  );
};

export { PaginatedComments };
