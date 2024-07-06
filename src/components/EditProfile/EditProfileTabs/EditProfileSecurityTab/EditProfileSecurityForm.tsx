import { Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { useEditSecurityInfo } from "../../../../core/services/api/user-panel/useEditSecurityInfo";
import { useSecurityInfo } from "../../../../core/services/api/user-panel/useSecurityInfo";
import { editProfileSecurityFormSchema } from "../../../../core/validations/edit-profile/edit-profile-security-form.validation";

import { EditSecurityInfo } from "../../../../types/edit-security-info";

import { FieldBox } from "../../../common/FieldBox";

const EditProfileSecurityForm = () => {
  const [twoStepVerificationValue, setTwoStepVerificationValue] =
    useState<string>("false");

  const { data } = useSecurityInfo();
  const editSecurityInfo = useEditSecurityInfo();

  useEffect(() => {
    if (data) {
      setTwoStepVerificationValue(data.twoStepAuth ? "true" : "false");
    }
  }, [data]);

  const onSubmit = (e: EditSecurityInfo) => {
    const { recoveryEmail, baseUrl } = e;

    editSecurityInfo.mutate({
      twoStepAuth: twoStepVerificationValue === "true" ? true : false,
      recoveryEmail,
      baseUrl,
    });
  };

  return (
    <Formik
      initialValues={{
        twoStepAuth: data?.twoStepAuth || true,
        recoveryEmail: data?.recoveryEmail || "",
        baseUrl: data?.baseUrl || "",
      }}
      validationSchema={editProfileSecurityFormSchema}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex justify-center gap-6 mt-4">
          <FieldBox
            label="ایمیل بازگردانی"
            id="recoveryEmail"
            name="recoveryEmail"
            type="text"
            wrapperClassName="mt-1"
            className="editProfileFormInput"
          />
          <FieldBox
            label="آدرس اصلی"
            id="baseUrl"
            name="baseUrl"
            type="text"
            wrapperClassName="mt-1"
            className="editProfileFormInput"
          />
          <FieldBox
            label="تایید دو مرحله ای"
            name="twoStepAuth"
            id="twoStepAuth"
            wrapperClassName="editProfileGenderAndReceiveMessageEventSelectBoxWrapper"
            render={({ field, setFieldValue }) => (
              <select
                {...field}
                className="editProfileGenderAndReceiveMessageEventSelectBox"
                value={twoStepVerificationValue}
                onChange={(e) => {
                  setTwoStepVerificationValue(e.target.value);
                  setFieldValue(
                    "twoStepAuth",
                    e.target.value === "true" ? true : false
                  );
                }}
              >
                <option value="true">فعال</option>
                <option value="false">غیر فعال</option>
              </select>
            )}
          />
        </div>
        <button type="submit" className="editProfileSubmitButton mr-5 mt-3">
          ویرایش اطلاعات
        </button>
      </Form>
    </Formik>
  );
};

export { EditProfileSecurityForm };
