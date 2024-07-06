import { ErrorMessage as FormikErrorMessage } from "formik";

interface ErrorMessageProps {
  name: string;
  className?: string;
  errorMessageWrapperMargin?: boolean;
}

const ErrorMessage = ({
  name,
  className,
  errorMessageWrapperMargin = true,
}: ErrorMessageProps) => {
  return (
    <div className={errorMessageWrapperMargin ? "my-2" : ""}>
      <FormikErrorMessage
        name={name}
        component="p"
        className={`errorMessage ${className || ""}`}
      />
    </div>
  );
};

export { ErrorMessage };
