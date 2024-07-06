import { useMutation } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useSendVerification = () => {
  return useMutation({
    mutationKey: ["sendVerification"],
    mutationFn: async (phoneNumber: string) =>
      await http
        .post("/Sign/SendVerifyMessage", { phoneNumber })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال ارسال کد تایید  ...", "sendVerificationLoading"),
    onSuccess: (data) => {
      dismissToast("sendVerificationLoading");

      if (data.success && data.message !== "درخواست نامعتبر") {
        showSuccessToast("کد تایید با موفقیت به شماره شما ارسال شد !");
      } else showErrorToast(data.message);
    },
    onError: () => {
      dismissToast("sendVerificationLoading");
      showErrorToast("مشکلی در ارسال کد تایید به شماره شما به وجود آمد");
    },
  });
};
