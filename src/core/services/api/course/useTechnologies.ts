import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { TechnologiesInterface } from "../../../../types/technologies";

export const useTechnologies = () => {
  return useQuery({
    queryKey: ["technologies"],
    queryFn: async () =>
      await http
        .get<TechnologiesInterface[]>("/Home/GetTechnologies")
        .then((res) => res.data),
  });
};
