import { Logo } from "../Layout/Header/Logo";
import { AuthHeading } from "../common/AuthHeading";
import { SocialMedia } from "../common/SocialMedia";
import { ForgetPasswordForm } from "./ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <div className="authPageWrapper">
      <div className="authPageSidebar h-[570px]">
        <div>
          <div className="pr-7">
            <Logo isFilter isDark />
          </div>
        </div>
        <SocialMedia />
      </div>
      <div className="authTopSection">
        <div className="authHeadingFormWrapper">
          <AuthHeading
            title="بازگردانی رمز عبور"
            description="لطفا ایمیل خود را وارد نمایید."
          />
          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export { ForgetPassword };
