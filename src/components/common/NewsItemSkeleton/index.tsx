import { Skeleton } from "../Skeleton";

const NewsItemSkeleton = () => {
  return (
    <div className="flex gap-3">
      <div>
        <Skeleton width={180} height={130} />
      </div>
      <div>
        <Skeleton width={180} height={7} />
        <Skeleton width={200} height={7} count={5} />
      </div>
    </div>
  );
};

export { NewsItemSkeleton };
