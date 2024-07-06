import { PaginatedComments } from "./PaginatedComments";

interface CommentsProps<T extends any[]> {
  courseId?: string;
  newsId?: string;
  comments: T;
  isCourse?: boolean;
}

const Comments = <T extends any[]>({
  comments,
  courseId,
  newsId,
  isCourse,
}: CommentsProps<T>) => {
  return (
    <PaginatedComments
      comments={comments}
      id={courseId || newsId!}
      itemsPerPage={5}
      isCourse={isCourse}
      courseId={courseId}
    />
  );
};

export { Comments };
