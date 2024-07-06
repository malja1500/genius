import { toast } from "../../components/common/toast";

const showLoadingToast = (message: string, id: string) => {
  toast.loading(message, { toastId: id });
};

const dismissToast = (id: string) => {
  toast.dismiss(id);
};

const showSuccessToast = (message: string) => {
  toast.success(message);
};

const showInfoToast = (message: string) => {
  toast.info(message);
};

const showErrorToast = (message: string) => {
  toast.error(message);
};

export {
  dismissToast,
  showErrorToast,
  showInfoToast,
  showLoadingToast,
  showSuccessToast,
};
