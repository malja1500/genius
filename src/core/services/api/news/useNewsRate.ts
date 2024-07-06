import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

import { NewsRateInterface } from "../../../../types/news-rate";

export const useNewsRate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["newsRate"],
    mutationFn: async (params: NewsRateInterface) =>
      await http
        .post("/News/NewsRate", undefined, {
          params,
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال ثبت امتیاز ...", "newsRateLoading"),
    onSuccess: (data) => {
      if (data.success) {
        dismissToast("newsRateLoading");
        showSuccessToast("امتباز شما با موفقیت ثبت شد !");
      }

      queryClient.invalidateQueries({
        queryKey: ["newsDetails"],
      });
    },
    onError: () => {
      dismissToast("newsRateLoading");
      showErrorToast("مشکلی در ثبت امتیاز شما به وجود آمد !");
    },
  });
};
