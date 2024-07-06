import { useQuery } from "@tanstack/react-query";

import http from "../../../interceptor";

export const useCourseReplyComments = (courseId: string, commentId: string) => {
  return useQuery({
    queryKey: ["courseReplyComments", courseId, commentId],
    queryFn: async () =>
      await http
        .get(`/Course/GetCourseReplyCommnets/${courseId}/${commentId}`)
        .then((res) => res.data),
  });
};
