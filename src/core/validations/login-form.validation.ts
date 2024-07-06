import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  phoneOrGmail: yup.string().required("این فیلد الزامی می باشد."),
  password: yup.string().required("این فیلد الزامی می باشد."),
  rememberMe: yup.boolean(),
});
