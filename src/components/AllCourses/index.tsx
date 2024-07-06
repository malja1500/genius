import { useState } from "react";

import { useCourses } from "../../core/services/api/course/useCourses";
import { showErrorToast } from "../../core/utils/toast.utils";

import { PaginatedDashboardAllCourses } from "../common/DashboardCourses/PaginatedDashboardAllCourses";
import { DashboardCoursesSearchFilterBox } from "../common/DashboardCoursesSearchFilterBox";
import { DashboardTitleBox } from "../common/DashboardTitleBox";

const AllCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsOfPage, setRowsOfPage] = useState(8);
  const [query, setQuery] = useState<string>();

  const { data, error, isLoading } = useCourses(
    currentPage,
    rowsOfPage,
    undefined,
    undefined,
    query ? query : undefined
  );

  if (error) showErrorToast("مشکلی در دریافت دوره ها به وجود آمد !");

  return (
    <div>
      <DashboardTitleBox>همه دوره ها</DashboardTitleBox>
      <DashboardCoursesSearchFilterBox
        setCurrentPage={setCurrentPage}
        setCoursesPerPage={setRowsOfPage}
        setQuery={setQuery}
      />
      <PaginatedDashboardAllCourses
        courses={data?.courseFilterDtos || []}
        totalCount={data?.totalCount || 0}
        isLoading={isLoading}
        rowsOfPage={rowsOfPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { AllCourses };
