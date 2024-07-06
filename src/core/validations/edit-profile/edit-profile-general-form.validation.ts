import * as yup from "yup";

export const editProfileGeneralFormSchema = yup.object().shape({
  fName: yup.string().required("این فیلد الزامی می باشد"),
  lName: yup.string().required("این فیلد الزامی می باشد"),
  nationalCode: yup.string().required("این فیلد الزامی می باشد"),
  email: yup.string().required("این فیلد الزامی می باشد"),
  birthDay: yup.string().required("این فیلد الزامی می باشد"),
  phoneNumber: yup.string().required("این فیلد الزامی می باشد"),
  userAbout: yup.string().required("این فیلد الزامی می باشد"),
  homeAdderess: yup.string().required("این فیلد الزامی می باشد"),
  linkdinProfile: yup.string().required("این فیلد الزامی می باشد"),
  telegramLink: yup.string().required("این فیلد الزامی می باشد"),
  receiveMessageEvent: yup.bool().required("این فیلد الزامی می باشد"),
  gender: yup.bool().required("این فیلد الزامی می باشد"),
});
