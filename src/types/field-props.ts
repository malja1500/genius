import { FieldProps as FormikFieldProps, FormikProps } from "formik";

export interface FieldProps {
  type?: string;
  as?: string;
  name: string;
  id: string;
  className?: string;
  placeholder?: string;
  multiple?: boolean;
  render?: (props: FormikFieldProps & FormikProps<any>) => JSX.Element | null;
  select?: boolean;
  options?: { value: boolean; label: string }[];
}
