import { priceWithCommas } from "../../../core/utils/number-helper.utils";
import { handleShowImage } from "../../../core/utils/show-image-helper.utils";

import { CourseInterface } from "../../../types/course";
import { DashboardCourses } from "../../../types/user-panel/dashboard-courses";

import { Pagination } from "../Pagination";
import { Skeleton } from "../Skeleton";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardMobileCourseItem } from "./DashboardMobileCourseItem";

const PaginatedDashboardAllCourses = ({
  courses,
  totalCount,
  rowsOfPage,
  setCurrentPage,
  isLoading,
}: DashboardCourses<CourseInterface>) => {
  const pageCount = Math.ceil(totalCount / rowsOfPage!);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const dashboardAllCoursesItemSkeletons = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="dashboardCoursesSectionWrapper">
      <div>
        {isLoading ? (
          <div className="flex flex-col gap-4">
            {dashboardAllCoursesItemSkeletons.map((skeleton) => (
              <Skeleton
                key={skeleton}
                width="100%"
                className="h-[80px] lg:h-[60px]"
              />
            ))}
          </div>
        ) : (
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
                        tumbImageAddress={handleShowImage(
                          course.tumbImageAddress
                        )}
                        courseTitle={course.title}
                        lastUpdate={course.lastUpdate}
                        teacherName={course.teacherName}
                        formattedPrice={formattedPrice}
                      />
                      <DashboardMobileCourseItem
                        key={course.courseId}
                        image={handleShowImage(course.tumbImageAddress)}
                        id={course.courseId}
                        title={course.title}
                        teacherName={course.teacherName}
                        formattedPrice={formattedPrice}
                      />
                    </div>
                  );
                })}
            </div>
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { PaginatedDashboardAllCourses };
