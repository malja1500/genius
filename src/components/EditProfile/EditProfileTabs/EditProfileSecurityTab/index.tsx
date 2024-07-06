import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { EditProfileSecurityForm } from "./EditProfileSecurityForm";

interface EditProfileSecurityTabProps {
  value: number;
}

const EditProfileSecurityTab = ({ value }: EditProfileSecurityTabProps) => {
  return (
    <CustomTabPanel value={value} index={2} className="w-full">
      <EditProfileSecurityForm />
    </CustomTabPanel>
  );
};

export { EditProfileSecurityTab };
