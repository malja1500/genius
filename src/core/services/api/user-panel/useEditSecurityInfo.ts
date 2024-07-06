import { useMutation } from "@tanstack/react-query";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../utils/toast.utils";
import http from "../../interceptor";

import { EditSecurityInfo } from "../../../../types/edit-security-info";

export const useEditSecurityInfo = () => {
  return useMutation({
    mutationKey: ["editSecurityInfo"],
    mutationFn: async (data: EditSecurityInfo) =>
      await http.put("/SharePanel/EditSecurity", data).then((res) => res.data),
    onMutate: () =>
      showLoadingToast(
        "در حال ویرایش اطلاعات امنیتی شما ...",
        "editSecurityInfoLoading"
      ),
    onSuccess: () => {
      dismissToast("editSecurityInfoLoading");
      showSuccessToast("اطلاعات امنیتی شما با موفقیت ویرایش شد !");
    },
    onError: () => {
      dismissToast("editSecurityInfoLoading");
      showErrorToast("مشکلی در ویرایش اطلاعات امنیتی شما به وجود آمد !");
    },
  });
};
