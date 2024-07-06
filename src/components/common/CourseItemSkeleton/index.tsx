import { useDarkModeSelector } from "../../../redux/darkMode";

import { Skeleton } from "../Skeleton";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

const CourseItemSkeleton = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="courseItemS2">
      {darkMode ? (
        <div className="w-full flex justify-center">
          <Skeleton
            className="w-[260px] h-[170px] rounded-[24px] mt-5"
            wrapperClassName="flex justify-center"
          />
        </div>
      ) : (
        <img src={blankThumbnail} className="courseItemImage" />
      )}
      <Skeleton width="80%" height="7px" className="mt-5 mb-5 mr-1" />
      <Skeleton width="95%" height="7px" className="mr-1" count={5} />
    </div>
  );
};

export { CourseItemSkeleton };
