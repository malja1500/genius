import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useCourseCommentDislike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["courseCommentDislike"],
    mutationFn: async (courseCommentId: string) =>
      await http
        .post("/Course/AddCourseCommentDissLike", undefined, {
          params: {
            courseCommandId: courseCommentId,
          },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast(
        "در حال دیس لایک نظر ...",
        "courseCommentDislikeLoading"
      ),
    onSuccess: (data) => {
      dismissToast("courseCommentDislikeLoading");
      if (data.success) showSuccessToast("نظر با موفقیت دیس لایک شد !");
      else showErrorToast(data.ErrorMessage);

      queryClient.invalidateQueries({
        queryKey: ["courseComments"],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseReplyComments"],
      });
    },
    onError: () => {
      dismissToast("courseCommentDislikeLoading");
      showErrorToast("مشکلی در دیس لایک نظر به وجود آمد !");
    },
  });
};
