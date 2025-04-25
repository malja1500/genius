import { Outlet } from "react-router-dom";

import { BackToUp } from "../common/BackToUp";
import { Footer } from "./Footer";
import { Header } from "./Header";
import VoiceAssistant from "../VoiceAssistant";

const LandingLayout = () => {
  return (
    <div className="dark:bg-darkBackground dark:!text-darkText">
      <Header isLanding />
      <Outlet />
      <Footer />
      <BackToUp />
      <VoiceAssistant />
    </div>
  );
};

export { LandingLayout };
