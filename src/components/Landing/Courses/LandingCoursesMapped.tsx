import { useCourseTop } from "../../../core/services/api/course/useCourseTop";
import { showErrorToast } from "../../../core/utils/toast.utils";

import { CourseInterface } from "../../../types/course";

import { CourseItem } from "../../common/CourseItem";
import { CourseItemSkeleton } from "../../common/CourseItemSkeleton";

const LandingCoursesMapped = () => {
  const { data, isLoading, isError } = useCourseTop(4);

  if (isError) showErrorToast("مشکلی در دریافت دوره های برتر به وجود آمد !");

  return (
    <>
      <div className="landingCoursesMappedWrapper">
        {isLoading ? (
          <>
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
          </>
        ) : (
          data?.map((course: CourseInterface) => (
            <CourseItem key={course.courseId} course={course} />
          ))
        )}
      </div>
    </>
  );
};

export { LandingCoursesMapped };
