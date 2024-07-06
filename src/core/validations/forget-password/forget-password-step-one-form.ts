import * as yup from "yup";

export const forgetPasswordStepOneFormSchema = yup.object().shape({
  email: yup.string().required("ایمیل الزامی می باشد."),
});
