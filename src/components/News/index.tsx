import { useState } from "react";

import { useNews } from "../../core/services/api/news/useNews";
import { showErrorToast } from "../../core/utils/toast.utils";

import { NewsHeroSection } from "./NewsHeroSection";
import { PaginatedNews } from "./NewsItems/PaginatedNews";
import { NewsTopSection } from "./NewsTopSection";

const News = () => {
  const [query, setQuery] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [sortType, setSortType] = useState("DESC");
  const [currentPage, setCurrentPage] = useState(0);

  const { data, error } = useNews(
    currentPage,
    9,
    sort || undefined,
    sortType,
    query || undefined,
    undefined
  );

  if (error) showErrorToast("مشکلی در دریافت اخبار به وجود آمد !");

  return (
    <div className="w-[95%] mx-auto">
      <NewsHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 mt-32 !p-0">
        <div className="mx-auto">
          <NewsTopSection
            sort={sort}
            setQuery={setQuery}
            setSort={setSort}
            setSortType={setSortType}
            setCurrentPage={setCurrentPage}
          />
          <PaginatedNews
            news={data?.news || []}
            totalCount={data?.totalCount || 0}
            itemsPerPage={9}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { News };
