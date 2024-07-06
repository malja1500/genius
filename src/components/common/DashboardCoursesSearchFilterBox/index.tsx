import { Dispatch, SetStateAction } from "react";

import { SearchBox } from "../SearchBox";
import { DashboardCoursesPerPageFilter } from "./DashboardCoursesPerPageFilter";

interface DashboardCoursesSearchFilterBoxProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setCoursesPerPage: (coursesPerPage: number) => void;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
}

const DashboardCoursesSearchFilterBox = ({
  setCurrentPage,
  setCoursesPerPage,
  setQuery,
}: DashboardCoursesSearchFilterBoxProps) => {
  return (
    <div className="dashboardCoursesTopSection">
      <div className="lg:w-[87%]">
        <SearchBox
          placeholder="جستجوی دوره ..."
          inputClasses="pl-4 w-full"
          setQuery={setQuery}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <DashboardCoursesPerPageFilter setCoursesPerPage={setCoursesPerPage} />
    </div>
  );
};

export { DashboardCoursesSearchFilterBox };
