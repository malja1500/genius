import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useDeleteCourseCommentLike = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCourseCommentLikeNews"],
    mutationFn: async (courseCommentId: string) =>
      await http
        .delete("/Course/DeleteCourseCommentLike", {
          params: {
            courseCommandId: courseCommentId,
          },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast(
        "در حال حذف لایک نظر ...",
        "deleteCourseCommentLikeNewsLoading"
      ),
    onSuccess: (data) => {
      dismissToast("deleteCourseCommentLikeNewsLoading");
      if (data.success) showSuccessToast("لایک نظر با موفقیت حذف شد !");
      else
        data.ErrorMessage.map((errorMessage: string) =>
          showErrorToast(errorMessage)
        );

      queryClient.invalidateQueries({
        queryKey: ["courseComments", courseId],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseReplyComments"],
      });
    },
    onError: () => {
      dismissToast("deleteCourseCommentLikeNewsLoading");
      showErrorToast("مشکلی در حذف لایک نظر به وجود آمد !");
    },
  });
};
