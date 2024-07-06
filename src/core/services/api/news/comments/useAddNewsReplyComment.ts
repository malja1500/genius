import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

import { AddNewsReplyComment } from "../../../../../types/add-news-reply-comment";

export const useAddNewsReplyComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addNewsReplyComment"],
    mutationFn: async (comment: AddNewsReplyComment) =>
      await http
        .post("/News/CreateNewsReplyComment", comment)
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast(
        "در حال ثبت ریپلای نظر شما ...",
        "addNewsReplyCommentLoadigng"
      ),
    onSuccess: (data) => {
      dismissToast("addNewsReplyCommentLoadigng");
      if (data.success) showSuccessToast("ریپلای شما با موفقیت ثبت شد !");
      else showErrorToast("مشکلی در ثبت ریپلای شما به وجود آمد!");

      queryClient.invalidateQueries({
        queryKey: ["newsDetails"],
      });
      queryClient.invalidateQueries({
        queryKey: ["newsReplyComments"],
      });
    },
    onError: () => {
      dismissToast("addNewsReplyCommentLoadigng");
      showErrorToast("مشکلی در ثبت ریپلای شما به وجود آمد!");
    },
  });
};
