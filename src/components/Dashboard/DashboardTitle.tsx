import { PropsWithChildren } from "react";

const DashboardTitle = ({ children }: PropsWithChildren) => {
  return <span className="dashboardTitle">{children}</span>;
};

export { DashboardTitle };
