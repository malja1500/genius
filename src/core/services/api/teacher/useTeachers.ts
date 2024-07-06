import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { TeacherItemsInterface } from "../../../../types/teacher-items";

export const useTeachers = () => {
  return useQuery<TeacherItemsInterface[], Error>({
    queryKey: ["teachers"],
    queryFn: async () =>
      await http.get("/Home/GetTeachers").then((res) => res.data),
  });
};
