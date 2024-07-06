import { typeWriterOptions } from "../../core/data/typewriter-options";

import { Typewriter } from "../common/Typewriter";

import dotIcon from "../../assets/images/News/dot.svg";
import heroSectionLeftImage from "../../assets/images/News/news-hero-section-left-image.svg";

const NewsHeroSection = () => {
  return (
    <div className="newsHeroSectionWrapper">
      <div className="relative z-50">
        <img src={dotIcon} className="newsHeroSectionDot" />
        <div className="relative pr-20 lg:pr-14 mt-10">
          <h1 className="newsTitle">
            <Typewriter options={typeWriterOptions(["اخبار و مقالات نابغه"])} />
            <div className="hidden dark:flex justify-center relative">
              <div className="bg-[blue] blur-[150px] w-[130px] h-[130px] rounded-full absolute top-0" />
            </div>
          </h1>
          <p className="newsDescription">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-7 lg:mb-0">
        <img src={heroSectionLeftImage} className="w-[80%] lg:w-auto" />
      </div>
    </div>
  );
};

export { NewsHeroSection };
