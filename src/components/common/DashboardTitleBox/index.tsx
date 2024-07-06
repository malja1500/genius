import { PropsWithChildren } from "react";

const DashboardTitleBox = ({ children }: PropsWithChildren) => {
  return (
    <div className="dashboardTitleBoxWrapper">
      <span className="dashboardTitleBoxTitle">{children}</span>
    </div>
  );
};

export { DashboardTitleBox };
