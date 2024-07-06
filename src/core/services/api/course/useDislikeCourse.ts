import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useDislikeCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["dislikeCourse"],
    mutationFn: async (courseId: string) =>
      await http
        .post("/Course/AddCourseDissLike", undefined, {
          params: {
            courseId,
          },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال دیس لایک دوره ...", "dislikeCourseLoading"),
    onSuccess: (data) => {
      dismissToast("dislikeCourseLoading");
      if (data.success) showSuccessToast("دوره با موفقیت دیس لایک شد");

      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      dismissToast("dislikeCourseLoading");
      showErrorToast("مشکلی در دیس لایک دوره به وجود آمد !");
    },
  });
};
