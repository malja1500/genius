import { Add, Check, Close } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ChangeEvent, ReactElement, Ref, forwardRef } from "react";

import { useDeleteProfileImage } from "../../../../core/services/api/user-panel/edit-profile/useDeleteProfileImage";
import { useAddProfileImage } from "../../../../core/services/api/user-panel/useAddProfileImage";
import { useSelectProfileImage } from "../../../../core/services/api/user-panel/useSelectProfileImage";

import { UserProfileImage } from "../../../../types/user-profile-image";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ProfileImageDialogProps {
  open: boolean;
  handleClose: () => void;
  currentPictureAddress: string | undefined;
  userImage: UserProfileImage[] | undefined;
}

const ProfileImageDialog = ({
  open,
  handleClose,
  currentPictureAddress,
  userImage,
}: ProfileImageDialogProps) => {
  const addProfileImage = useAddProfileImage();
  const deleteProfileImage = useDeleteProfileImage();
  const selectProfileImage = useSelectProfileImage();

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageData = new FormData();

    if (e.target.files) imageData.append("formFile", e.target.files[0]);

    addProfileImage.mutate(imageData, {
      onSuccess: () => (e.target.value = ""),
    });
  };

  const handleSelectProfileImage = (id: string) => {
    const currentProfileImageData = new FormData();

    currentProfileImageData.append("imageId", id);

    selectProfileImage.mutate(currentProfileImageData);
  };

  const handleDeleteProfileImage = (id: string) => {
    deleteProfileImage.mutate(id);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      maxWidth="md"
      classes={{
        paper: "editProfileImageModalPaper",
        root: "centerItem",
      }}
    >
      <DialogContent className="centerItem">
        <div className="editProfileImageModalCloseButton">
          <Close onClick={handleClose} className="w-[20px] h-[20px]" />
        </div>
        <div className="centerItem flex-col">
          <img
            src={currentPictureAddress}
            width={300}
            height={300}
            className="rounded-[15px] mt-5 lg:mt-0"
          />
          <div className="flex gap-5 mt-7">
            <div className="centerItem w-[110px]">
              <input
                type="file"
                id="uploadNewProfileImage"
                className="hidden"
                onChange={handleFileInputChange}
              />
              <label htmlFor="uploadNewProfileImage">
                <Tooltip
                  title="اضافه کردن عکس جدید"
                  placement="top"
                  arrow
                  classes={{
                    tooltip: "bg-gray-400",
                    arrow: "text-gray-400",
                  }}
                  color="red"
                >
                  <Add className="text-white cursor-pointer" />
                </Tooltip>
              </label>
            </div>
            {userImage?.map((image) => (
              <div key={image.id} className="relative group">
                <img
                  key={image.id}
                  src={image.puctureAddress}
                  width={110}
                  height={110}
                  className="rounded-[10px]"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col gap-1 absolute -top-3 -left-3">
                  <div className="editProfileSelectDeleteImageCloseIconWrapper">
                    <Tooltip
                      title="تنظیم به عنوان تصویر اصلی"
                      arrow
                      placement="right"
                    >
                      <Check
                        onClick={() => handleSelectProfileImage(image.id)}
                        className="editProfileSelectDeleteImageCloseIcon fill-green-600"
                      />
                    </Tooltip>
                  </div>
                  <div className="editProfileSelectDeleteImageCloseIconWrapper">
                    <Tooltip title="حذف تصویر" arrow placement="right">
                      <Close
                        onClick={() => handleDeleteProfileImage(image.id)}
                        className="editProfileSelectDeleteImageCloseIcon"
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ProfileImageDialog };
