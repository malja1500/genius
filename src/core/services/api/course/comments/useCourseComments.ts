import { useQuery } from "@tanstack/react-query";

import http from "../../../interceptor";

import { CourseComment } from "../../../../../types/course-comment";

export const useCourseComments = (courseId: string) => {
  return useQuery({
    queryKey: ["courseComments", courseId],
    queryFn: async () =>
      await http
        .get<CourseComment[]>(`/Course/GetCourseCommnets/${courseId}`)
        .then((res) => res.data),
  });
};
