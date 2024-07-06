import { Logo } from "../Layout/Header/Logo";
import { AuthHeading } from "../common/AuthHeading";
import { SocialMedia } from "../common/SocialMedia";
import { LoginForm } from "./LoginForm";

const Login = () => {
  return (
    <div className="authPageWrapper">
      <div className="authPageSidebar h-[570px]">
        <Logo isFilter isDark />
        <SocialMedia />
      </div>
      <div className="authTopSection">
        <div className="authHeadingFormWrapper">
          <AuthHeading
            title="ورود به حساب کاربری"
            description="لطفا نام و ایمیل خود را وارد نمایید."
          />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export { Login };
