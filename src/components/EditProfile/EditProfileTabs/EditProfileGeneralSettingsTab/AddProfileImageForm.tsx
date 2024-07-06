import { useState } from "react";
import { CameraAltOutlined } from "@mui/icons-material";

import { UserProfileImage } from "../../../../types/user-profile-image";

import { ProfileImageDialog } from "./ProfileImageDialog";

interface AddProfileImageFormProps {
  currentPictureAddress: string | undefined;
  userImage: UserProfileImage[] | undefined;
}

const AddProfileImageForm = ({
  currentPictureAddress,
  userImage,
}: AddProfileImageFormProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        <CameraAltOutlined className="text-white" />
      </div>
      <ProfileImageDialog
        open={open}
        handleClose={handleClose}
        currentPictureAddress={currentPictureAddress}
        userImage={userImage}
      />
    </>
  );
};

export { AddProfileImageForm };
