import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import {
  dismissToast,
  showErrorToast,
  showInfoToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

import { ResetPassword } from "../../../../../types/forget-password/reset-password";

export const useResetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: async (data: ResetPassword) =>
      await http.post("/Sign/Reset", data).then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال بازگردانی رمز عبور ...", "resetPasswordLoading"),
    onSuccess: (data) => {
      dismissToast("resetPasswordLoading");

      if (data.success) {
        showSuccessToast("رمز عبور شما با موفقیت بازگردانی شد !");
        navigate("/login");
        showInfoToast("اکنون میتوانید وارد سایت شوید !");
      } else showErrorToast("مشکلی در بازگردانی رمز عبور شما به وجود آمد !");
    },
    onError: () => {
      dismissToast("resetPasswordLoading");
      showErrorToast("مشکلی در بازگردانی رمز عبور شما به وجود آمد !");
    },
  });
};
