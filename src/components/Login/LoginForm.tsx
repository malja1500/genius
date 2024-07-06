import { Form, Formik } from "formik";
import { useState } from "react";

import { LOGIN_FORM } from "../../core/data/login/login-form";
import { useLogin } from "../../core/services/api/auth/login/useLogin";
import { useTwoStepVerification } from "../../core/services/api/auth/login/useTwoStepVerification";
import { loginFormSchema } from "../../core/validations/login-form.validation";

import { UserDataInterface } from "../../types/login/user-data";

import { FieldBox } from "../common/FieldBox";
import { Link } from "../common/Link";
import { TwoStepVerificationModal } from "./TwoStepVerificationModal";

const LoginForm = () => {
  const initialValues = { phoneOrGmail: "", password: "", rememberMe: true };

  const [userData, setUserData] = useState<UserDataInterface>(initialValues);
  const [isTwoStepVerification, setIsTwoStepVerification] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const loginUser = useLogin();
  const twoStepVerification = useTwoStepVerification();

  const onSubmit = async (values: UserDataInterface) => {
    loginUser.mutate(values, {
      onSuccess: (data) => {
        if (data.success && !data.token) {
          setIsTwoStepVerification(true);
          setUserData(values);
        }
      },
    });
  };

  const handleTwoStepVerificationSubmit = () => {
    twoStepVerification.mutate({
      ...userData,
      verifyCode,
    });
  };

  const handleClose = () => {
    setIsTwoStepVerification(false);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginFormSchema}
        >
          <Form>
            <div className="authFormWrapper">
              {LOGIN_FORM.map((field) => (
                <FieldBox
                  key={field.id}
                  type={field.type}
                  label={field.label}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  className={field.className!}
                  wrapperClassName={field.wrapperClassName}
                  isPassword={field.isPassword}
                  isCheckbox={field.isCheckbox}
                  isLogin
                  errorMessageWrapperMargin={false}
                />
              ))}
              <button className="loginSubmitButton" type="submit">
                ورود
              </button>
              <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText mt-1">
                حساب کاربری ندارید؟{" "}
                <Link
                  to="/register"
                  className="doYouHaveAnyAccountOrDoNotHaveAccountLink"
                >
                  ثبت نام{" "}
                </Link>
              </h5>
              <span className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText -mt-1">
                یا
              </span>
              <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText -mt-1">
                رمز عبور خود را فراموش کرده اید ؟{" "}
                <Link to="/forget-password" className="text-primaryColor">
                  تغییر
                </Link>
              </h5>
            </div>
          </Form>
        </Formik>
      </div>
      <TwoStepVerificationModal
        handleClose={handleClose}
        handleTwoStepVerificationSubmit={handleTwoStepVerificationSubmit}
        isTwoStepVerification={isTwoStepVerification}
        setVerifyCode={setVerifyCode}
        verifyCode={verifyCode}
      />
    </>
  );
};

export { LoginForm };
