import { useDarkModeSelector } from "../../../redux/darkMode";

import { Skeleton } from "../../common/Skeleton";

import teacherDarkIcon from "../../../assets/images/CourseDetails/Icons/teacher-dark.svg";
import teacherIcon from "../../../assets/images/CourseDetails/Icons/teacher.svg";
import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface CourseTeacherProps {
  teacherImage: string;
  teacherName: string;
  teacherJob: string;
  isTeacherLoading: boolean;
}

const CourseTeacher = ({
  teacherImage,
  teacherName,
  teacherJob,
  isTeacherLoading,
}: CourseTeacherProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="courseDetailsTeacherBox">
      <div>
        {isTeacherLoading ? (
          <Skeleton width={90} height={90} borderRadius="100%" />
        ) : (
          <img
            src={
              teacherImage &&
              teacherImage !== "<string>" &&
              teacherImage !== "undefined" &&
              teacherImage !== "Not-set" &&
              teacherImage !== "not-set"
                ? teacherImage
                : blankThumbnail
            }
            className="w-[90px] h-[90px] rounded-full"
          />
        )}
      </div>
      <div>
        {isTeacherLoading ? (
          <>
            <Skeleton width={100} height={7} />
            <Skeleton width={130} height={7} />
          </>
        ) : (
          <>
            <div className="flex gap-1">
              <img src={darkMode ? teacherDarkIcon : teacherIcon} />
              <h4 className="font-[700] text-text1 dark:text-darkText">
                {teacherName || "کاربر نابغه"}
              </h4>
            </div>
            <p className="font-[500] text-[14px] text-text2 dark:text-darkText">
              {teacherJob || "Full stack developer"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export { CourseTeacher };
