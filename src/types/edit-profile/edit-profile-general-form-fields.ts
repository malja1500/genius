export interface EditProfileGeneralFormFieldsInterface {
  label: string;
  type?: string;
  name: string;
  id: string;
  className?: string;
  wrapperClassName?: string;
  isCheckbox?: boolean;
  isDate?: boolean;
  as?: string;
  isGender?: boolean;
  options?: { value: boolean; label: string }[];
}
