import { Dispatch, SetStateAction } from "react";

import { NewsInterface } from "../../../types/news";

import { Pagination } from "../../common/Pagination";
import { NewsItem } from "./NewsItem";
import { NewsItemSkeletonStyleTwo } from "./NewsItemSkeletonStyleTwo";

interface PaginatedNewsProps {
  news: NewsInterface[];
  totalCount: number;
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginatedNews = ({
  news,
  totalCount,
  itemsPerPage,
  setCurrentPage,
}: PaginatedNewsProps) => {
  const pageCount = Math.ceil(totalCount / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="formFieldWrapperAndPaginatedWrapper">
      <div
        className={`flex flex-wrap gap-x-6 gap-y-10 lg:mt-3 mr-2 ${
          totalCount < 5 ? "justify-start" : "justify-center"
        }`}
      >
        {news.length > 0 ? (
          news.map((newsItem) => <NewsItem key={newsItem.id} news={newsItem} />)
        ) : (
          <div className="newsSkeletonWrapper">
            <div className="landingNewsItemsSkeleton">
              <NewsItemSkeletonStyleTwo />
              <NewsItemSkeletonStyleTwo />
              <NewsItemSkeletonStyleTwo />
            </div>
            <div className="landingNewsItemsSkeletonHidden">
              <NewsItemSkeletonStyleTwo />
              <NewsItemSkeletonStyleTwo />
              <NewsItemSkeletonStyleTwo />
            </div>
            <div className="landingNewsItemsSkeletonHidden">
              <NewsItemSkeletonStyleTwo />
              <NewsItemSkeletonStyleTwo />
              <NewsItemSkeletonStyleTwo />
            </div>
          </div>
        )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedNews };
