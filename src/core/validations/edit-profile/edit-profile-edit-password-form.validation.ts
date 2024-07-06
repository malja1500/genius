import * as yup from "yup";

export const editProfileEditPasswordFormSchema = yup.object().shape({
  oldPassword: yup.string().required("این فیلد الزامی می باشد"),
  newPassword: yup.string().required("این فیلد الزامی می باشد"),
  repeatPassword: yup
    .string()
    .test("passwords-match", "مغایرت ندارد", function (value) {
      return this.parent.newPassword === value;
    })
    .required("این فیلد الزامی باشد"),
});
