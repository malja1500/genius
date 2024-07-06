import { Skeleton } from "../../common/Skeleton";

const TeacherSkeleton = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <Skeleton className="w-[400px] h-[200px] lg:w-[300px] lg:h-[150px]" />
        <Skeleton className="w-[300px] lg:w-[250px] h-[7px] mt-5" />
        <Skeleton className="w-[400px] lg:w-[280px] h-[7px]" count={5} />
      </div>
    </div>
  );
};

export { TeacherSkeleton };
