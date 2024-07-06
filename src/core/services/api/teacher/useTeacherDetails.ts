import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

export const useTeacherDetails = (teacherId: number) => {
  return useQuery({
    queryKey: ["teacherDetails", teacherId],
    queryFn: async () =>
      await http
        .get("/Home/GetTeacherDetails", {
          params: {
            teacherId,
          },
        })
        .then((res) => res.data),
  });
};
