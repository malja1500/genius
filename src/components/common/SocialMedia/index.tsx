import { footerSocialMediaItems } from "../../../core/data/footer/footerSocialMediaItems";

import { Link } from "../Link";

const SocialMedia = () => {
  return (
    <div className="footerSocialMediaBox">
      {footerSocialMediaItems.map((socialMediaItem) => (
        <Link
          key={socialMediaItem.icon}
          to={socialMediaItem.href}
          className="footerSocialMediaItem"
        >
          <img src={socialMediaItem.icon} />
        </Link>
      ))}
    </div>
  );
};

export { SocialMedia };
