import { SocialMedia } from "../../common/SocialMedia";

import copyrightIcon from "../../../assets/images/Footer/copyright.svg";

const FooterCopyright = () => {
  return (
    <div className="footerCopyright">
      <div className="flex items-center gap-2">
        <img src={copyrightIcon} className="w-[20px] h-[20x]" />
        <span className="font-[400] text-[12px] text-white">
          تمام حقوق مادی و معنوی این مجموعه متعلق به genius میباشد
        </span>
      </div>
      <SocialMedia />
    </div>
  );
};

export { FooterCopyright };
