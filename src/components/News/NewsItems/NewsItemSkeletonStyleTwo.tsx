import { Skeleton } from "../../common/Skeleton";

const NewsItemSkeletonStyleTwo = () => {
  return (
    <div>
      <Skeleton width={400} height={240} className="rounded-md" />
      <Skeleton width={350} height={7} className="mt-6" />
      <Skeleton width={400} height={7} count={5} />
    </div>
  );
};

export { NewsItemSkeletonStyleTwo };
