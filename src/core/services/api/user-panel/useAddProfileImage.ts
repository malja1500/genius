import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useAddProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addProfileImage"],
    mutationFn: async (formFile: FormData) =>
      await http
        .post("/SharePanel/AddProfileImage", formFile)
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال افزودن عکس ...", "addProfileImageLoading"),
    onSuccess: (data) => {
      dismissToast("addProfileImageLoading");
      if (data.success) showSuccessToast("عکس با موفقیت اضافه شد !");

      queryClient.invalidateQueries({
        queryKey: ["profileInfo"],
      });
    },
    onError: () => {
      dismissToast("addProfileImageLoading");
      showErrorToast("مشکلی در آپلود عکس به وجود آمد !");
    },
  });
};
