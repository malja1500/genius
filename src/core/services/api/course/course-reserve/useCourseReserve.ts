import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useIsUserLogin } from "../../../../../redux/user-login";

import {
  dismissToast,
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../../../../utils/toast.utils";
import http from "../../../interceptor";

export const useCourseReserve = () => {
  const queryClient = useQueryClient();
  const isUserLogin = useIsUserLogin();

  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["courseReserve"],
    mutationFn: async (courseId: string) =>
      await http
        .post("/CourseReserve/ReserveAdd", {
          courseId,
        })
        .then((res) => res.data),
    onMutate: () =>
      showLoadingToast("در حال ثبت رزرو ...", "courseReserveLoading"),
    onSuccess: (data) => {
      dismissToast("courseReserveLoading");

      if (data.success) showSuccessToast("دوره با موفقیت رزرو شد !");
      else showErrorToast("مشکلی در ثبت رزرو به وجود آمد !");

      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      dismissToast("courseReserveLoading");
      if (!isUserLogin) {
        showErrorToast("برای رزرو دوره باید وارد سایت شوید !");

        navigate("/login");
      } else {
        showErrorToast("مشکلی در ثبت رزرو به وجود آمد !");
      }
    },
  });
};
