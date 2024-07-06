import { Tooltip } from "@mui/material";
import { SyntheticEvent } from "react";
import { useParams } from "react-router-dom";

import { useDarkModeSelector } from "../../redux/darkMode";

import { CurrentUserDislike } from "../../core/enums/CurrentUserDislike";
import { CurrentUserLike } from "../../core/enums/CurrentUserLike.enums";
import { IsCourseReserve } from "../../core/enums/IsCourseReserve.enums";
import { IsCourseUser } from "../../core/enums/IsCourseUser.enums";
import { useCourseReserve } from "../../core/services/api/course/course-reserve/useCourseReserve";
import { useDeleteCourseReserve } from "../../core/services/api/course/course-reserve/useDeleteCourseReserve";
import { useCourseDetails } from "../../core/services/api/course/useCourseDetails";
import { useCourseRating } from "../../core/services/api/course/useCourseRating";
import { useTeacherDetails } from "../../core/services/api/teacher/useTeacherDetails";
import { convertDateToPersian } from "../../core/utils/date-helper.utils";
import { priceWithCommas } from "../../core/utils/number-helper.utils";
import { showErrorToast } from "../../core/utils/toast.utils";

import { CourseLikeButton } from "../common/CourseLikeBox/CourseLikeButton";
import { Satisfaction } from "../common/Satisfaction";
import { Skeleton } from "../common/Skeleton";
import { CourseDetailsInformationBox } from "./CourseDetailsInformation/CourseDetailsInformationBox";
import { CourseTeacher } from "./CourseDetailsInformation/CourseTeacher";
import { CourseTabs } from "./CourseTabs";
import { RelatedCourses } from "./RelatedCourses";

import clockDarkIcon from "../../assets/images/CourseDetails/Icons/clock-dark2.svg";
import clockIcon from "../../assets/images/CourseDetails/Icons/clock.svg";
import noteDarkIcon from "../../assets/images/CourseDetails/Icons/note-dark.svg";
import noteIcon from "../../assets/images/CourseDetails/Icons/note.svg";
import calenderTickIcon from "../../assets/images/CourseDetails/Information/calendar-tick.svg";
import calenderIcon from "../../assets/images/CourseDetails/Information/calendar.svg";
import courseStatusIcon from "../../assets/images/CourseDetails/Information/monitor-recorder.svg";
import studentsCountIcon from "../../assets/images/CourseDetails/Information/profile-user.svg";
import blackThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

const CourseDetails = () => {
  const { courseId } = useParams();
  const { data: course, isLoading: isCourseLoading } = useCourseDetails(
    courseId!
  );
  const { data: teacher, isLoading: isTeacherLoading } = useTeacherDetails(
    course?.teacherId!
  );
  const addCourseReserve = useCourseReserve();
  const deleteCourseReserve = useDeleteCourseReserve();
  const addCourseRating = useCourseRating();
  const darkMode = useDarkModeSelector();

  const formattedPrice = priceWithCommas(+course?.cost!);
  const formattedStartTime = convertDateToPersian(course?.startTime!);
  const formattedEndTime = convertDateToPersian(course?.endTime!);

  const handleRateChange = async (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    addCourseRating.mutate({ courseId: courseId!, rateNumber: newValue! });
  };

  const handleCourseReserve = () => {
    if (course?.isCourseUser === IsCourseReserve.TRUE)
      showErrorToast("شما دانشجوی دوره هستید و قادر به حذف رزرو نیستید !");
    else {
      if (course?.isCourseReseve === IsCourseReserve.FALSE)
        addCourseReserve.mutate(course?.courseId);
      else deleteCourseReserve.mutate(course?.courseReseveId!);
    }
  };

  return (
    <div className="mt-4 w-[90%] lg:w-[1100px] mx-auto">
      <div className="courseDetailsBox">
        <div className="lg:w-[75%]">
          <div className="relative">
            {isCourseLoading ? (
              <Skeleton width="100%" height={500} borderRadius={24} />
            ) : (
              <img
                src={
                  course?.imageAddress &&
                  course?.imageAddress !== "undefined" &&
                  course?.imageAddress !== "<string>" &&
                  course?.imageAddress !== "Not-set" &&
                  course?.imageAddress !== "not-set" &&
                  course?.imageAddress !== "testimg"
                    ? course?.imageAddress
                    : blackThumbnail
                }
                className="rounded-[24px] w-full lg:max-h-[500px] object-cover"
              />
            )}
            <CourseLikeButton
              classes="courseLikeBox absolute top-10 right-8 bg-white dark:bg-gray-900"
              courseId={course?.courseId!}
              isCourseFavorite={course?.isUserFavorite!}
              courseFavoriteCourseId={course?.userFavoriteId!}
            />
            <div className="flex gap-4 absolute bottom-5 left-5">
              <div className="courseDetailImageBox">
                <img
                  src={darkMode ? noteDarkIcon : noteIcon}
                  className="-mt-[3px]"
                />
                <span className="courseDetailImageBoxTitle">
                  {course?.commentCount || 0} درس
                </span>
              </div>
              <div className="courseDetailImageBox">
                <img
                  src={darkMode ? clockDarkIcon : clockIcon}
                  className="-mt-[3px]"
                />
                <span className="courseDetailImageBoxTitle">2 ساعت</span>
              </div>
            </div>
          </div>
          <div className="mt-7">
            {isCourseLoading ? (
              <>
                <Skeleton width="80%" height={7} />
                <Skeleton width="100%" height={7} count={3} />
              </>
            ) : (
              <>
                <h1 className="font-[700] text-[32px] text-text1 dark:text-darkText">
                  {course?.title}
                </h1>
                <p className="font-[500] text-text2 dark:text-darkText mt-2">
                  {course?.miniDescribe}
                </p>
              </>
            )}
          </div>
          <Satisfaction
            nameData="دوره"
            likeCount={course?.likeCount!}
            disLikeCount={course?.dissLikeCount!}
            courseId={course?.courseId!}
            currentUserRateNumber={course?.currentUserRateNumber!}
            handleRateChange={handleRateChange}
            rateCount={course?.currentRate!}
            likeId={course?.userLikeId!}
            isLike={course?.currentUserLike === CurrentUserLike.TRUE}
            isDislike={course?.currentUserDissLike === CurrentUserDislike.TRUE}
          />
          <CourseTabs description={course?.describe!} courseId={courseId!} />
        </div>
        <div className="lg:w-[405px]">
          <div className="courseDetailsSidebar">
            <h3 className="courseDetailsSidebarShowInformationText">
              مشخصات دوره
            </h3>
            <div className="courseDetailsInformationItemsWrapper">
              <CourseDetailsInformationBox
                imageURL={studentsCountIcon}
                label="تعداد دانشجو"
                value={
                  isCourseLoading ? (
                    <Skeleton width={100} height={7} />
                  ) : (
                    String(course?.commentCount)
                  )
                }
              />
              <CourseDetailsInformationBox
                imageURL={courseStatusIcon}
                label="وضعیت دوره"
                value={
                  isCourseLoading ? (
                    <Skeleton width={100} height={7} />
                  ) : (
                    course?.courseStatusName! || "نا معلوم"
                  )
                }
              />
              <CourseDetailsInformationBox
                imageURL={calenderIcon}
                label="تاریخ شروع"
                value={
                  isCourseLoading ? (
                    <Skeleton width={100} height={7} />
                  ) : (
                    formattedStartTime
                  )
                }
              />
              <CourseDetailsInformationBox
                imageURL={calenderTickIcon}
                label="تاریخ پایان"
                value={
                  isCourseLoading ? (
                    <Skeleton width={100} height={7} />
                  ) : (
                    formattedEndTime
                  )
                }
              />
            </div>
            <div className="flex justify-between items-center mt-6 w-[90%] mx-auto">
              <Tooltip
                title={
                  course?.isCourseUser === IsCourseUser.TRUE &&
                  "شما دانشجوی دوره هستید و قادر به حذف رزرو نیستید !"
                }
                placement="top"
                arrow
              >
                <button
                  className="bg-primary shadow-courseAddToCarButtonShadow text-white w-[40%] lg:w-[145px] h-[56px] rounded-[80px]"
                  onClick={handleCourseReserve}
                  disabled={course?.isCourseUser === IsCourseUser.TRUE}
                >
                  {course?.isCourseUser === IsCourseUser.TRUE
                    ? "دانشجوی دوره"
                    : course?.isCourseReseve === IsCourseReserve.FALSE
                    ? "شرکت در دوره"
                    : "حذف رزرو"}
                </button>
              </Tooltip>

              {isCourseLoading ? (
                <Skeleton width={100} height={7} />
              ) : (
                <span className="font-[700] text-[20px] text-primaryColor mt-1">
                  {formattedPrice}{" "}
                  <span className="font-[500] text-text1 dark:text-darkText">
                    تومان
                  </span>
                </span>
              )}
            </div>
          </div>
          <CourseTeacher
            teacherImage={teacher?.pictureAddress!}
            teacherName={teacher?.fullName!}
            teacherJob={teacher?.fullName!}
            isTeacherLoading={isTeacherLoading}
          />
        </div>
      </div>
      <RelatedCourses />
    </div>
  );
};

export { CourseDetails };

