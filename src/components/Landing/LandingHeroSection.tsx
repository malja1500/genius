import { useEffect, useState } from "react";

import { useDarkModeSelector } from "../../redux/darkMode";

import { typeWriterOptions } from "../../core/data/typewriter-options";
import { useCourses } from "../../core/services/api/course/useCourses";
import { useLandingReport } from "../../core/services/api/landing/useLandingReport";

import { CourseInterface } from "../../types/course";

import { SearchBox } from "../common/SearchBox";
import { Typewriter } from "../common/Typewriter";
import { LandingHeroSectionFeatures } from "./HeroSection/LandingHeroSectionFeatures";
import { LandingSearchModal } from "./HeroSection/LandingSearchModal";

const LandingHeroSection = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState<CourseInterface[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchValue, setSearchValue] = useState<string>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const { data } = useCourses(
    currentPage,
    5,
    undefined,
    "DESC",
    searchValue ? searchValue : undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  useEffect(() => {
    if (data && data.length < 5) {
      setHasMore(false);
    }
    if (data) {
      setCourses((prevCourses) => [...prevCourses, ...data.courseFilterDtos]);
    }
  }, [data]);

  const fetchMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const darkMode = useDarkModeSelector();
  const { data: landingReport } = useLandingReport();

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-headerBg bg-no-repeat bg-cover"
      } w-full pt-7 pb-32 lg:pb-5 lg:rounded-br-[100px] lg:rounded-bl-[100px] lg:-mt-40 lg:pt-40`}
    >
      <div className="bg-landingPageProgrammingLanguagesIcon bg-center bg-no-repeat dark:bg-none">
        <div>
          <h2 className="text-center text-[23px] font-[500] text-text1 dark:text-darkText">
            پلتفرم اموزش طراحی وب
          </h2>
          <h1 className="text-center font-[800] text-[40px] lg:text-[53px] text-text1 dark:text-darkText">
            <Typewriter
              options={typeWriterOptions(["پلتفرم اموزش طراحی وب"])}
            />
          </h1>
          <p className="text-center font-[500] text-[20px] mt-3 text-text1  dark:text-darkText">
            مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به
            زبان فارسی .
          </p>
          <div className="hidden dark:flex justify-center relative">
            <div className="bg-[blue] blur-[170px] w-[200px] h-[200px] rounded-full absolute top-0" />
          </div>
        </div>
        <SearchBox
          placeholder="چی میخوای یاد بگیری ؟"
          isMarginTop
          display="flex justify-center items-center"
          inputClasses="lg:w-[620px]"
          isLanding={true}
          onKeyUp={handleClickOpen!}
          onClick={handleClickOpen}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <LandingSearchModal
          handleClickOpen={handleClickOpen}
          open={open}
          searchCourses={courses}
          searchValue={searchValue}
          setOpen={setOpen}
          setSearchValue={setSearchValue}
          fetchMoreData={fetchMoreData}
          hasMore={hasMore}
        />
        <LandingHeroSectionFeatures landingReport={landingReport} />
      </div>
    </div>
  );
};

export { LandingHeroSection };
