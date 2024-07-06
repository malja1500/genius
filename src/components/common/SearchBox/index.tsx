import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { useTimeOut } from "../../../hooks/useTimeOut";

import searchIcon from "../../../assets/images/Landing/search.svg";

interface SearchBoxProps {
  placeholder: string;
  inputClasses?: string;
  isMarginTop?: boolean;
  display?: string;
  isLanding?: boolean;
  isNews?: boolean;
  searchValue?: string | undefined;
  setQuery?: Dispatch<SetStateAction<string | undefined>>;
  setIsValueChanged?: Dispatch<SetStateAction<boolean>>;
  onKeyUp?: () => void;
  onClick?: () => void;
  setSearchValue?: Dispatch<SetStateAction<string | undefined>>;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
}

const SearchBox = ({
  placeholder,
  inputClasses,
  isMarginTop,
  display,
  isLanding,
  isNews,
  searchValue,
  setQuery,
  setIsValueChanged,
  onKeyUp,
  onClick,
  setSearchValue,
  setCurrentPage,
}: SearchBoxProps) => {
  const textTimeOut = useTimeOut();

  const searchBoxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue && setSearchValue(e.target.value);
    textTimeOut(() => {
      0;
      setCurrentPage && setCurrentPage(0);
      setQuery && setQuery(e.target.value);
      setIsValueChanged && setIsValueChanged(true);
    }, 800);
  };

  return (
    <div className={`${display} ${isMarginTop ? "mt-10" : ""}`}>
      <div className="relative w-[100%] lg:w-auto flex justify-center">
        <input
          placeholder={placeholder}
          className={`outline-none px-3 pl-12 rounded-[8px] placeholder:text-text-2 dark:text-darkText w-[97%] h-[50px] ${inputClasses} ${
            isNews === true &&
            "lg:!w-[779px] !shadow-courseDetailsHeroSectionSearchBoxShadow"
          } ${isLanding === true ? "dark:!bg-gray-800" : "dark:bg-gray-900"}`}
          onChange={searchBoxOnChange}
          onKeyUp={onKeyUp}
          onClick={onClick}
          value={searchValue}
        />
        <img src={searchIcon} className="absolute left-6 lg:left-4 top-3" />
      </div>
    </div>
  );
};

export { SearchBox };
