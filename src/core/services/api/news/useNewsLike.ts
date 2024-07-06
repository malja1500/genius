import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useNewsLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["newsLike"],
    mutationFn: async (newsId: string) =>
      await http.post(`/News/NewsLike/${newsId}`).then((res) => res.data),
    onMutate: () => showLoadingToast("در حال لایک خبر ...", "newsLikeLoading"),
    onSuccess: (data, newNews) => {
      dismissToast("newsLikeLoading");
      if (data.success) {
        showSuccessToast("خبر با موفقیت لایک شد");
        queryClient.invalidateQueries({
          queryKey: ["newsDetails", newNews],
        });
      } else {
        showErrorToast("مشکلی در لایک خبر به وجود آمد !");
      }
    },
    onError: () => {
      dismissToast("newsLikeLoading");
      showErrorToast("مشکلی در لایک خبر به وجود آمد !");
    },
  });
};
