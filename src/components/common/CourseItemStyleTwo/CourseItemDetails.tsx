import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { CourseInterface } from "../../../types/course";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { CourseItemDetailItem } from "./CourseItemDetailItem";

import calenderIcon from "../../../assets/images/Courses/Icons/calendar.svg";
import clockIcon from "../../../assets/images/Courses/Icons/clock.svg";
import lessonsIcon from "../../../assets/images/Courses/Icons/note.svg";
import studentsIcon from "../../../assets/images/Courses/Icons/profile-user.svg";
import teacherIcon from "../../../assets/images/Courses/Icons/teacher.svg";
import calenderDarkIcon from "../../../assets/images/Courses/Icons/calendar-dark.svg";
import clockDarkIcon from "../../../assets/images/Courses/Icons/clock-dark.svg";
import lessonsDarkIcon from "../../../assets/images/Courses/Icons/note-dark.svg";
import studentsDarkIcon from "../../../assets/images/Courses/Icons/profile-user-dark.svg";
import teacherDarkIcon from "../../../assets/images/Courses/Icons/teacher-dark.svg";

interface CourseItemDetailsProps {
  course: CourseInterface;
}

const CourseItemDetails = ({ course }: CourseItemDetailsProps) => {
  const darkMode = useDarkModeSelector();
  const formattedLastUpdateDate = convertDateToPersian(course.lastUpdate);

  return (
    <div className="courseItemStyleTwoDetailsWrapper">
      <CourseItemDetailItem
        imageURL={darkMode ? teacherDarkIcon : teacherIcon}
        label={course.teacherName}
      />
      <CourseItemDetailItem
        imageURL={darkMode ? studentsDarkIcon : studentsIcon}
        label={`${course.commandCount} دانش‌آموز`}
      />
      <CourseItemDetailItem
        imageURL={darkMode ? lessonsDarkIcon : lessonsIcon}
        label={`${course.commandCount} درس`}
      />
      <CourseItemDetailItem
        imageURL={darkMode ? clockDarkIcon : clockIcon}
        label={`${course.commandCount} ساعت`}
      />
      <CourseItemDetailItem
        imageURL={darkMode ? calenderDarkIcon : calenderIcon}
        label={formattedLastUpdateDate}
      />
    </div>
  );
};

export { CourseItemDetails };
