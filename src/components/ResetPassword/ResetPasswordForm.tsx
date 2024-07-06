import { Form, Formik } from "formik";

import { useResetPassword } from "../../core/services/api/auth/forget-password/useResetPassword";
import { forgetPasswordStepTwoFormSchema } from "../../core/validations/forget-password/forget-password-step-two-form";

import { FieldBox } from "../common/FieldBox";

interface ResetPasswordFormProps {
  configValue?: string;
  userId: number;
}

const ResetPasswordForm = ({ configValue, userId }: ResetPasswordFormProps) => {
  const resetPassword = useResetPassword();

  const onSubmit = async (values: { newPassword: string }) => {
    if (configValue) {
      const { newPassword } = values;

      resetPassword.mutate({
        newPassword,
        resetValue: configValue,
        userId,
      });
    }
  };

  return (
    <Formik
      initialValues={{ newPassword: "" }}
      onSubmit={onSubmit}
      validationSchema={forgetPasswordStepTwoFormSchema}
    >
      {({ values }) => (
        <Form>
          <div className="authFormWrapper">
            <FieldBox
              type="password"
              label="رمز عبور جدید"
              name="newPassword"
              id="newPassword"
              placeholder="رمز عبور جدید"
              className="authInput"
              isPassword
              errorMessageWrapperMargin={false}
            />
            <div className="forgetPasswordStepTwoSubmitButtonWrapper">
              <button type="button" className="mainButton rounded-md">
                مرحله قبل
              </button>
              <button
                type="submit"
                className={`forgetPasswordStepTwoSubmitButton ${
                  !values.newPassword && "authDisableButton"
                }`}
                disabled={!values.newPassword}
              >
                تغییر رمز عبور
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { ResetPasswordForm };
