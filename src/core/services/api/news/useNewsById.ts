import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

import { NewsApi } from "../../../../types/news-api";

export const useNewsById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["newsDetails", id],
    queryFn: async () =>
      await http.get<NewsApi>(`/News/${id}`).then((res) => res.data),
  });
};
