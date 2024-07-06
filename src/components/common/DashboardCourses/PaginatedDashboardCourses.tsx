import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import { DashboardCourses } from "../../../types/user-panel/dashboard-courses";
import { MyCoursesList } from "../../../types/user-panel/my-courses-list";

import { Pagination } from "../Pagination";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardMobileCourseItem } from "./DashboardMobileCourseItem";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

const PaginatedDashboardCourses = ({
  courses,
  totalCount,
  rowsOfPage,
  setCurrentPage,
}: DashboardCourses<MyCoursesList>) => {
  const pageCount = Math.ceil(totalCount / rowsOfPage!);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        {courses && courses.length === 0 && (
          <span className="text-center font-[500] text-text1 dark:text-darkText">
            دوره ای پیدا نشد !
          </span>
        )}
        {courses &&
          courses.map((course) => {
            const formattedPrice = priceWithCommas(+course.cost);

            return (
              <div key={course.courseId}>
                <DashboardCourseItem
                  courseId={course.courseId}
                  tumbImageAddress={course.tumbImageAddress || blankThumbnail}
                  courseTitle={course.courseTitle}
                  lastUpdate={course.lastUpdate}
                  teacherName={course.teacherName || "کاربر نابغه"}
                  formattedPrice={formattedPrice}
                />
                <DashboardMobileCourseItem
                  key={course.courseId}
                  image={course.tumbImageAddress || blankThumbnail}
                  id={course.courseId}
                  title={course.courseTitle}
                  teacherName={course.fullName}
                  formattedPrice={formattedPrice}
                />
              </div>
            );
          })}
      </div>
      {pageCount > 1 && (
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      )}
    </div>
  );
};

export { PaginatedDashboardCourses };
