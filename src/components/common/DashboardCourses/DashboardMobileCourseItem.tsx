import { Delete } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useState } from "react";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { useDeleteCourseReserve } from "../../../core/services/api/course/course-reserve/useDeleteCourseReserve";

import { Link } from "../Link";

import teacherDarkIcon from "../../../assets/images/CourseDetails/Icons/teacher-dark.svg";
import teacherIcon from "../../../assets/images/CourseDetails/Icons/teacher.svg";
import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface DashboardMobileCourseItemProps {
  image: string;
  id: React.Key;
  title: string;
  teacherName: string;
  formattedPrice?: string;
  isCourseReserve?: boolean;
  isCourseReserveAccepted?: boolean;
  courseReserveId?: string;
}

const DashboardMobileCourseItem = ({
  image,
  id,
  title,
  teacherName,
  formattedPrice,
  isCourseReserve,
  isCourseReserveAccepted,
  courseReserveId,
}: DashboardMobileCourseItemProps) => {
  const [courseImageSrc, setCourseImageSrc] = useState(image);

  const darkMode = useDarkModeSelector();
  const deleteCourseReserve = useDeleteCourseReserve();

  const handleDeleteCourseReserve = () => {
    deleteCourseReserve.mutate(courseReserveId!);
  };

  return (
    <div className="dashboardMobileCourseItem">
      <div>
        <img
          src={courseImageSrc}
          onError={() => setCourseImageSrc(blankThumbnail)}
          className="dashboardMobileCourseItemImage"
        />
      </div>
      <div>
        <Link to={`/courses/${id}`}>
          <h4 className="dashboardMobileCourseItemTitle">{title}</h4>
        </Link>
        <div className="dashboardMobileCourseItemBoxTwo">
          <div className="dashboardMobileCourseItemTeacherIconTitleBox">
            <img
              src={darkMode ? teacherDarkIcon : teacherIcon}
              className="dashboardMobileCourseItemTeacherIcon"
            />
            <h5 className="dashboardMobileCourseItemTeacherName">
              {teacherName}
            </h5>
          </div>
          <h6 className="dashboardMobileCourseItemPrice">{formattedPrice}</h6>
          {isCourseReserve && !isCourseReserveAccepted && (
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

export { DashboardMobileCourseItem };
