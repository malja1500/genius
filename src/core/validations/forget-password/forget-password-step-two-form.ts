import * as yup from "yup";

export const forgetPasswordStepTwoFormSchema = yup.object().shape({
  newPassword: yup.string().required("ایمیل الزامی می باشد."),
});
