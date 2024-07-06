import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

import { AddNewsComment } from "../../../../../types/add-news-comment";

export const useAddNewsComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addNewsComment"],
    mutationFn: async (comment: AddNewsComment) =>
      await http
        .post("/News/CreateNewsComment", comment)
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال ثبت نظر ...", "addNewsCommentLoading"),
    onSuccess: (data) => {
      dismissToast("addNewsCommentLoading");
      if (data.success) showSuccessToast("نظر شما با موفقیت ثبت شد !");

      queryClient.invalidateQueries({
        queryKey: ["newsComments"],
      });
    },
    onError: () => {
      dismissToast("addNewsCommentLoading");
      showErrorToast("مشکلی در ثبت نظر شما به وجود آمد !");
    },
  });
};
