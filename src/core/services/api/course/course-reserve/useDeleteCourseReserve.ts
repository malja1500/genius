import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useDeleteCourseReserve = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCourseReserve"],
    mutationFn: async (id: string) =>
      await http
        .delete("/CourseReserve", {
          data: { id },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال حذف رزرو ...", "deleteCourseReserveLoading"),
    onSuccess: (data) => {
      dismissToast("deleteCourseReserveLoading");
      if (data.success) showSuccessToast("رزرو دوره با موفقیت حذف شد !");
      else showErrorToast("مشکلی در حذف رزرو به وجود آمد !");

      queryClient.invalidateQueries({
        queryKey: ["myReserveCourses"],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      dismissToast("deleteCourseReserveLoading");
      showErrorToast("مشکلی در حذف رزرو به وجود آمد !");
    },
  });
};
