import { SyntheticEvent } from "react";

import { LikeDislike } from "./LikeDislike";
import { Rating } from "./Rating";

interface SatisfactionProps {
  nameData: string;
  likeCount: number;
  disLikeCount: number;
  rateCount: number;
  courseId?: string;
  newsId?: string;
  currentUserRateNumber: number;
  handleRateChange: (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => void;
  likeId: string;
  isLike?: boolean;
  isDislike?: boolean;
}

const Satisfaction = ({
  nameData,
  likeCount,
  disLikeCount,
  rateCount,
  courseId,
  newsId,
  currentUserRateNumber,
  handleRateChange,
  likeId,
  isLike,
  isDislike,
}: SatisfactionProps) => {
  return (
    <div className="satisfaction">
      <Rating
        rateCount={rateCount}
        currentUserRateNumber={currentUserRateNumber}
        handleRateChange={handleRateChange}
        nameData={nameData}
      />
      <LikeDislike
        newsId={newsId}
        courseId={courseId}
        nameData={nameData}
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        likeId={likeId}
        isLike={isLike!}
        isDislike={isDislike!}
      />
    </div>
  );
};

export { Satisfaction };
