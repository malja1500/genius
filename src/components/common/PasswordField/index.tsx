import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Field } from "formik";
import { useState } from "react";

interface PasswordFieldProps {
  showLabel?: boolean;
  name: string;
  id: string;
  placeholder: string;
  isLogin?: boolean;
  className?: string;
}

const PasswordField = ({
  showLabel,
  name,
  id,
  placeholder,
  isLogin,
  className,
}: PasswordFieldProps) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleIsPasswordChange = () => setIsPassword((prevValue) => !prevValue);

  return (
    <div className="passwordFieldBoxWrapper">
      {showLabel && <p className="font-bold">رمز عبور</p>}
      <Field
        name={name}
        id={id}
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        className={`pl-10 ${className}`}
      />
      <div
        className={`passwordFieldBoxIconWrapper ${isLogin && "!top-[19px]"}
        }`}
      >
        {isPassword ? (
          <VisibilityOffIcon onClick={handleIsPasswordChange} />
        ) : (
          <VisibilityIcon onClick={handleIsPasswordChange} />
        )}
      </div>
    </div>
  );
};

export { PasswordField };
