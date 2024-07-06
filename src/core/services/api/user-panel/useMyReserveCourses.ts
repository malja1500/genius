import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

export const useMyReserveCourses = () => {
  return useQuery({
    queryKey: ["myReserveCourses"],
    queryFn: async () =>
      await http.get("/SharePanel/GetMyCoursesReserve").then((res) => res.data),
  });
};
