import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useDeleteLikeNews = (newsId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteNewsLike"],
    mutationFn: async (deleteEntityId: string) =>
      await http
        .delete("/News/DeleteLikeNews", {
          data: { deleteEntityId },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال حذف لایک خبر ...", "deleteNewsLikeLoading"),
    onSuccess: (data) => {
      dismissToast("deleteNewsLikeLoading");
      if (data.success) showSuccessToast("لایک خبر با موفقیت حذف شد !");

      queryClient.invalidateQueries({
        queryKey: ["newsDetails", newsId],
      });
    },
    onError: () => {
      dismissToast("deleteNewsLikeLoading");
      showErrorToast("مشکلی در حذف لایک خبر به وجود آمد !");
    },
  });
};
