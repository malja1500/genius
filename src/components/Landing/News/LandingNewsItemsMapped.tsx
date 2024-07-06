import { useNews } from "../../../core/services/api/news/useNews";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { showErrorToast } from "../../../core/utils/toast.utils";

import { NewsItemSkeleton } from "../../common/NewsItemSkeleton";
import { LandingNewsItem } from "./LandingNewsItem";
import { NewsItemStyleTwo } from "./NewsItemStyleTwo";

const LandingNewsItemsMapped = () => {
  const { data, isLoading, error } = useNews(
    0,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  if (error) showErrorToast("مشکلی در دریافت اخبار به وجود آمد !");

  const firstNews = data?.news[0];
  const otherNews = data?.news.slice(1, 4);

  return (
    <div>
      {isLoading ? (
        <div className="mt-8 flex flex-col lg:flex-row items-center gap-7 lg:pl-10">
          <div className="landingNewsItemsSkeleton">
            <NewsItemSkeleton />
            <NewsItemSkeleton />
            <NewsItemSkeleton />
          </div>
          <div className="landingNewsItemsSkeletonHidden">
            <NewsItemSkeleton />
            <NewsItemSkeleton />
            <NewsItemSkeleton />
          </div>
          <div className="landingNewsItemsSkeletonHidden">
            <NewsItemSkeleton />
            <NewsItemSkeleton />
            <NewsItemSkeleton />
          </div>
        </div>
      ) : (
        <div className="lg:flex gap-4 justify-between mt-7">
          <div>
            <NewsItemStyleTwo
              id={firstNews?.id!}
              image={firstNews?.currentImageAddressTumb!}
              allSeas={firstNews?.currentView!}
              createdAt={convertDateToPersian(firstNews?.updateDate!)}
              title={firstNews?.title!}
              description={firstNews?.miniDescribe!}
            />
          </div>
          <div className="flex flex-col gap-8 mt-10 lg:mt-0">
            {otherNews &&
              otherNews.map((news) => (
                <LandingNewsItem key={news.id} news={news} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { LandingNewsItemsMapped };
