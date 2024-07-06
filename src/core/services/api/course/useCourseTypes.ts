import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { CourseTypesInterface } from "../../../../types/course-types";

export const useCourseTypes = () => {
  return useQuery({
    queryKey: ["courseTypes"],
    queryFn: async () =>
      await http
        .get<CourseTypesInterface[]>("/CourseType/GetCourseTypes")
        .then((res) => res.data),
  });
};
