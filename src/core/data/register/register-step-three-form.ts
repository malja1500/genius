import { RegisterStepThreeFormInterface } from "../../../types/register/register-step-three-form";

export const REGISTER_STEP_THREE_FORM: RegisterStepThreeFormInterface[] = [
  {
    type: "password",
    label: "رمز عبور",
    name: "password",
    id: "password",
    placeholder: "رمز عبور",
    className: "authInput",
    isPassword: true,
  },
  {
    type: "email",
    label: "ایمیل",
    name: "gmail",
    id: "gmail",
    placeholder: "ایمیل",
    className: "authInput",
  },
] as const;
