import { useIsUserLogin } from "../../../redux/user-login";

import { Link } from "../../common/Link";

const LoginButton = () => {
  const isLoggedIn = useIsUserLogin();

  return (
    <div>
      <Link to={isLoggedIn ? "/dashboard" : "/login"} className="loginButton">
        {isLoggedIn ? "حساب کاربری" : " ورود به حساب"}
      </Link>
    </div>
  );
};

export { LoginButton };
