import { useState } from "react";

import { Logo } from "../Layout/Header/Logo";
import { AuthHeading } from "../common/AuthHeading";
import { FormStep } from "../common/FormStep";
import { SocialMedia } from "../common/SocialMedia";
import { RegisterForm } from "./RegisterForm";

const Register = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="authPageWrapper">
      <div className="authPageSidebar">
        <div>
          <div className="pr-12">
            <Logo isFilter isDark />
          </div>
          <div className="flex flex-col gap-6 mt-3">
            <FormStep
              title="شماره موبایل"
              description="در این مرحله باید شماره موبایل خود را وارد نمایید."
              step={1}
              currentStep={currentStep}
            />
            <FormStep
              title="کد تایید"
              description="در این مرحله باید کد تایید را وارد نمایید."
              currentStep={currentStep}
              step={2}
            />
            <FormStep
              title="نام کاربری و پسورد"
              description="در این مرحله باید نام کاربری و پسور خود را انتخاب کنید."
              currentStep={currentStep}
              step={3}
            />
          </div>
        </div>
        <SocialMedia />
      </div>
      <div className="authTopSection">
        <div className="registerLeftSide">
          <AuthHeading
            title="ثبت نام در سایت"
            description="برای ثبت نام باید سه مرحله را طی کنید"
          />
          <RegisterForm
            currentStep={currentStep}
            setCurrentValue={setCurrentStep}
          />
        </div>
      </div>
    </div>
  );
};

export { Register };
