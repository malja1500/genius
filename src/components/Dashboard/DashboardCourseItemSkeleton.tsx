import { Skeleton } from "../common/Skeleton";

const DashboardCourseItemSkeleton = () => {
  return (
    <div className="dashboardPageCourseItem">
      <div className="w-[30%]">
        <Skeleton width={120} height={80} borderRadius={20} />
      </div>
      <div className="dashboardPageCourseItemLeftSide">
        <div>
          <Skeleton width={120} height={7} />
          <div className="dashboardPageCourseItemTeacherBoxWrapper">
            <Skeleton width={100} height={7} />
          </div>
        </div>
        <div className="mt-auto">
          <div className="-mb-[3px]">
            <Skeleton width={90} height={7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardCourseItemSkeleton };
