import { NewsInterface } from "./news";

export interface NewsResponse {
  news: NewsInterface[];
  totalCount: number;
}
