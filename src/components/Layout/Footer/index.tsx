import { FooterCopyright } from "./FooterCopyright";
import { FooterJoinBox } from "./FooterJoinBox";
import { FooterLogoDescription } from "./FooterLogoDescription";
import { FooterMenu } from "./FooterMenu";

const Footer = () => {
  return (
    <div className="footer">
      <FooterLogoDescription />
      <FooterJoinBox />
      <FooterMenu />
      <FooterCopyright />
    </div>
  );
};

export { Footer };
