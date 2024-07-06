import { useMutation, useQueryClient } from "@tanstack/react-query";

import { showErrorToast, showSuccessToast } from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useDeleteCourseLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCourseLike"],
    mutationFn: async (courseLikeId: string) =>
      await http
        .delete("/Course/DeleteCourseLike", {
          data: { courseLikeId },
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => res.data),
    onSuccess: () => {
      showSuccessToast("لایک شما با موفقیت حذف شد !");

      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      showErrorToast("مشکلی در حذف دوره از علاقه مندی های شما به وجود آمد !");
    },
  });
};
