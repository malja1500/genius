const FooterJoinBox = () => {
  return (
    <div className="mt-8 w-full lg:w-auto">
      <p className="font-[400] text-white text-center">
        برای دریافت اخبار از طریق ایمیل ثبت نام کنید
      </p>
      <div className="flex justify-center relative mt-6">
        <button className="footerLogoDescriptionBoxButton">خبرم کن</button>
        <input
          type="email"
          placeholder="Example@gmail.com"
          className="footerLogoDescriptionBoxInput"
          style={{ direction: "ltr" }}
        />
      </div>
    </div>
  );
};

export { FooterJoinBox };
