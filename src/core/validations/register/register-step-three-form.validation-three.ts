import * as yup from "yup";

export const registerStepThreeFormSchema = yup.object({
  password: yup.string().required("این فیلد الزامی می باشد."),
  gmail: yup.string().required("این فیلد الزامی می باشد."),
});
