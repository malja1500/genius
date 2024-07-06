import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useDeleteProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteProfileImage"],
    mutationFn: async (deleteEntityId: string) =>
      await http
        .delete("/SharePanel/DeleteProfileImage", {
          data: { deleteEntityId },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال حذف عکس ...", "deleteProfileImageLoading"),
    onSuccess: (data) => {
      dismissToast("deleteProfileImageLoading");
      if (data.success) showSuccessToast("عکس با موفقیت حذف شد !");
      else showErrorToast("مشکلی در حذف عکس به وجود آمد !");

      queryClient.invalidateQueries({
        queryKey: ["profileInfo"],
      });
    },
    onError: () => {
      dismissToast("deleteProfileImageLoading");
      showErrorToast("مشکلی در حذف عکس به وجود آمد !");
    },
  });
};
