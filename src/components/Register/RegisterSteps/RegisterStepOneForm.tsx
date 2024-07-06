import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";

import {
  onPhoneNumberChange,
  useRegisterSelector,
} from "../../../redux/register";

import { useSendVerification } from "../../../core/services/api/auth/register/useSendVerification";
import { registerStepOneFormSchema } from "../../../core/validations/register/register-step-one-form.validation";

import { FieldBox } from "../../common/FieldBox";
import { Link } from "../../common/Link";

interface RegisterStepOneFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepOneForm = ({ setCurrentValue }: RegisterStepOneFormProps) => {
  const dispatch = useDispatch();
  const sendVerification = useSendVerification();
  const { phoneNumber } = useRegisterSelector();

  const onSubmit = async (values: { phoneNumber: string }) => {
    const { phoneNumber } = values;

    dispatch(onPhoneNumberChange(phoneNumber));
    sendVerification.mutate(phoneNumber, {
      onSuccess: (data) =>
        data.message !== "درخواست نامعتبر" && setCurrentValue(2),
    });
  };

  return (
    <div className="registerStepOneWrapper">
      <Formik
        initialValues={{
          phoneNumber: phoneNumber || "",
        }}
        onSubmit={onSubmit}
        enableReinitialize={true}
        validationSchema={registerStepOneFormSchema}
      >
        {({ values, handleSubmit }) => (
          <div className="registerStepOneFormWrapper">
            <Form>
              <FieldBox
                type="phone"
                label="شماره موبایل"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="شماره موبایل"
                className="authInput"
                errorMessageWrapperMargin={false}
              />
              <div className="registerStepOneSubmitButtonWrapper">
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit();
                    e.preventDefault();
                  }}
                  disabled={!values.phoneNumber}
                  className={`registerSubmitButton ${
                    !values.phoneNumber && "authDisableButton"
                  }`}
                >
                  دریافت کد تایید
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText mt-5">
        حساب کاربری دارید؟{" "}
        <Link to="/login" className="doYouHaveAnyAccountOrDoNotHaveAccountLink">
          وارد شوید
        </Link>
      </h5>
    </div>
  );
};

export { RegisterStepOneForm };
