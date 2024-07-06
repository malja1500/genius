import { useState } from "react";
import {
  RiDislikeFill,
  RiDislikeLine,
  RiHeart3Fill,
  RiHeart3Line,
} from "react-icons/ri";
import { useParams } from "react-router-dom";

import { useAddReplyCourseComment } from "../../../core/services/api/course/comments/useAddReplyCourseComment";
import { useCourseCommentDislike } from "../../../core/services/api/course/comments/useCourseCommentDislike";
import { useCourseCommentLike } from "../../../core/services/api/course/comments/useCourseCommentLike";
import { useCourseReplyComments } from "../../../core/services/api/course/comments/useCourseReplyComments";
import { useDeleteCourseCommentLike } from "../../../core/services/api/course/comments/useDeleteCourseCommentLike";
import { useAddNewsReplyComment } from "../../../core/services/api/news/comments/useAddNewsReplyComment";
import { useCommentLike } from "../../../core/services/api/news/comments/useCommentLike";
import { useDeleteCommentLikeNews } from "../../../core/services/api/news/comments/useDeleteCommentLikeNews";
import { useNewsReplyComments } from "../../../core/services/api/news/comments/useNewsReplyComments";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { onFormData } from "../../../core/utils/form-data-helper.utils";
import { commentFormSchema } from "../../../core/validations/comment-form.validation";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { CommentForm } from "../CommentForm";
import CommentSkeleton from "../CommentSkeleton";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";
import messagesDarkIcon from "../../../assets/images/common/Comments/Icons/messages-dark.svg";
import messagesIcon from "../../../assets/images/common/Comments/Icons/messages.svg";

interface CommentItemProps {
  avatarImage: string | null;
  name: string;
  createdAt: string;
  message: string;
  isChildren?: boolean;
  id?: string;
  courseId?: string;
  parentId: string;
  commentId?: string;
  likeCount: number;
  dislikeCount: number;
  currentUserLikeId: string;
  isLike: boolean;
  isCourse?: boolean;
  currentUserEmotion: string;
}

const CommentItem = ({
  avatarImage,
  name,
  createdAt,
  message,
  isChildren,
  id,
  courseId,
  parentId,
  commentId,
  likeCount,
  dislikeCount,
  currentUserLikeId,
  isLike,
  isCourse,
  currentUserEmotion,
}: CommentItemProps) => {
  const [showReplyComments, setShowReplyComments] = useState(false);
  const [isReplyComment, setIsReplyComment] = useState(false);

  const darkMode = useDarkModeSelector();
  const addNewsCommentLike = useCommentLike(true);
  const deleteNewsCommentLike = useDeleteCommentLikeNews(id!);
  const addNewsReplyComment = useAddNewsReplyComment();
  const addCourseCommentLike = useCourseCommentLike();
  const deleteCourseCommentLike = useDeleteCourseCommentLike(courseId!);
  const addCourseReplyComment = useAddReplyCourseComment(commentId!);
  const addCourseCommentDislike = useCourseCommentDislike();
  const { data: replyComments, isLoading: isReplyCommentsLoading } = isCourse
    ? useCourseReplyComments(courseId!, commentId!)
    : useNewsReplyComments(commentId!);

  const { courseId: courseParamsId } = useParams();

  const handleCommentLike = async () => {
    isLike || currentUserEmotion === "LIKED"
      ? location.pathname.includes("courses/")
        ? deleteCourseCommentLike.mutate(currentUserLikeId!)
        : deleteNewsCommentLike.mutate(currentUserLikeId!)
      : location.pathname.includes("courses/")
      ? addCourseCommentLike.mutate(commentId!)
      : addNewsCommentLike.mutate(commentId!);
  };

  const handleCommentDislike = () => {
    currentUserEmotion === "DISSLIKED"
      ? deleteCourseCommentLike.mutate(commentId!)
      : addCourseCommentDislike.mutate(commentId!);
  };

  const handleReplyCommentSubmit = (e: { title: string; describe: string }) => {
    if (location.pathname.includes("courses/")) {
      const courseReplyCommentObj = {
        commentId,
        courseId: courseParamsId,
        title: e.title,
        describe: e.describe,
      };

      const courseReplyCommentFormData = onFormData(courseReplyCommentObj);

      addCourseReplyComment.mutate(courseReplyCommentFormData);
    } else {
      const newsReplyComment = {
        newsId: id!,
        title: e.title,
        describe: e.describe,
        parentId,
      };

      addNewsReplyComment.mutate(newsReplyComment);
    }

    e.title = "";
    e.describe = "";
  };

  return (
    <>
      <div className={isChildren ? "childrenComment" : ""}>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              src={
                avatarImage &&
                avatarImage !== "undefined" &&
                avatarImage !== "Not-set" &&
                avatarImage !== "not-set" &&
                avatarImage !== "<string>"
                  ? avatarImage
                  : blankThumbnail
              }
              className="commentAvatarImage"
            />
            <span className="commentName">{name}</span>
          </div>
          <div>
            <span className="commentCreatedAtText">{createdAt}</span>
          </div>
        </div>
        <div>
          <p className="commentMessageText">{message}</p>
        </div>
        <div className="flex gap-3 items-center">
          <div
            className="flex gap-1 items-center mt-2 cursor-pointer"
            onClick={handleCommentLike}
          >
            <span className="commentLikeDislikeCount">{likeCount}</span>
            {isLike || currentUserEmotion === "LIKED" ? (
              <RiHeart3Fill className="text-red" />
            ) : (
              <RiHeart3Line className="text-red" />
            )}
          </div>
          {currentUserEmotion && (
            <div
              className="flex gap-1 items-center mt-2 cursor-pointer"
              onClick={handleCommentDislike}
            >
              <span className="commentLikeDislikeCount">{dislikeCount}</span>
              {isLike || currentUserEmotion === "DISSLIKED" ? (
                <RiDislikeFill className="text-red" />
              ) : (
                <RiDislikeLine className="text-red" />
              )}
            </div>
          )}
          <div
            className="flex gap-1 mt-2 cursor-pointer"
            onClick={() => setIsReplyComment((prev) => !prev)}
          >
            <span className="commentAnswerText">
              {isReplyComment ? "انصراف" : "پاسخ"}
            </span>
            <img src={darkMode ? messagesDarkIcon : messagesIcon} />
          </div>
          <div
            className="flex gap-1 mt-2 cursor-pointer"
            onClick={() => setShowReplyComments(!showReplyComments)}
          >
            <span className="commentAnswerText">
              {showReplyComments ? "پنهان پاسخ ها" : "پاسخ ها"}
            </span>
            <img src={darkMode ? messagesDarkIcon : messagesIcon} />
          </div>
        </div>
        {isReplyComment && (
          <div className="w-full mt-4">
            <CommentForm
              onSubmit={handleReplyCommentSubmit}
              validationSchema={commentFormSchema}
            />
          </div>
        )}
        {showReplyComments && (
          <div className="flex flex-col gap-9 mt-5">
            {isReplyCommentsLoading && <CommentSkeleton />}
            {!isReplyCommentsLoading &&
            replyComments &&
            replyComments!.length === 0 ? (
              <span className="text-center text-sm text-text1 dark:text-darkText">
                پاسخی برای این نظر پیدا نشد !
              </span>
            ) : (
              replyComments!.map(
                (reply: {
                  id: string;
                  newsId: string;
                  pictureAddress: string;
                  inserDate: string;
                  insertDate: string;
                  autor: string;
                  author: string;
                  describe: string;
                  likeCount: number;
                  disslikeCount: number;
                  currentUserLikeId: string;
                  currentUserIsLike: boolean;
                  currentUserEmotion: string;
                }) => {
                  const {
                    id,
                    newsId,
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
                  } = reply;

                  const formattedInsertDate = convertDateToPersian(
                    inserDate || insertDate
                  );

                  return (
                    <CommentItem
                      key={id}
                      id={newsId}
                      avatarImage={pictureAddress}
                      createdAt={formattedInsertDate}
                      name={autor || author}
                      message={describe}
                      isChildren={true}
                      likeCount={+likeCount}
                      dislikeCount={dislikeCount}
                      commentId={id}
                      currentUserLikeId={currentUserLikeId}
                      parentId={id}
                      isLike={currentUserIsLike}
                      currentUserEmotion={currentUserEmotion}
                    />
                  );
                }
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export { CommentItem };
