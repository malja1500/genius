import { DashboardCourses as DashboardCoursesInterface } from "../../../types/user-panel/dashboard-courses";
import { MyCoursesList } from "../../../types/user-panel/my-courses-list";

import { Skeleton } from "../Skeleton";
import { PaginatedDashboardCourses } from "./PaginatedDashboardCourses";

const DashboardCourses = ({
  courses,
  totalCount,
  rowsOfPage,
  setCurrentPage,
  isLoading,
}: DashboardCoursesInterface<MyCoursesList>) => {
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
          <PaginatedDashboardCourses
            courses={courses || []}
            totalCount={totalCount || 0}
            rowsOfPage={rowsOfPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export { DashboardCourses };
