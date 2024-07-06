import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useNewsDislike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["newsDislike"],
    mutationFn: async (newsId: string) =>
      await http.post(`/News/NewsDissLike/${newsId}`).then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال دیس لایک لایک خبر ...", "newsDislikeLoading"),
    onSuccess: (data, newNews) => {
      dismissToast("newsDislikeLoading");
      if (data.success) {
        showSuccessToast("خبر با موفقیت دیس لایک شد !");
      } else {
        showErrorToast(data.ErrorMessage);
      }
      queryClient.invalidateQueries({
        queryKey: ["newsDetails", newNews],
      });
    },
    onError: () => {
      dismissToast("newsDislikeLoading");
      showErrorToast("مشکلی در دیس لایک خبر به وجود آمد !");
    },
  });
};
