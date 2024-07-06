import { useDarkModeSelector } from "../../redux/darkMode";

import { CategoryItem } from "./Categories/CategoryItem";
import { landingCategoryItems } from "../../core/data/landing/landingCategoryItems";

import itemsAfter from "../../assets/images/Landing/LandingCategories/items-after.svg";
import dotsBackground from "../../assets/images/Landing/LandingCategories/bg-dots.svg";
import itemsDarkAfter from "../../assets/images/Landing/LandingCategories/items-after-dark.svg";
import darkBackgroundDots from "../../assets/images/Landing/LandingCategories/bg-dots-dark.svg";

const LandingCategories = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="pr-7 flex flex-col justify-center items-center gap-0 my-32 mx-auto lg:w-[1290px]">
      <div className="hidden lg:flex justify-end">
        <img
          className="w-[70%] h-[500px]"
          src={darkMode ? itemsDarkAfter : itemsAfter}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-[400px] lg:-mt-[530px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="landingCategorySectionTitleAfter">
            <h3 className="font-[900] text-[40px] text-text1 dark:text-darkText">
              دسته بندی‌ دوره‌ها
            </h3>
            <div className="hidden dark:flex justify-center relative">
              <div className="bg-[blue] blur-[170px] w-[150px] h-[150px] rounded-full absolute top-0" />
            </div>
            <p className="font-[500] text-text2 dark:text-darkText mt-[12px] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
            <img
              src={darkMode ? darkBackgroundDots : dotsBackground}
              className="hidden lg:block lg:mt-52"
            />
          </div>
          <div className="lg:w-[56%] mt-12 lg:mt-0">
            <div className="flex justify-center items-center flex-wrap gap-4">
              {landingCategoryItems.map((item) => (
                <div key={item.id} style={{ marginTop: item.marginTop }}>
                  {item.items.map((categoryItem) => (
                    <CategoryItem
                      key={categoryItem.title}
                      categoryItem={categoryItem}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingCategories };
