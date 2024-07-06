import { DashboardTitleBox } from "../common/DashboardTitleBox";

import { EditProfileTabs } from "./EditProfileTabs";

const EditProfile = () => {
  return (
    <div>
      <DashboardTitleBox>ویرایش پروفایل</DashboardTitleBox>
      <div className="editProfileContentSection">
        <EditProfileTabs />
      </div>
    </div>
  );
};

export { EditProfile };
