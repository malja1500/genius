import { useProfileInfo } from "../../../../core/services/api/user-panel/useProfileInfo";

import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { AddProfileImageForm } from "./AddProfileImageForm";
import { EditProfileGeneralForm } from "./EditProfileGeneralForm";

import blankThumbnail from "../../../../assets/images/Courses/blank-thumbnail.jpg";

interface EditProfileGeneralSettingsTabProps {
  value: number;
}

const EditProfileGeneralSettingsTab = ({
  value,
}: EditProfileGeneralSettingsTabProps) => {
  const { data: profileInfo } = useProfileInfo();

  return (
    <CustomTabPanel value={value} index={0} className="w-full">
      <div className="editProfileUploadImageSection">
        <div className="editProfileImageBox">
          <img
            src={
              profileInfo?.currentPictureAddress !== "Not-set"
                ? profileInfo?.currentPictureAddress
                : blankThumbnail
            }
            className="editProfileImage"
          />
          <div className="editProfileUploadImageIconWrapper">
            <AddProfileImageForm
              userImage={profileInfo?.userImage}
              currentPictureAddress={
                profileInfo?.currentPictureAddress !== "Not-set"
                  ? profileInfo?.currentPictureAddress
                  : blankThumbnail
              }
            />
          </div>
        </div>
        <span className="editProfileUploadImageText">ویرایش تصویر</span>
      </div>
      <EditProfileGeneralForm profileInfo={profileInfo} />
    </CustomTabPanel>
  );
};

export { EditProfileGeneralSettingsTab };
