import * as yup from "yup";

export const commentFormSchema = yup.object().shape({
  title: yup
    .string()
    .required("این فیلد الزامی می باشد")
    .min(5, "عنوان نظر شما نمی تواند کمتر از 5 کاراکتر باشد"),
  describe: yup
    .string()
    .required("این فیلد الزامی می باشد")
    .min(10, "نظر شما نمی تواند کمتر از 10 کاراکتر باشد")
    .max(390, "تعداد کاراکتر های توضیحات بین 10 الی 390 می باشد"),
});
