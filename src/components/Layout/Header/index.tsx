import { useDarkModeSelector } from "../../../redux/darkMode";

import { DarkModeButton } from "../../common/DarkModeButton";
import { BasketButton } from "./BasketButton";
import { LoginButton } from "./LoginButton";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

interface HeaderProps {
  isLanding?: boolean;
}

const Header = ({ isLanding }: HeaderProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div
      className={`mx-auto flex items-center justify-between py-[32px] px-10 lg:px-[80px] lg:w-[1280px] ${
        isLanding && "bg-[#e3f2fd] dark:bg-gray-900"
      }`}
    >
      <div className="hidden lg:block w-[13%]">
        <Logo isFilter isDark={darkMode} />
      </div>
      <Menu />
      <div className="flex items-center gap-4">
        <DarkModeButton />
        <BasketButton />
        <LoginButton />
      </div>
    </div>
  );
};

export { Header };
