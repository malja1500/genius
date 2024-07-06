import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useAddReplyCourseComment = (commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addCourseReplyComment"],
    mutationFn: async (comment: FormData) =>
      await http
        .post("/Course/AddReplyCourseComment", comment)
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast(
        "در حال ثبت ریپلای نظر شما ...",
        "addCourseReplyCommentLoading"
      ),
    onSuccess: (data) => {
      dismissToast("addCourseReplyCommentLoading");
      if (data.success) showSuccessToast("ریپلای شما با موفقیت ثبت شد !");
      else showErrorToast("مشکلی در ثبت ریپلای شما به وجود آمد!");

      queryClient.invalidateQueries({
        queryKey: ["courseComments", commentId],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseReplyComments"],
      });
    },
    onError: () => {
      dismissToast("addCourseReplyCommentLoading");
      showErrorToast("مشکلی در ثبت ریپلای شما به وجود آمد!");
    },
  });
};
