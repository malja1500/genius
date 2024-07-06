import { useMutation } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

import { ForgetPassword } from "../../../../../types/forget-password/forget-password";

export const useForgetPassword = () => {
  return useMutation({
    mutationKey: ["forgetPassword"],
    mutationFn: async (data: ForgetPassword) =>
      await http.post("/Sign/ForgetPassword", data).then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال بررسی ایمیل ...", "forgetPasswordLoading"),
    onSuccess: (data) => {
      dismissToast("forgetPasswordLoading");

      if (data.success)
        showSuccessToast("ایمیل بازگردانی رمز عبور با موفقیت ارسال شد !");
      else
        showErrorToast("مشکلی در ارسال ایمیل بازگردانی رمز عبور به وجود آمد !");
    },
    onError: () => {
      dismissToast("forgetPasswordLoading");
      showErrorToast("مشکلی در ارسال ایمیل بازگردانی رمز عبور به وجود آمد !");
    },
  });
};
