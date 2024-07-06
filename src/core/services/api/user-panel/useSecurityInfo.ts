import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { SecurityInfo } from "../../../../types/security-info";

export const useSecurityInfo = () => {
  return useQuery({
    queryKey: ["securityInfo"],
    queryFn: async () =>
      await http
        .get<SecurityInfo>("/SharePanel/GetSecurityInfo")
        .then((res) => res.data),
  });
};
