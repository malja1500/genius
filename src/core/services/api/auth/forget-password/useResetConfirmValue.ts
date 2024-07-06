import { useQuery } from "@tanstack/react-query";

import http from "../../../interceptor";

export const useResetConfirmValue = (configValue: string) => {
  return useQuery({
    queryKey: ["resetConfirmValue"],
    queryFn: async () =>
      await http.get(`/Sign/Reset/${configValue}`).then((res) => res.data),
  });
};
