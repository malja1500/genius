import { Formik } from "formik";
import { Form } from "react-router-dom";

import { useRegisterSelector } from "../../../redux/register";

import { REGISTER_STEP_THREE_FORM } from "../../../core/data/register/register-step-three-form";
import { useRegister } from "../../../core/services/api/auth/register/useRegister";
import { registerStepThreeFormSchema } from "../../../core/validations/register/register-step-three-form.validation-three";

import { FieldBox } from "../../common/FieldBox";

interface RegisterStepThreeFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepThreeForm = ({
  setCurrentValue,
}: RegisterStepThreeFormProps) => {
  const { phoneNumber } = useRegisterSelector();
  const registerUser = useRegister();

  const onSubmit = async (values: { password: string; gmail: string }) => {
    const { password, gmail } = values;

    registerUser.mutate({
      gmail,
      password,
      phoneNumber,
    });
  };

  return (
    <div className="registerStepThreeWrapper">
      <Formik
        initialValues={{
          password: "",
          gmail: "",
        }}
        onSubmit={onSubmit}
        validationSchema={registerStepThreeFormSchema}
      >
        {({ values, handleSubmit }) => (
          <div className="authFormWrapper">
            <Form>
              <div className="registerStepThreeFieldsWrapper">
                {REGISTER_STEP_THREE_FORM.map((field) => (
                  <FieldBox
                    key={field.id}
                    type={field.type}
                    label={field.label}
                    name={field.name}
                    id={field.id}
                    placeholder={field.placeholder}
                    className={field.className}
                    isPassword={field.isPassword}
                    errorMessageWrapperMargin={false}
                  />
                ))}
                <div className="registerStepTwoThreeSubmitButtonWrapper">
                  <button
                    type="button"
                    className="mainButton rounded-md"
                    onClick={() => setCurrentValue(2)}
                  >
                    مرحله قبل
                  </button>
                  <button
                    type="submit"
                    onClick={(e) => {
                      handleSubmit();
                      e.preventDefault();
                    }}
                    disabled={!values.password || !values.gmail}
                    className={`registerSubmitButton ${
                      (!values.password || !values.gmail) && "authDisableButton"
                    }`}
                  >
                    ثبت نام
                  </button>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export { RegisterStepThreeForm };
