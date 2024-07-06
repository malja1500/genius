import { useMutation, useQueryClient } from "@tanstack/react-query";

import { showErrorToast } from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useDeleteFavoriteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-course-favorite"],
    mutationFn: async (courseFavoriteId: string) => {
      await http
        .delete("/Course/DeleteCourseFavorite", {
          data: {
            courseFavoriteId,
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      queryClient.invalidateQueries({
        queryKey: ["course-top"],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      showErrorToast("مشکلی در حذف دوره از علاقه مندی های شما به وجود آمد !");
    },
  });
};
