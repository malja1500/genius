import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useCourseCommentLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["courseCommentLike"],
    mutationFn: async (courseCommentId: string) =>
      await http
        .post(`/Course/AddCourseCommentLike`, undefined, {
          params: {
            courseCommandId: courseCommentId,
          },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال لایک نظر ...", "courseCommentLikeLoading"),
    onSuccess: (data) => {
      dismissToast("courseCommentLikeLoading");
      if (data.success) showSuccessToast("نظر با موفقیت لایک شد !");
      else showErrorToast(data.ErrorMessage);

      queryClient.invalidateQueries({
        queryKey: ["courseComments"],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseReplyComments"],
      });
    },
    onError: () => {
      dismissToast("courseCommentLikeLoading");
      showErrorToast("مشکلی در لایک نظر به وجود آمد !");
    },
  });
};
