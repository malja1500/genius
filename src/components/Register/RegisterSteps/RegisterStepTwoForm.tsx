import { Field, Formik } from "formik";
import AuthCode from "react-auth-code-input";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";

import {
  onVerifyCodeChange,
  useRegisterSelector,
} from "../../../redux/register";

import { useVerifyMessage } from "../../../core/services/api/auth/register/useVerifyMessage";

import { ErrorMessage } from "../../common/ErrorMessage";

interface RegisterStepTwoFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepTwoForm = ({ setCurrentValue }: RegisterStepTwoFormProps) => {
  const dispatch = useDispatch();
  const { phoneNumber, verifyCode: registerVerifyCode } = useRegisterSelector();
  const verifyMessage = useVerifyMessage();

  const onSubmit = async (values: { verifyCode: string }) => {
    dispatch(onVerifyCodeChange(values.verifyCode));
    verifyMessage.mutate(
      {
        phoneNumber,
        verifyCode: registerVerifyCode,
      },
      {
        onSuccess: () => setCurrentValue(3),
      }
    );
  };

  return (
    <div>
      <h4 className="registerCodeNotSend">
        کد به شماره {phoneNumber} کد ارسال نشد؟{" "}
        <button
          className="text-primaryColor"
          onClick={() => setCurrentValue(1)}
        >
          ارسال دوباره
        </button>{" "}
      </h4>
      <Formik
        initialValues={{
          verifyCode: "",
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form>
            <div className="registerStepTwoPhoneNumberInputWrapper">
              <Field
                name="verifyCode"
                render={({ fields }: any) => (
                  <AuthCode
                    onChange={(e) => dispatch(onVerifyCodeChange(e))}
                    inputClassName="authPhoneNumberInput"
                    containerClassName="authPhoneNumberInputContainer"
                    length={5}
                    {...fields}
                  />
                )}
              />
              <ErrorMessage
                name="verifyCode"
                errorMessageWrapperMargin={false}
              />
            </div>
            <span className="authSendVerificationCodeTime">1:34</span>
            <div className="registerStepTwoThreeSubmitButtonWrapper">
              <button
                type="button"
                className="mainButton rounded-md"
                onClick={() => setCurrentValue(1)}
              >
                مرحله قبل
              </button>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                disabled={registerVerifyCode === ""}
                className={`registerSubmitButton ${
                  !registerVerifyCode && "authDisableButton"
                }`}
              >
                ارسال کد تایید
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { RegisterStepTwoForm };
