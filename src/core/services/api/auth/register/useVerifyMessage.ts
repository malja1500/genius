import { useMutation } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

import { VerifyMessage } from "../../../../../types/register/verify-message";

export const useVerifyMessage = () => {
  return useMutation({
    mutationKey: ["verifyMessage"],
    mutationFn: async (data: VerifyMessage) =>
      await http.post("/Sign/VerifyMessage", data).then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال بررسی کد تایید  ...", "verifyMessageLoading"),
    onSuccess: (data) => {
      dismissToast("verifyMessageLoading");

      if (data.success) showSuccessToast("کد با موفقیت تایید شد !");
      else showErrorToast("مشکلی در تایید کد به وجود آمد !");
    },
    onError: () => {
      dismissToast("verifyMessageLoading");
      showErrorToast("مشکلی در تایید کد به وجود آمد !");
    },
  });
};
