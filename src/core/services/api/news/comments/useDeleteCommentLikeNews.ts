import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useDeleteCommentLikeNews = (newsId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCommentLikeNews"],
    mutationFn: async (deleteEntityId: string) =>
      await http
        .delete("/News/DeleteCommentLikeNews", {
          data: {
            deleteEntityId,
          },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast(
        "در حال حذف لایک نظر ...",
        "deleteCommentLikeNewsLoading"
      ),
    onSuccess: (data) => {
      dismissToast("deleteCommentLikeNewsLoading");
      if (data.success) showSuccessToast("لایک نظر با موفقیت حذف شد !");

      queryClient.invalidateQueries({
        queryKey: ["newsComments", newsId],
      });
      queryClient.invalidateQueries({
        queryKey: ["newsReplyComments"],
      });
    },
    onError: () => {
      dismissToast("deleteCommentLikeNewsLoading");
      showErrorToast("مشکلی در حذف لایک نظر به وجود آمد !");
    },
  });
};
