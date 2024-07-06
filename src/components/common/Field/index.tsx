import { Field as FormikField } from "formik";

import { FieldProps } from "../../../types/field-props";

const Field = ({
  type = "text",
  as,
  name,
  id,
  className,
  placeholder,
  multiple,
  render,
  select,
  options,
}: FieldProps) => {
  return select ? (
    <FormikField
      type={type}
      as={as}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      defaultOption={"false"}
      multiple={multiple}
      render={render}
    >
      {options?.map((option) => (
        <option key={option.label} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </FormikField>
  ) : (
    <FormikField
      type={type}
      as={as}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      multiple={multiple}
      render={render}
    />
  );
};

export { Field };
