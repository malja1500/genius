import { useQuery } from "@tanstack/react-query";

import http from "../../../interceptor";

import { NewsComment } from "../../../../../types/news-comment";

export const useNewsComments = (newsId: string) => {
  return useQuery({
    queryKey: ["newsComments", newsId],
    queryFn: async () =>
      await http
        .get<NewsComment[]>("/News/GetNewsComments", {
          params: {
            newsId,
          },
        })
        .then((res) => res.data),
  });
};
