import { NewsInterface } from "../../../types/news";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface NewsWriterBoxProps {
  news: NewsInterface;
}

const NewsWriterBox = ({ news }: NewsWriterBoxProps) => {
  return (
    <div className="newsDetailsWriterWrapper">
      <img src={blankThumbnail} className="newsDetailsWriterImage" />
      <span className="newsDetailsWriterName">{news?.addUserFullName}</span>
    </div>
  );
};

export { NewsWriterBox };
