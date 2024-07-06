import { useAddCourseComment } from "../../../../core/services/api/course/comments/useAddCourseComment";
import { useCourseComments } from "../../../../core/services/api/course/comments/useCourseComments";
import { onFormData } from "../../../../core/utils/form-data-helper.utils";
import { commentFormSchema } from "../../../../core/validations/comment-form.validation";

import { CommentForm } from "../../../common/CommentForm";
import { Comments } from "../../../common/Comments";
import { CustomTabPanel } from "../../../common/CustomTabPanel";

interface CourseDetailsCommentsTabProps {
  value: number;
  courseId: string;
}

const CourseDetailsCommentsTab = ({
  value,
  courseId,
}: CourseDetailsCommentsTabProps) => {
  const { data: comments } = useCourseComments(courseId);
  const addCourseComment = useAddCourseComment();

  const onSubmit = async (e: { title: string; describe: string }) => {
    const commentObj = {
      courseId,
      title: e.title,
      describe: e.describe,
    };
    const commentFormData = onFormData(commentObj);

    addCourseComment.mutate(commentFormData);

    e.title = "";
    e.describe = "";
  };

  return (
    <CustomTabPanel value={value} index={2}>
      <div className="mt-3">
        <CommentForm onSubmit={onSubmit} validationSchema={commentFormSchema} />
        <Comments courseId={courseId} comments={comments!} isCourse />
      </div>
    </CustomTabPanel>
  );
};

export { CourseDetailsCommentsTab };
