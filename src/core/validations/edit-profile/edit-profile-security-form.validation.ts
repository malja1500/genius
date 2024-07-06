import * as yup from "yup";

export const editProfileSecurityFormSchema = yup.object().shape({
  recoveryEmail: yup.string().required("این فیلد الزامی می باشد"),
  baseUrl: yup.string().required("این فیلد الزامی می باشد"),
});
