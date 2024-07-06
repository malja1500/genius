import { useQuery } from "@tanstack/react-query";

import http from "../../../interceptor";

import { NewsComment } from "../../../../../types/news-comment";

export const useNewsReplyComments = (id: string) => {
  return useQuery({
    queryKey: ["newsReplyComments", id],
    queryFn: async () =>
      await http
        .get<NewsComment[]>(`/News/GetRepliesComments`, {
          params: {
            id,
          },
        })
        .then((res) => res.data),
  });
};
