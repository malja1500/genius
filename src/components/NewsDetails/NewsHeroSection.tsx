import { convertDateToPersian } from "../../core/utils/date-helper.utils";

import { NewsInterface } from "../../types/news";

import { NewsSeasCreatedAt } from "../common/NewsSeasCreatedAt";
import { NewsWriterBox } from "./HeroSection/NewsWriterBox";

import blankThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";
import { Skeleton } from "../common/Skeleton";

interface NewsHeroSectionProps {
  news: NewsInterface;
  isLoading: boolean;
  error: Error | null;
}

const NewsHeroSection = ({ news, isLoading, error }: NewsHeroSectionProps) => {
  const formattedUpdateDate = convertDateToPersian(news?.updateDate);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      {isLoading || error ? (
        <Skeleton width={400} height={230} />
      ) : (
        <img
          src={
            news?.currentImageAddress &&
            news?.currentImageAddress !== "Not-set" &&
            news?.currentImageAddress !== "undefined"
              ? news?.currentImageAddress
              : blankThumbnail
          }
          className="lg:w-[400px] rounded-[10px]"
        />
      )}
      <div className="w-full">
        {isLoading || error ? (
          <div className="flex flex-col gap-2">
            <Skeleton width="70%" height={7} />
            <Skeleton width="86%" height={7} count={5} />
          </div>
        ) : (
          <>
            <h1 className="newsDetailsTitle">{news?.title}</h1>
            <p className="newsDetailsDescription">{news?.miniDescribe}</p>
          </>
        )}
        <div className="lg:flex justify-between">
          {isLoading || error ? (
            <div className="w-[86%] flex justify-between items-center mt-2">
              <div className="flex gap-3 mt-3">
                <Skeleton width={100} height={9} />
                <Skeleton width={100} height={9} />
              </div>
              <div>
                <Skeleton width={160} height={50} />
              </div>
            </div>
          ) : (
            <>
              <NewsSeasCreatedAt
                allSeas={news?.currentView}
                createdAt={formattedUpdateDate}
              />
              <NewsWriterBox news={news} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { NewsHeroSection };
