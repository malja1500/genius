import { useDarkModeSelector } from "../../redux/darkMode";

import shareIcon from "../../assets/images/NewsDetails/Icons/share.svg";
import facebookIcon from "../../assets/images/NewsDetails/Icons/SocialMedia/facebook.svg";
import twitterIcon from "../../assets/images/NewsDetails/Icons/SocialMedia/twitter.svg";
import instagramIcon from "../../assets/images/NewsDetails/Icons/SocialMedia/instagram.svg";
import shareDarkIcon from "../../assets/images/NewsDetails/Icons/share-dark.svg";
import facebookDarkIcon from "../../assets/images/NewsDetails/Icons/SocialMedia/facebook-dark.svg";
import twitterDarkIcon from "../../assets/images/NewsDetails/Icons/SocialMedia/twitter-dark.svg";
import instagramDarkIcon from "../../assets/images/NewsDetails/Icons/SocialMedia/instagram-dark.svg";

const ShareBox = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="bg-newsDetailsShareBox dark:bg-gray-900 h-[64px] rounded-[16px] flex justify-between items-center px-5 mt-9">
      <div className="flex gap-2">
        <img
          src={darkMode ? shareDarkIcon : shareIcon}
          className="w-[20px] h-[20px]"
        />
        <span className="font-[700] text-text1 dark:text-darkText">
          اشتراک گزاری
        </span>
      </div>
      <div className="flex gap-3">
        <img
          src={darkMode ? facebookDarkIcon : facebookIcon}
          className="cursor-pointer"
        />
        <img
          src={darkMode ? twitterDarkIcon : twitterIcon}
          className="cursor-pointer"
        />
        <img
          src={darkMode ? instagramDarkIcon : instagramIcon}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export { ShareBox };
