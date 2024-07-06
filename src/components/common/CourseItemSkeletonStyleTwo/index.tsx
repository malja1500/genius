import { useDarkModeSelector } from "../../../redux/darkMode";

import { Skeleton } from "../Skeleton";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

const CourseItemSkeletonStyleTwo = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="courseItemSkeletonStyleTwo">
      <div className="flex justify-center">
        {darkMode ? (
          <Skeleton className="courseItemStyleTwoImageSkeleton" />
        ) : (
          <img src={blankThumbnail} className="courseItemImage mt-0 mb-0" />
        )}
      </div>
      <div>
        <Skeleton className="courseItemStyleTwoTitleSkeleton" />
        <Skeleton className="courseItemStyleTwoDescriptionSkeleton" count={5} />
      </div>
    </div>
  );
};

export { CourseItemSkeletonStyleTwo };
