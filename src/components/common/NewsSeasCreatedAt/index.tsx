import eyeIcon from "../../../assets/images/News/eye.svg";
import dotsIcon from "../../../assets/images/News/item-dots.svg";
import calenderIcon from "../../../assets/images/News/calendar.svg";

interface NewsSeasCreatedAtProps {
  allSeas: number;
  createdAt: string;
}

const NewsSeasCreatedAt = ({ allSeas, createdAt }: NewsSeasCreatedAtProps) => {
  return (
    <div className="flex gap-3 items-center mt-3">
      <div className="flex gap-1">
        <img src={eyeIcon} />
        <span className="newsAllSeasCreatedAt">{allSeas} بازدید</span>
      </div>
      <img src={dotsIcon} />
      <div className="flex gap-1">
        <img src={calenderIcon} />
        <span className="newsAllSeasCreatedAt">{createdAt}</span>
      </div>
    </div>
  );
};

export { NewsSeasCreatedAt };
