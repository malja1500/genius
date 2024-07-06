import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { LandingReportInterface } from "../../../../types/landing-report";

export const useLandingReport = () => {
  return useQuery({
    queryKey: ["landing-report"],
    queryFn: async () =>
      await http
        .get<LandingReportInterface>("/Home/LandingReport")
        .then((res) => res.data),
  });
};
