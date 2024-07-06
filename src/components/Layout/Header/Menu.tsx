import { NavLink, useLocation } from "react-router-dom";

import { menuItems } from "../../../core/data/header/menuItem";

import { HeaderMobileMenu } from "./HeaderMobileMenu";

import activeBeforeMenuIcon from "../../../assets/images/Header/menu-item-active-before.svg";

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <>
      <ul className="hidden lg:flex gap-[48px]">
        {menuItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.href}
              className={({ isActive }) => (isActive ? "activeMenuItem" : "")}
            >
              <span>{item.label}</span>
              {pathname.startsWith(item.href) && (
                <img src={activeBeforeMenuIcon} />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <HeaderMobileMenu />
    </>
  );
};

export { Menu };
