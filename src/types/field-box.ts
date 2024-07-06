import {
  FormikErrors,
  FieldProps as FormikFieldProps,
  FormikProps,
} from "formik";

import { EditProfileGeneralFormInterface } from "./edit-profile/edit-profile-general-form";

export interface FieldBoxProps {
  label: string;
  type?: string;
  as?: string | undefined;
  name: string;
  id: string;
  className?: string;
  wrapperClassName?: string;
  isPassword?: boolean;
  placeholder?: string;
  isCheckbox?: boolean;
  isLogin?: boolean;
  isDate?: boolean;
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<EditProfileGeneralFormInterface>>;
  dateValue?: string;
  options?: { value: boolean; label: string }[];
  render?: (props: FormikFieldProps & FormikProps<any>) => JSX.Element | null;
  errorMessageWrapperMargin?: boolean;
}
