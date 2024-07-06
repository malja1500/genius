import { Delete, RemoveRedEye } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

import { useDeleteCourseReserve } from "../../core/services/api/course/course-reserve/useDeleteCourseReserve";
import { useCourseDetails } from "../../core/services/api/course/useCourseDetails";
import { convertDateToPersian } from "../../core/utils/date-helper.utils";

import { CourseReserves } from "../../types/user-panel/course-reserves";

import { Link } from "../common/Link";

import blankThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

interface DashboardCourseReserveItemProps {
  courseReserve: CourseReserves;
}

const DashboardCourseReserveItem = ({
  courseReserve,
}: DashboardCourseReserveItemProps) => {
  const { data: course } = useCourseDetails(courseReserve.courseId);
  const deleteCourseReserve = useDeleteCourseReserve();

  const convertedUpdateDate = convertDateToPersian(courseReserve.reserverDate);

  const handleDeleteCourseReserve = () => {
    deleteCourseReserve.mutate(courseReserve.reserveId);
  };

  return (
    <div key={courseReserve.courseId} className="dashboardCourseItem">
      <Link to={`/courses/${courseReserve.courseId}`}>
        <img
          src={course?.imageAddress || blankThumbnail}
          className="dashboardCourseItemImage"
        />
      </Link>
      <Link
        to={`/courses/${courseReserve.courseId}`}
        className="dashboardCourseTitleLink"
      >
        <h5 className="dashboardCourseTitle">{courseReserve.courseName}</h5>
      </Link>
      <h6 className="dashboardCourseItemText truncate">
        {courseReserve.studentName || "کاربر نابغه"}
      </h6>
      <h6 className="dashboardCourseItemText">{convertedUpdateDate}</h6>
      <span
        className={`rounded-full font-[500] px-2 text-[14px] ${
          courseReserve.accept
            ? "bg-success text-successText"
            : "bg-danger text-dangerText"
        }`}
      >
        {courseReserve.accept ? "تایید شده " : "تایید نشده"}
      </span>
      <div className="dashboardCourseItemIconsWrapper">
        <Link to={`/courses/${courseReserve.courseId}`}>
          <Tooltip title="مشاهده دوره" arrow placement="top">
            <RemoveRedEye className="dashboardCourseItemShowIcon" />
          </Tooltip>
        </Link>
        {!courseReserve.accept && (
          <Tooltip title="حذف رزرو" arrow placement="top">
            <Delete
              className="dashboardCourseItemDeleteIcon"
              onClick={handleDeleteCourseReserve}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export { DashboardCourseReserveItem };
