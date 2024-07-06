import { footerMenuItems } from "../../../core/data/footer/footerMenuItems";

import { Link } from "../../common/Link";

const FooterMenu = () => {
  return (
    <div className="mt-10 flex gap-5">
      {footerMenuItems.map((footerMenuItem) => (
        <div key={footerMenuItem.label} className="group">
          <Link to={footerMenuItem.href} className="footerMenuItems">
            {footerMenuItem.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export { FooterMenu };
