interface DashboardCoursesPerPageFilterProps {
  setCoursesPerPage: (perPage: number) => void;
}

const DashboardCoursesPerPageFilter = ({
  setCoursesPerPage,
}: DashboardCoursesPerPageFilterProps) => {
  return (
    <div className="dashboardCoursesPerPageFilter">
      <select
        name="coursesPerPage"
        defaultValue={8}
        className="dashboardCoursesPerPageFilterSelectBox"
        onChange={(e) => setCoursesPerPage(parseInt(e.target.value))}
      >
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
    </div>
  );
};

export { DashboardCoursesPerPageFilter };
