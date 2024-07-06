import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { CourseDetailsInterface } from "../../../../types/course-details";

export const useCourseDetails = (courseId: string) => {
  return useQuery({
    queryKey: ["courseDetails", courseId],
    queryFn: async () =>
      await http
        .get<CourseDetailsInterface>("/Home/GetCourseDetails", {
          params: {
            courseId,
          },
        })
        .then((res) => res.data),
  });
};
