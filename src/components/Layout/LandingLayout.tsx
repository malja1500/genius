import { Outlet } from "react-router-dom";

import { BackToUp } from "../common/BackToUp";
import { Footer } from "./Footer";
import { Header } from "./Header";

const LandingLayout = () => {
  return (
    <div className="dark:bg-darkBackground dark:!text-darkText">
      <Header isLanding />
      <Outlet />
      <Footer />
      <BackToUp />
    </div>
  );
};

export { LandingLayout };
