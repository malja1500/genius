import { CourseReserves } from "../../types/user-panel/course-reserves";

import { Skeleton } from "../common/Skeleton";
import { PaginatedDashboardCourseReserves } from "./PaginatedDashboardCourseReserves";

interface DashboardCourseReservesCourseProps {
  courseReserves: CourseReserves[];
  isLoading: boolean;
  rowsOfPage: number;
}

const DashboardCourseReservesCourse = ({
  courseReserves,
  isLoading,
  rowsOfPage,
}: DashboardCourseReservesCourseProps) => {
  const dashboardAllCoursesItemSkeletons = [1, 2, 3, 4, 5];

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
          <PaginatedDashboardCourseReserves
            courseReserves={courseReserves}
            rowsOfPage={rowsOfPage}
          />
        )}
      </div>
    </div>
  );
};

export { DashboardCourseReservesCourse };

