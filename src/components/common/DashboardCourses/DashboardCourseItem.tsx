import { RemoveRedEye } from "@mui/icons-material";
import { useState } from "react";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { Link } from "../Link";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface DashboardCourseItemProps {
  courseId: string;
  tumbImageAddress: string;
  lastUpdate: string;
  courseTitle: string;
  teacherName: string;
  formattedPrice: string;
}

const DashboardCourseItem = ({
  courseId,
  tumbImageAddress,
  courseTitle,
  teacherName,
  lastUpdate,
  formattedPrice,
}: DashboardCourseItemProps) => {
  const [courseImageSrc, setCourseImageSrc] = useState(tumbImageAddress);

  const convertedUpdateDate = convertDateToPersian(lastUpdate);

  return (
    <div key={courseId} className="dashboardCourseItem">
      <img
        src={courseImageSrc}
        onError={() => setCourseImageSrc(blankThumbnail)}
        className="dashboardCourseItemImage"
      />
      <Link to={`/courses/${courseId}`} className="dashboardCourseTitleLink">
        <h5 className="dashboardCourseTitle w-[110px]">{courseTitle}</h5>
      </Link>
      <h6 className="dashboardCourseItemText w-[130px] truncate">
        {teacherName}
      </h6>
      <h6 className="dashboardCourseItemText">{convertedUpdateDate}</h6>
      <h6 className="dashboardCourseItemText">{formattedPrice}</h6>
      <div className="dashboardCourseItemIconsWrapper">
        <Link to={`/courses/${courseId}`}>
          <RemoveRedEye className="dashboardCourseItemShowIcon" />
        </Link>
      </div>
    </div>
  );
};

export { DashboardCourseItem };
