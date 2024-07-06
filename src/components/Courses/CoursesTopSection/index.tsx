import { Dispatch, SetStateAction } from "react";

import { SearchBox } from "../../common/SearchBox";
import { MobileFilter } from "../CoursesFilter/MobileFilter";

import { useDarkModeSelector } from "../../../redux/darkMode";

import gridStyleOne from "../../../assets/images/Courses/Icons/grid-1.svg";
import gridStyleTwo from "../../../assets/images/Courses/Icons/grid-2.svg";
import gridStyleOneDark from "../../../assets/images/Courses/Icons/grid-1-dark.svg";
import gridStyleTwoDark from "../../../assets/images/Courses/Icons/grid-2-dark.svg";

interface CoursesTopSectionProps {
  coursesStyle: number;
  setCoursesStyle: (value: number) => void;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
  setSortingCol: Dispatch<SetStateAction<string | undefined>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const CoursesTopSection = ({
  coursesStyle,
  setCoursesStyle,
  setQuery,
  setSortingCol,
  setCurrentPage,
}: CoursesTopSectionProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <>
      <div className="flex flex-wrap-reverse items-center gap-4 mt-6 lg:mt-0">
        <div className="coursesGridView">
          <button
            className={`${
              coursesStyle === 1
                ? "coursesGridViewItemsActive"
                : "coursesGridViewItems"
            }`}
            onClick={() => setCoursesStyle(1)}
          >
            {darkMode ? (
              <img src={gridStyleOneDark} />
            ) : (
              <img src={gridStyleOne} />
            )}
          </button>
          <button
            className={`${
              coursesStyle === 2
                ? "coursesGridViewItemsActive"
                : "coursesGridViewItems"
            }`}
            onClick={() => setCoursesStyle(2)}
          >
            {darkMode ? (
              <img src={gridStyleTwoDark} />
            ) : (
              <img src={gridStyleTwo} />
            )}
          </button>
        </div>
        <div className="w-[65%]">
          <SearchBox
            placeholder="چی میخوای یاد بگیری ؟"
            setQuery={setQuery}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="w-[94%] lg:w-[20%]">
          <div className="customSelectBoxWrapper">
            <select
              className="customSelectBox"
              onChange={(e) => setSortingCol(e.target.value)}
            >
              <option value="Active">فعال</option>
              <option value="courseRate">محبوب ترین ها</option>
              <option value="cost">گران ترین</option>
              <option value="lastUpdate">بروز ترین</option>
            </select>
          </div>
        </div>
      </div>
      <div className="my-5">
        <MobileFilter />
      </div>
    </>
  );
};

export { CoursesTopSection };
