import { Form, Formik } from "formik";

import { ErrorMessage } from "../ErrorMessage";
import { Field } from "../Field";

import {
  default as dotsOneIcon,
  default as dotsThreeIcon,
  default as dotsTwoIcon,
} from "../../../assets/images/common/Comments/Icons/textarea-dots-1.svg";

interface CommentFormProps {
  onSubmit: (e: { title: string; describe: string }) => void | Promise<void>;
  validationSchema: any;
}

const CommentForm = ({ onSubmit, validationSchema }: CommentFormProps) => {
  return (
    <div className="commentFormSection">
      <Formik
        initialValues={{ title: "", describe: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="w-full">
          <div className="w-full relative">
            <div className="mb-3">
              <Field
                id="title"
                name="title"
                placeholder="عنوان نظر ..."
                className="commentFormTitleInput"
              />
              <ErrorMessage name="title" />
              <div className="relative">
                <Field
                  as="textarea"
                  id="describe"
                  name="describe"
                  className="commentFormTextarea"
                  placeholder="نظر خودتو بنویس..."
                />
                <img src={dotsOneIcon} className="absolute bottom-8 left-4" />
                <img src={dotsTwoIcon} className="absolute bottom-6 left-4" />
                <img src={dotsThreeIcon} className="absolute bottom-6 left-6" />
              </div>
              <ErrorMessage name="describe" />
            </div>
          </div>
          <button className="mainButton w-[84px] h-[48px]">ارسال</button>
        </Form>
      </Formik>
    </div>
  );
};

export { CommentForm };
