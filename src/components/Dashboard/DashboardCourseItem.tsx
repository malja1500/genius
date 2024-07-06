import { useState } from "react";

import { useDarkModeSelector } from "../../redux/darkMode";

import { priceWithCommas } from "../../core/utils/number-helper.utils";

import { Link } from "../common/Link";
import { Skeleton } from "../common/Skeleton";

import teacherDarkIcon from "../../assets/images/Courses/Icons/teacher-dark.svg";
import teacherIcon from "../../assets/images/Courses/Icons/teacher.svg";
import blankThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

interface DashboardCourseItemProps {
  id: string;
  image: string;
  title: string;
  teacherName: string;
  price: number;
  isLoading: boolean;
}

const DashboardCourseItem = ({
  id,
  image,
  title,
  teacherName,
  price,
  isLoading,
}: DashboardCourseItemProps) => {
  const [courseImage, setCourseImage] = useState(image);

  const darkMode = useDarkModeSelector();

  const formattedPrice = priceWithCommas(price);

  return (
    <div className="dashboardPageCourseItem">
      <div className="w-[30%]">
        {isLoading ? (
          <Skeleton width={120} height={80} borderRadius={20} />
        ) : (
          <Link to={`/courses/${id}`}>
            <img
              src={courseImage}
              onError={() => setCourseImage(blankThumbnail)}
              className="dashboardPageCourseItemImage"
            />
          </Link>
        )}
      </div>
      <div className="dashboardPageCourseItemLeftSide">
        <div>
          {isLoading ? (
            <Skeleton width={120} height={7} />
          ) : (
            <Link to={`/courses/${id}`}>
              <h4 className="dashboardPageCourseItemTitle">{title}</h4>
            </Link>
          )}
          <div className="dashboardPageCourseItemTeacherBoxWrapper">
            {isLoading ? (
              <Skeleton width={100} height={7} />
            ) : (
              <>
                <img src={darkMode ? teacherDarkIcon : teacherIcon} />
                <span className="dashboardPageCourseItemTeacherName">
                  {teacherName}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="mt-auto">
          <div className="-mb-[3px]">
            {isLoading ? (
              <Skeleton width={90} height={7} />
            ) : (
              <span className="dashboardPageCourseItemPrice">
                {formattedPrice}{" "}
                <span className="text-text1 dark:text-darkText">تومان</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardCourseItem };
