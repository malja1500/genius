import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { MyCourses } from "../../../../types/user-panel/my-courses";

export const useMyCourses = (
  pageNumber?: number,
  rowsOfPage?: number,
  sortingCol?: string,
  sortType?: string,
  query?: string
) => {
  return useQuery({
    queryKey: [
      "myCourses",
      pageNumber,
      rowsOfPage,
      sortingCol,
      sortType,
      query,
    ],
    queryFn: async () =>
      await http
        .get<MyCourses>("/SharePanel/GetMyCourses", {
          params: {
            pageNumber: pageNumber ? pageNumber + 1 : undefined,
            rowsOfPage,
            sortingCol,
            sortType,
            query,
          },
        })
        .then((res) => res.data),
  });
};
