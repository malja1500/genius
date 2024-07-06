import { useState } from "react";
import Tilt from "react-parallax-tilt";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { priceWithCommas } from "../../../core/utils/number-helper.utils";
import { handleShowImage } from "../../../core/utils/show-image-helper.utils";

import { CourseInterface } from "../../../types/course";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { CourseLikeBox } from "../CourseLikeBox";
import { Link } from "../Link";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";
import calenderDarkIcon from "../../../assets/images/Landing/LandingCourses/calendar-dark.svg";
import calenderIcon from "../../../assets/images/Landing/LandingCourses/calendar.svg";
import clockDarkIcon from "../../../assets/images/Landing/LandingCourses/clock-dark.svg";
import clockIcon from "../../../assets/images/Landing/LandingCourses/clock.svg";
import noteDarkIcon from "../../../assets/images/Landing/LandingCourses/note-dark.svg";
import noteIcon from "../../../assets/images/Landing/LandingCourses/note.svg";

interface CourseItemProps {
  course: CourseInterface;
}

const CourseItem = ({ course }: CourseItemProps) => {
  const [courseImageSrc, setCourseImageSrc] = useState(
    handleShowImage(course.tumbImageAddress)
  );

  const darkMode = useDarkModeSelector();
  const formattedPrice = priceWithCommas(+course.cost);
  const formattedDate = convertDateToPersian(course.lastUpdate);

  return (
    <Tilt>
      <div className={`courseItemS2 pt-[2px]`}>
        <Link to={`/courses/${course.courseId}`}>
          <img
            src={courseImageSrc}
            onError={() => setCourseImageSrc(blankThumbnail)}
            className="courseItemImage"
          />
        </Link>
        <h4 className="font-[700] text-text1 dark:text-darkText mt-4">
          <Link to={`/courses/${course.courseId}`}>{course.title}</Link>
        </h4>
        <div className="bg-[#ECEFF1] dark:bg-darkBackground rounded-[24px] flex justify-between items-center mt-5 h-[40px] px-3">
          <div className="courseItemDetailsBox">
            {darkMode ? <img src={noteDarkIcon} /> : <img src={noteIcon} />}
            <span className="courseItemDetailsBoxText">
              {course.commandCount} درس
            </span>
          </div>
          <div className="courseItemDetailsBox">
            {darkMode ? <img src={clockDarkIcon} /> : <img src={clockIcon} />}
            <span className="courseItemDetailsBoxText">20 ساعت</span>
          </div>
          <div className="courseItemDetailsBox">
            {darkMode ? (
              <img src={calenderDarkIcon} />
            ) : (
              <img src={calenderIcon} />
            )}
            <span className="courseItemDetailsBoxText">{formattedDate}</span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-[14px]">
            <span className="font-[700]">مدرس: </span> {course.teacherName}
          </span>
          <span className="text-[14px]">0 دانش آموز</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <CourseLikeBox
            courseId={course.courseId}
            isUserFavorite={course.userFavorite || course.isUserFavorite}
            courseFavoriteCourseId={course.userFavoriteId}
          />
          <div className="font-[500] text-[12px] text-text1 dark:text-darkText flex">
            <span className="text-primaryColor text-[16px] font-[700] ml-2">
              {formattedPrice}
            </span>{" "}
            تومان
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export { CourseItem };
