import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { EditProfileEditPasswordForm } from "./EditProfileEditPasswordForm";

interface EditProfileEditPasswordTabProps {
  value: number;
}

const EditProfileEditPasswordTab = ({
  value,
}: EditProfileEditPasswordTabProps) => {
  return (
    <CustomTabPanel value={value} index={1} className="w-full">
      <EditProfileEditPasswordForm />
    </CustomTabPanel>
  );
};

export { EditProfileEditPasswordTab };
