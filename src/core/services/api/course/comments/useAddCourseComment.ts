import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useAddCourseComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addCourseComment"],
    mutationFn: async (comment: FormData) =>
      await http
        .post("/Course/AddCommentCourse", comment)
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال ثبت نظر ...", "addCourseCommentLoading"),
    onSuccess: (data) => {
      dismissToast("addCourseCommentLoading");
      if (data.success) showSuccessToast("نظر شما با موفقیت ثبت شد !");
      else showErrorToast(data.errorMessage);

      queryClient.invalidateQueries({
        queryKey: ["courseComments"],
      });
    },
    onError: () => {
      dismissToast("addCourseCommentLoading");
      showErrorToast("مشکلی در ثبت نظر شما به وجود آمد !");
    },
  });
};
