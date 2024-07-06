import { Form, Formik } from "formik";

import { useForgetPassword } from "../../core/services/api/auth/forget-password/useForgetPassword";
import { forgetPasswordStepOneFormSchema } from "../../core/validations/forget-password/forget-password-step-one-form";

import { FieldBox } from "../common/FieldBox";

const ForgetPasswordForm = () => {
  const forgetPassword = useForgetPassword();

  const onSubmit = async (values: { email: string }) => {
    const { email } = values;

    forgetPassword.mutate({
      email,
      baseUrl: "http://localhost:5173/reset-password",
    });
  };

  return (
    <div className="forgetPasswordFormWrapper">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
        validationSchema={forgetPasswordStepOneFormSchema}
      >
        {({ values }) => (
          <Form>
            <div className="forgetPasswordStepOneFieldWrapper">
              <FieldBox
                type="email"
                label="ایمیل"
                name="email"
                id="email"
                placeholder="ایمیل"
                className="authInput"
                errorMessageWrapperMargin={false}
              />
              <button
                type="submit"
                className={`forgetPasswordStepOneSubmitButton ${
                  !values.email && "authDisableButton"
                }`}
                disabled={!values.email}
              >
                بازگردانی رمز عبور
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ForgetPasswordForm };
