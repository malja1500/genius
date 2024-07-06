import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useSelectProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["selectProfileImage"],
    mutationFn: async (imageId: FormData) =>
      await http
        .post("/SharePanel/SelectProfileImage", imageId)
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال افزودن عکس ...", "selectProfileImageLoading"),
    onSuccess: (data) => {
      dismissToast("selectProfileImageLoading");
      if (data.success) showSuccessToast("عکس با موفقیت انتخاب انتخاب شد !");

      queryClient.invalidateQueries({
        queryKey: ["profileInfo"],
      });
    },
    onError: () => {
      dismissToast("selectProfileImageLoading");
      showErrorToast("مشکلی در انتخاب عکس به وجود آمد !");
    },
  });
};
