import { Delete } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

import { useDarkModeSelector } from "../../redux/darkMode";

import { useDeleteCourseReserve } from "../../core/services/api/course/course-reserve/useDeleteCourseReserve";
import { useCourseDetails } from "../../core/services/api/course/useCourseDetails";

import { CourseReserves } from "../../types/user-panel/course-reserves";

import { Link } from "../common/Link";

import teacherDarkIcon from "../../assets/images/CourseDetails/Icons/teacher-dark.svg";
import teacherIcon from "../../assets/images/CourseDetails/Icons/teacher.svg";

interface DashboardMobileCorseReserveItemProps {
  courseReserve: CourseReserves;
}

const DashboardMobileCorseReserveItem = ({
  courseReserve,
}: DashboardMobileCorseReserveItemProps) => {
  const darkMode = useDarkModeSelector();
  const { data: course } = useCourseDetails(courseReserve.courseId);
  const deleteCourseReserve = useDeleteCourseReserve();

  const handleDeleteCourseReserve = () => {
    deleteCourseReserve.mutate(courseReserve.reserveId!);
  };

  return (
    <div className="dashboardMobileCourseItem">
      <div>
        <img
          src={course?.imageAddress}
          className="dashboardMobileCourseItemImage"
        />
      </div>
      <div>
        <Link to={`/courses/${courseReserve.courseId}`}>
          <h4 className="dashboardMobileCourseItemTitle">
            {courseReserve.courseName}
          </h4>
        </Link>
        <div className="dashboardMobileCourseItemBoxTwo">
          <div className="dashboardMobileCourseItemTeacherIconTitleBox">
            <img
              src={darkMode ? teacherDarkIcon : teacherIcon}
              className="dashboardMobileCourseItemTeacherIcon"
            />
            <h5 className="dashboardMobileCourseItemTeacherName">
              {course?.teacherName}
            </h5>
          </div>
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
    </div>
  );
};

export { DashboardMobileCorseReserveItem };
