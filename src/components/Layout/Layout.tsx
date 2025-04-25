import { Outlet } from "react-router-dom";

import VoiceAssistant from "../VoiceAssistant";
import { BackToUp } from "../common/BackToUp";
import { Footer } from "./Footer";
import { Header } from "./Header";

const MainLayout = () => {
  return (
    <div className="dark:bg-darkBackground dark:!text-darkText">
      <Header />
      <Outlet />
      <Footer />
      <BackToUp />
      <VoiceAssistant />
    </div>
  );
};

export { MainLayout };
