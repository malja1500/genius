import { useState } from "react";

import { handleShowImage } from "../../../core/utils/show-image-helper.utils";
import { useDarkModeSelector } from "../../../redux/darkMode";
import { TeacherItemsInterface } from "../../../types/teacher-items";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";
import awardDarkIcon from "../../../assets/images/Landing/LandingTeachers/Icons/award-dark.svg";
import awardIcon from "../../../assets/images/Landing/LandingTeachers/Icons/award.svg";

const TeacherItem = ({ teacher }: { teacher: TeacherItemsInterface }) => {
  const [teacherImageSrc, setTeacherImageSrc] = useState(
    handleShowImage(teacher.pictureAddress!)
  );

  const darkMode = useDarkModeSelector();

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative">
          <img
            src={teacherImageSrc}
            onError={() => setTeacherImageSrc(blankThumbnail)}
            className="w-[280px] h-[290px] rounded-[15px] object-cover m-5"
          />
          <div className="landingTeacherItemCoursesCount">
            <img
              src={darkMode ? awardDarkIcon : awardIcon}
              className="w-[16px] h-[16px]"
            />
            <span className="font-[500] text-[14px] text-primaryColor dark:text-darkText">
              {teacher.courseCounts} دوره
            </span>
          </div>
        </div>
        <h4 className="mt-2 font-[700] text-[24px] text-text1 dark:text-darkText">
          {teacher.fullName}
        </h4>
        <span className="font-[500] text-text2 dark:text-darkText text-center">
          {teacher.newsCount} مقاله
        </span>
      </div>
    </>
  );
};

export { TeacherItem };
