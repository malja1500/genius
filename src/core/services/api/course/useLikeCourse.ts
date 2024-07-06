import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useLikeCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["likeCourse"],
    mutationFn: async (courseId: string) =>
      await http
        .post("/Course/AddCourseLike", undefined, {
          params: {
            courseId,
          },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال لایک دوره ...", "likeCourseLoading"),
    onSuccess: (data, courseId) => {
      dismissToast("likeCourseLoading");
      if (data.success) {
        showSuccessToast("دوره با موفقیت لایک شد");
      }

      queryClient.invalidateQueries({
        queryKey: ["courseDetails", courseId],
      });
    },
    onError: () => {
      dismissToast("likeCourseLoading");
      showErrorToast("مشکلی در لایک دوره به وجود آمد !");
    },
  });
};
