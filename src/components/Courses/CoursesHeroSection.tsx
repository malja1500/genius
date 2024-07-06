import { typeWriterOptions } from "../../core/data/typewriter-options";

import { useDarkModeSelector } from "../../redux/darkMode";

import { Typewriter } from "../common/Typewriter";

import heroSectionDotsTwoDark from "../../assets/images/Courses/HeroSection/dots2-dark.svg";
import heroSectionDotsTwo from "../../assets/images/Courses/HeroSection/dots2.svg";
import heroSectionLeftImage from "../../assets/images/Courses/HeroSection/hero-section-left-image.svg";

const CoursesHeroSection = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="coursesHeroSection">
      <div className="relative">
        {darkMode ? (
          <img
            src={heroSectionDotsTwoDark}
            className="absolute top-2 lg:-top-20 left-16"
          />
        ) : (
          <img
            src={heroSectionDotsTwo}
            className="absolute top-2 lg:-top-20 left-16"
          />
        )}

        <span className="coursesHeroSectionSpanText lg:bg-coursesHeroSectionTitleAfter">
          مهمه از کی یاد می گیری!!
        </span>
        <div className="relative pr-9">
          <div className="hidden dark:flex justify-center relative">
            <div className="bg-[blue] blur-[150px] w-[130px] h-[130px] rounded-full absolute top-0" />
          </div>
          <h1 className="font-[800] text-[40px] text-text1 dark:text-darkText mt-5 w-[85%]">
            <Typewriter
              options={typeWriterOptions(["اموزش برنامه نویسی با بهترین ها"])}
            />
          </h1>
          <p className="font-[500] text-text2 dark:text-darkText text-justify mt-3 w-[72%]">
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

export { CoursesHeroSection };
