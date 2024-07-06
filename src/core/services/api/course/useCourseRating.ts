import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useCourseRating = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["courseRating"],
    mutationFn: async (params: { courseId: string; rateNumber: number }) =>
      await http
        .post("/Course/SetCourseRating", undefined, {
          params,
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال ثبت امتیاز ...", "courseRatingLoading"),
    onSuccess: (data) => {
      dismissToast("courseRating");
      if (data.success) {
        showSuccessToast("امتیاز شما با موفقیت ثبت شد !");
      } else {
        showErrorToast(data.ErrorMessage);
      }

      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      dismissToast("courseRating");
      showErrorToast("مشکلی در ثبت امتیاز شما به وجود آمد !");
    },
  });
};
