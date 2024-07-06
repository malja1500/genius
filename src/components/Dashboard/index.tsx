import { useDispatch } from "react-redux";

import { onUserProfileChange } from "../../redux/user-profile";

import { useCourseTop } from "../../core/services/api/course/useCourseTop";
import { useMyCourses } from "../../core/services/api/user-panel/useMyCourses";
import { useProfileInfo } from "../../core/services/api/user-panel/useProfileInfo";
import { convertDateToPersian } from "../../core/utils/date-helper.utils";

import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { Link } from "../common/Link";
import { Skeleton } from "../common/Skeleton";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardCourseItemSkeleton } from "./DashboardCourseItemSkeleton";
import { DashboardInformationBox } from "./DashboardInformationBox";
import { DashboardTitle } from "./DashboardTitle";

import blankThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useProfileInfo();
  const { data: topCourses, isLoading: isCourseTopLoading } = useCourseTop(2);
  const { data: myCourses, isLoading: isMyCoursesLoading } = useMyCourses(0, 2);

  dispatch(onUserProfileChange(data!));

  const formattedDate = convertDateToPersian(data?.birthDay!);

  const renderThumbnail = (thumbImageAddress: string | null) => {
    return thumbImageAddress &&
      thumbImageAddress !== "<string>" &&
      thumbImageAddress !== "undefined" &&
      thumbImageAddress !== "Not-set" &&
      thumbImageAddress !== "not-set"
      ? thumbImageAddress
      : blankThumbnail;
  };

  return (
    <div>
      <DashboardTitleBox>داشبورد</DashboardTitleBox>
      <div className="dashboardProfileInformationWrapper">
        <DashboardInformationBox
          label="نام و نام خانوادگی : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              `${data?.fName! || "کاربر"} ${data?.lName || "نابغه"}`
            )
          }
        />
        <DashboardInformationBox
          label="تاریخ تولد : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              formattedDate
            )
          }
        />
        <DashboardInformationBox
          label="شماره موبایل : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              data?.phoneNumber!
            )
          }
        />
        <DashboardInformationBox
          label="شماره ملی : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              data?.nationalCode!
            )
          }
        />
        <DashboardInformationBox
          label="ایمیل : "
          value={
            isLoading ? (
              <Skeleton width={140} height={7} className="mr-1 mt-[7px]" />
            ) : (
              data?.email!
            )
          }
        />
        <Link to="/dashboard/edit-profile" className="dashboardEditProfileLink">
          ویرایش
        </Link>
      </div>
      <div className="dashboardCoursesSection">
        <div>
          <DashboardTitle>آخرین دوره های ثبت شده</DashboardTitle>
          <div className="dashboardMappedCoursesWrapper">
            {isCourseTopLoading ? (
              <>
                <DashboardCourseItemSkeleton />
                <DashboardCourseItemSkeleton />
              </>
            ) : (
              topCourses?.map((course) => (
                <DashboardCourseItem
                  key={course.courseId}
                  id={course.courseId}
                  image={renderThumbnail(course.tumbImageAddress)}
                  title={course.title}
                  teacherName={course.teacherName || "کاربر نابغه"}
                  price={+course.cost}
                  isLoading={isCourseTopLoading}
                />
              ))
            )}
          </div>
        </div>
        <div>
          <DashboardTitle>آخرین دوره های خریداری شده</DashboardTitle>
          <div className="dashboardMappedCoursesWrapper">
            {isMyCoursesLoading ? (
              <>
                <DashboardCourseItemSkeleton />
                <DashboardCourseItemSkeleton />
              </>
            ) : (
              myCourses?.listOfMyCourses.map((course) => (
                <DashboardCourseItem
                  key={course.courseId}
                  id={course.courseId}
                  image={renderThumbnail(course.tumbImageAddress)}
                  title={course.courseTitle}
                  teacherName={course.fullName}
                  price={+course.cost}
                  isLoading={isMyCoursesLoading}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
