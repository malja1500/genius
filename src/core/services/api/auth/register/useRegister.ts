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

import { Register } from "../../../../../types/register/register";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: Register) =>
      await http.post("/Sign/Register", data).then((res) => res.data),
    onMutate: () => showLoadingToast("در حال ثبت نام ...", "registerLoading"),
    onSuccess: (data) => {
      dismissToast("registerLoading");

      if (data.success) {
        showSuccessToast("شما موفقیت ثبت نام شدید !");
        navigate("/login");
        showInfoToast("اکنون میتوانید وارد سایت شوید !");
      } else showErrorToast("مشکلی در فرایند ثبت نام شما به وجود آمد !");
    },
    onError: () => {
      dismissToast("registerLoading");
      showErrorToast("مشکلی در فرایند ثبت نام شما به وجود آمد !");
    },
  });
};
