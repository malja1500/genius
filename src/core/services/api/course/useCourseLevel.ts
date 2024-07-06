import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { CourseLevelsInterface } from "../../../../types/course-levels";

export const useCourseLevel = () => {
  return useQuery({
    queryKey: ["courseLevel"],
    queryFn: async () =>
      await http
        .get<CourseLevelsInterface[]>("/CourseLevel/GetAllCourseLevel")
        .then((res) => res.data),
  });
};
