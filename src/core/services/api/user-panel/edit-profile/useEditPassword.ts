import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { isUserLoginChange } from "../../../../../redux/user-login";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import { removeItem } from "../../../common/storage.services";
import http from "../../../interceptor";

import { EditProfileEditPasswordFormInterface } from "../../../../../types/edit-profile/edit-profile-edit-password-form";

export const useEditPassword = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["editPassword"],
    mutationFn: async (data: EditProfileEditPasswordFormInterface) =>
      await http
        .post("/SharePanel/ChangePassword", data)
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast(
        "در حال بروزرسانی رمز عبور شما ...",
        "editPasswordLoading"
      ),
    onSuccess: (data) => {
      dismissToast("editPasswordLoading");

      if (data.success) {
        showSuccessToast("رمز عبور شما با موفقیت بروزرسانی شد !");

        removeItem("token");
        dispatch(isUserLoginChange(false));
        window.location.pathname = "/login";
      } else showErrorToast("مشکلی در بروزرسانی رمز عبور شما به وجود آمد !");
    },
    onError: () => {
      dismissToast("editPasswordLoading");
      showErrorToast("مشکلی در بروزرسانی رمز عبور شما به وجود آمد !");
    },
  });
};
