import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { isUserLoginChange } from "../../../../../redux/user-login";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import { setItem } from "../../../common/storage.services";
import http from "../../../interceptor";

export const useTwoStepVerification = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["twoStepVerification"],
    mutationFn: async (data: {
      verifyCode: string;
      phoneOrGmail: string;
      password: string;
      rememberMe: boolean;
    }) =>
      await http
        .post(
          "/Sign/LoginTwoStep",
          {
            phoneOrGmail: data.phoneOrGmail,
            password: data.password,
            rememberMe: data.rememberMe,
          },
          {
            params: {
              vrifyCode: data.verifyCode,
            },
          }
        )
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال تایید شما ...", "twoStepVerificationLoading"),
    onSuccess: (data) => {
      dismissToast("twoStepVerificationLoading");

      if (data.success) {
        if (data.token) {
          showSuccessToast("در حال انتقال به پنل کاربری ...");
          setItem("token", data.token);
          dispatch(isUserLoginChange(true));
          window.location.pathname = "/dashboard";
        }
      } else {
        showErrorToast(data.message);
      }
    },
    onError: () => {
      dismissToast("twoStepVerificationLoading");
      showErrorToast("مشکلی در فرایند تایید شما به وجود آمد !");
    },
  });
};
