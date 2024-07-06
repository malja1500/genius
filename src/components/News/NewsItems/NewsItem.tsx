import { useState } from "react";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { handleShowImage } from "../../../core/utils/show-image-helper.utils";

import { NewsInterface } from "../../../types/news";

import { Link } from "../../common/Link";
import { NewsSeasCreatedAt } from "../../common/NewsSeasCreatedAt";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface NewsItemProps {
  news: NewsInterface;
}

const NewsItem = ({ news }: NewsItemProps) => {
  const [newsImageSrc, setNewsImageSrc] = useState(
    handleShowImage(news.currentImageAddressTumb)
  );

  const formattedUpdateDate = convertDateToPersian(news.updateDate);

  return (
    <div className="lg:w-[400px]">
      <Link to={`/news/${news.id}`}>
        <img
          src={newsImageSrc}
          onError={(e) => setNewsImageSrc(blankThumbnail)}
          className="w-[400px] h-[240px] object-fit rounded-md"
        />
        <h4 className="font-[700] text-[20px] text-text1 dark:text-darkText mt-5 truncate">
          {news.title}
        </h4>
      </Link>
      <p className="w-[405px] h-[63px] font-[500] text-[14px] text-text2 dark:text-darkText mt-2 truncate">
        {news.miniDescribe}
      </p>
      <NewsSeasCreatedAt
        allSeas={news.currentView}
        createdAt={formattedUpdateDate}
      />
    </div>
  );
};

export { NewsItem };
