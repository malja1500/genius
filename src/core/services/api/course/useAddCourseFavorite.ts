import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useIsUserLogin } from "../../../../redux/user-login";

import { showErrorToast } from "../../../utils/toast.utils";
import http from "../../interceptor";

export const useAddCourseFavorite = () => {
  const queryClient = useQueryClient();
  const isUserLogin = useIsUserLogin();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["favorite-course"],
    mutationFn: async (courseId: string) =>
      await http
        .post("/Course/AddCourseFavorite", { courseId })
        .then((res) => res.data),
    onSuccess: (data) => {
      if (!data.success) {
        if (!isUserLogin) {
          showErrorToast(
            "برای افزودن دوره به علاقه مندی ها باید وارد سایت شوید !"
          );

          navigate("/login");
        }
      }

      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      queryClient.invalidateQueries({
        queryKey: ["course-top"],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      showErrorToast(
        "مشکلی در افزودن دوره به لیست علاقه مندی های شما به وجود آمد !"
      );
    },
  });
};
