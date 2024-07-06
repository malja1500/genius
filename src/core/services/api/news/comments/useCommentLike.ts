import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useCommentLike = (likeType: boolean) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["newsCommentLike"],
    mutationFn: async (commentId: string) =>
      await http
        .post(`/News/CommentLike/${commentId}`, undefined, {
          params: {
            likeType,
          },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال لایک نظر ...", "newsCommentLikeLoading"),
    onSuccess: (data) => {
      dismissToast("newsCommentLikeLoading");
      if (data.success) showSuccessToast("نظر با موفقیت لایک شد !");

      queryClient.invalidateQueries({
        queryKey: ["newsComments"],
      });
      queryClient.invalidateQueries({
        queryKey: ["newsReplyComments"],
      });
    },
    onError: () => {
      dismissToast("newsCommentLikeLoading");
      showErrorToast("مشکلی در لایک نظر به وجود آمد !");
    },
  });
};
