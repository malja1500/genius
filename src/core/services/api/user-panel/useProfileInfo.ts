import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { ProfileInfoInterface } from "../../../../types/profile-info";

export const useProfileInfo = () => {
  return useQuery({
    queryKey: ["profileInfo"],
    queryFn: async () =>
      await http
        .get<ProfileInfoInterface>("/SharePanel/GetProfileInfo")
        .then((res) => res.data),
  });
};
