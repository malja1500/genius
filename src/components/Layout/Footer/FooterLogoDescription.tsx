import { Logo } from "../Header/Logo";

const FooterLogoDescription = () => {
  return (
    <div className="footerLogoDescriptionBox">
      <Logo isFilter isDark />
      <p className="font-[400] text-white">
        هدف ما سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
        بدون نیاز مراجعه حضوری در کل فرایند ثبت{" "}
      </p>
    </div>
  );
};

export { FooterLogoDescription };
