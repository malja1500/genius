import { useParams } from "react-router-dom";

import { useResetConfirmValue } from "../../core/services/api/auth/forget-password/useResetConfirmValue";

import { Logo } from "../Layout/Header/Logo";
import { AuthHeading } from "../common/AuthHeading";
import { SocialMedia } from "../common/SocialMedia";
import { ResetPasswordForm } from "./ResetPasswordForm";

const ResetPassword = () => {
  const { configValue } = useParams();

  const { data: resetConfirmValue } = useResetConfirmValue(configValue!);

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
          <ResetPasswordForm
            configValue={configValue}
            userId={resetConfirmValue.id}
          />
        </div>
      </div>
    </div>
  );
};

export { ResetPassword };
