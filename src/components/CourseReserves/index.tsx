import { useMyReserveCourses } from "../../core/services/api/user-panel/useMyReserveCourses";

import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { DashboardCourseReservesCourse } from "./DashboardCourseReservesCourse";

const CourseReserves = () => {
  const { data, isLoading } = useMyReserveCourses();

  return (
    <div>
      <DashboardTitleBox>دوره های رزرو شده</DashboardTitleBox>
      <DashboardCourseReservesCourse
        courseReserves={data || []}
        rowsOfPage={9}
        isLoading={isLoading}
      />
    </div>
  );
};

export { CourseReserves };
