import { Link } from "../../common/Link";

import logoImage from "../../../assets/images/Header/logo.png";
import logoDarkImage from "../../../assets/images/Header/logo-dark.svg";

interface LogoProps {
  isFilter?: boolean;
  isDark?: boolean;
}

const Logo = ({ isFilter, isDark }: LogoProps) => {
  return (
    <Link to="/">
      {isDark ? (
        <img src={logoDarkImage} />
      ) : (
        <img src={logoImage} className={isFilter ? "mix-blend-darken" : ""} />
      )}
    </Link>
  );
};

export { Logo };
