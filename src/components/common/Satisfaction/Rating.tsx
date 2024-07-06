import { Rating as CommonRating } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { SyntheticEvent } from "react";

import emptyRatingIcon from "../../../assets/images/CourseDetails/Icons/star-empty.svg";
import ratingIcon from "../../../assets/images/CourseDetails/Icons/star.svg";

interface RatingProps {
  rateCount: number;
  currentUserRateNumber: number;
  handleRateChange: (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => void;
  nameData: string;
}

const Rating = ({
  rateCount,
  currentUserRateNumber,
  handleRateChange,
  nameData,
}: RatingProps) => {
  return (
    <div className="flex items-center gap-4">
      <Tooltip
        title={
          currentUserRateNumber
            ? `شما قبلا به این ${nameData} امتیاز داده اید !`
            : ""
        }
        placement="top"
        arrow
      >
        <div>
          <CommonRating
            name="امتیاز دهی دوره"
            icon={<img src={ratingIcon} />}
            emptyIcon={<img src={emptyRatingIcon} />}
            classes={{
              root: "flex mr-0",
              icon: "w-[24px] h-[24px] ml-1",
            }}
            value={currentUserRateNumber}
            dir="ltr"
            precision={1}
            onChange={handleRateChange}
            readOnly={currentUserRateNumber ? true : false}
          />
        </div>
      </Tooltip>
      <span className="font-[500] text-text1 dark:text-darkText mt-2">
        امتیاز <span className="mx-[1px]">{rateCount || 0}</span> نفر
      </span>
      <button className="courseDetailAddComment">ثبت دیدگاه</button>
    </div>
  );
};

export { Rating };
