import { Dispatch, SetStateAction } from "react";

export interface DashboardCourses<T> {
  courses: T[];
  totalCount: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  rowsOfPage?: number;
  isLoading?: boolean;
}
