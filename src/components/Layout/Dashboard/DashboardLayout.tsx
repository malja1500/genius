import { Outlet } from "react-router-dom";

import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardMobileSidebar } from "./DashboardMobileSidebar";

const DashboardLayout = () => {
  return (
    <div className="dashboardWrapper">
      <div className="hidden lg:block">
        <DashboardSidebar />
      </div>
      <DashboardMobileSidebar />
      <div className="dashboardLeftSide">
        <Outlet />
      </div>
    </div>
  );
};

export { DashboardLayout };
