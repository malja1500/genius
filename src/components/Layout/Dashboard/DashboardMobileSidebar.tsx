import { Menu } from "@mui/icons-material";
import { useState } from "react";

import { Drawer } from "../../common/Drawer";
import { DashboardSidebar } from "./DashboardSidebar";

const DashboardMobileSidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="dashboardShowSidebarWrapper"
      >
        <Menu />
        <span className="dashboardShowMobileSideBarText">
          نمایش منوی پنل کاربری
        </span>
      </button>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        classes={{
          paper: "dashboardMobileSidebarPaper",
        }}
      >
        <DashboardSidebar />
      </Drawer>
    </div>
  );
};

export { DashboardMobileSidebar };
