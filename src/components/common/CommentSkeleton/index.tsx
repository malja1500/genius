import { Skeleton } from "../Skeleton";

const CommentSkeleton = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex gap-3 items-center">
          <Skeleton className="commentAvatarImage" />
          <Skeleton className="w-[90px] h-[7px]" />
        </div>
        <Skeleton className="w-[180px] h-[7px]" />
      </div>
      <div>
        <Skeleton className="w-[60px] h-[7px]" />
      </div>
    </div>
  );
};

export default CommentSkeleton;
