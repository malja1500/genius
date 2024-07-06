import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "../../common/Drawer";
import { HeaderMobileMenuItems } from "./HeaderMobileMenuItems";

const HeaderMobileMenu = () => {
  const [open, setOpen] = useState<boolean>();

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(true)}>
        <MenuIcon />
      </button>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        classes={{
          paper: "w-[250px] dark:bg-gray-900 dark:text-darkText",
        }}
      >
        <HeaderMobileMenuItems />
      </Drawer>
    </div>
  );
};

export { HeaderMobileMenu };
