import { Form, Formik } from "formik";

import { EDIT_PROFILE_EDIT_PASSWORD_FORM } from "../../../../core/data/edit-profile/edit-profile-edit-password-form";
import { useEditPassword } from "../../../../core/services/api/user-panel/edit-profile/useEditPassword";
import { editProfileEditPasswordFormSchema } from "../../../../core/validations/edit-profile/edit-profile-edit-password-form.validation";

import { EditProfileEditPasswordFormInterface } from "../../../../types/edit-profile/edit-profile-edit-password-form";

import { FieldBox } from "../../../common/FieldBox";

const EditProfileEditPasswordForm = () => {
  const editPassword = useEditPassword();

  const onSubmit = async (values: EditProfileEditPasswordFormInterface) => {
    const { newPassword, oldPassword } = values;

    editPassword.mutate({
      newPassword,
      oldPassword,
    });
  };

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      }}
      validationSchema={editProfileEditPasswordFormSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col lg:items-center gap-4">
          {EDIT_PROFILE_EDIT_PASSWORD_FORM.map((field) => (
            <FieldBox
              key={field.id}
              type={field.type}
              label={field.label}
              name={field.name}
              id={field.id}
              className={field.className}
              isPassword={field.isPassword}
            />
          ))}
          <button type="submit" className="editProfileSubmitButton mr-0 mt-4">
            ثبت اطلاعات
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export { EditProfileEditPasswordForm };
