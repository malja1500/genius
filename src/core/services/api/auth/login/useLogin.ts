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

import { UserDataInterface } from "../../../../../types/login/user-data";

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (user: UserDataInterface) =>
      await http.post("/Sign/Login", user).then((res) => res.data),
    onMutate: () => showLoadingToast("در حال ورود به سایت ...", "loginLoading"),
    onSuccess: (user) => {
      dismissToast("loginLoading");
      if (user.success) {
        if (user.token) {
          showSuccessToast("در حال انتقال به پنل کاربری ...");
          setItem("token", user.token);
          dispatch(isUserLoginChange(true));
          window.location.pathname = "/dashboard";
        }
      } else {
        showErrorToast("نام کاربری یا رمز عبور شما نادرست می باشد");
      }
    },
    onError: () => {
      dismissToast("loginLoading");
      showErrorToast("مشکلی در فرایند ورود به وجود آمد !");
    },
  });
};
