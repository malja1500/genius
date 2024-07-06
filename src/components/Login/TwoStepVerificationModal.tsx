import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, ReactElement, Ref, SetStateAction, forwardRef } from "react";
import AuthCode from "react-auth-code-input";

import closeIcon from "../../assets/images/Login/close-circle.svg";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface TwoStepVerificationModalProps {
  isTwoStepVerification: boolean;
  verifyCode: string;
  handleClose: () => void;
  setVerifyCode: Dispatch<SetStateAction<string>>;
  handleTwoStepVerificationSubmit: () => void;
}

const TwoStepVerificationModal = ({
  isTwoStepVerification,
  verifyCode,
  handleClose,
  setVerifyCode,
  handleTwoStepVerificationSubmit,
}: TwoStepVerificationModalProps) => {
  return (
    <Dialog
      open={isTwoStepVerification}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      classes={{
        paper: "w-[420px] rounded-[24px] dark:bg-darkBackground",
      }}
    >
      <DialogContent classes={{ root: "px-10 py-8" }}>
        <div className="flex justify-between items-center">
          <h3 className="text-[32px] font-[700] text-text1 dark:text-darkText">
            تایید دو مرحله ای
          </h3>
          <div
            className="w-[48px] h-[48px] bg-twoStepVerificationCloseButton dark:bg-gray-800 rounded-[16px] flex justify-center items-center cursor-pointer"
            onClick={handleClose}
          >
            <img src={closeIcon} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <span className="text-text1 dark:text-darkText text-start font-[500] mb-4">
            کد تایید به <span className="text-primaryColor"> شماره شما </span>
            ارسال شد
          </span>
          <AuthCode
            onChange={(e) => setVerifyCode(e)}
            inputClassName="authPhoneNumberInput dark:text-darkText"
            containerClassName="authPhoneNumberInputContainer"
            length={5}
          />
          <button
            disabled={!verifyCode}
            onClick={handleTwoStepVerificationSubmit}
            className={`loginSubmitButton w-[208px] h-[56px] rounded-[80px] mt-7 ${
              !verifyCode && "cursor-not-allowed opacity-65"
            }`}
          >
            تایید کد
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { TwoStepVerificationModal };
