import { useQuery } from "@tanstack/react-query";

import http from "../../interceptor";

export const useMyFavoriteNews = () => {
  return useQuery({
    queryKey: ["myFavoriteNews"],
    queryFn: async () =>
      await http.get("/SharePanel/GetMyFavoriteNews").then((res) => res.data),
  });
};
