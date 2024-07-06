import { LoginFormInterface } from "../../../types/login/login-form";

export const LOGIN_FORM: LoginFormInterface[] = [
  {
    type: "text",
    label: "ایمیل یا شماره موبایل",
    name: "phoneOrGmail",
    id: "phoneOrGmail",
    placeholder: "ایمیل یا شماره موبایل",
    className: "authInput",
  },
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
    type: "checkbox",
    label: "مرا به خاطر بسپار",
    name: "rememberMe",
    id: "rememberMe",
    placeholder: "مرا به خاطر بسپار",
    wrapperClassName: "flex gap-2",
    isCheckbox: true,
  },
] as const;
