import { useState } from "react";

import { Drawer } from "../../common/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Filters } from "./Filters";

const MobileFilter = () => {
  const [open, setOpen] = useState<boolean>();

  return (
    <div className="lg:hidden">
      <div>
        <button onClick={() => setOpen(true)}>
          <MenuIcon />
        </button>
      </div>
      <Drawer
        anchor="right"
        onClose={() => setOpen(false)}
        open={open}
        classes={{
          paper: "w-[340px] dark:bg-gray-900 pt-1",
        }}
      >
        <Filters />
      </Drawer>
    </div>
  );
};

export { MobileFilter };
