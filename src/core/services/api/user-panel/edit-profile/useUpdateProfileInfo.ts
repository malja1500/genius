import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useUpdateProfileInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateProfileInfo"],
    mutationFn: async (profileInfo: FormData) =>
      await http
        .put("/SharePanel/UpdateProfileInfo", profileInfo)
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast(
        "در حال بروزرسانی اطلاعات پروفایل شما ...",
        "updateProfileInfoLoading"
      ),
    onSuccess: (data) => {
      dismissToast("updateProfileInfoLoading");

      if (data.success) {
        queryClient.invalidateQueries({
          queryKey: ["profileInfo"],
        });
        showSuccessToast("اطلاعات شما با موفقیت بروزرسانی شد !");
      } else {
        showErrorToast("مشکلی در بروزرسانی اطلاعات پروفایل شما به وجود آمد !");
      }
    },
    onError: () => {
      dismissToast("updateProfileInfoLoading");
      showErrorToast("مشکلی در بروزرسانی اطلاعات پروفایل شما به وجود آمد !");
    },
  });
};
