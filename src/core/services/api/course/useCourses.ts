import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

export const useCourses = (
  pageNumber: number,
  rowsOfPage: number | undefined,
  sortingCol?: string | undefined,
  sortType?: string | undefined,
  query?: string | undefined,
  costDown?: number | undefined,
  costUp?: number | undefined,
  techCount?: number | undefined,
  listTech?: string | string[] | undefined,
  courseLevelId?: number | undefined,
  courseTypeId?: number | undefined,
  startDate?: string | undefined,
  endDate?: string | undefined,
  teacherId?: number | undefined
) => {
  return useQuery({
    queryKey: [
      "courses",
      pageNumber,
      rowsOfPage,
      sortingCol,
      sortType,
      query,
      costDown,
      costUp,
      techCount,
      listTech,
      courseLevelId,
      courseTypeId,
      startDate,
      endDate,
      teacherId,
    ],
    queryFn: async () =>
      await http
        .get("/Home/GetCoursesWithPagination", {
          params: {
            pageNumber: pageNumber + 1,
            rowsOfPage,
            sortingCol,
            sortType,
            query,
            costDown,
            costUp,
            techCount,
            listTech,
            courseLevelId,
            courseTypeId,
            startDate,
            endDate,
            teacherId,
          },
        })
        .then((res) => res.data),
  });
};
