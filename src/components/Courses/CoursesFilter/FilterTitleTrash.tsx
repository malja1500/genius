import { Dispatch, SetStateAction } from "react";

import { useDarkModeSelector } from "../../../redux/darkMode";

import filterIcon from "../../../assets/images/Courses/Filter/filter.svg";
import filterDarkIcon from "../../../assets/images/Courses/Filter/filter-dark.svg";
import trashIcon from "../../../assets/images/Courses/Filter/trash.svg";

interface FilterTitleTrashProps {
  setSortingCol: Dispatch<SetStateAction<string | undefined>>;
  setListTechState: Dispatch<SetStateAction<string[]>>;
  setTeacherId: Dispatch<SetStateAction<number | undefined>>;
  setCourseLevel: Dispatch<SetStateAction<number | undefined>>;
  setCourseTypeId: Dispatch<SetStateAction<number | undefined>>;
  setCostDown: Dispatch<SetStateAction<number | undefined>>;
  setCostUp: Dispatch<SetStateAction<number | undefined>>;
  setSortType: Dispatch<SetStateAction<string | undefined>>;
}

const FilterTitleTrash = ({
  setSortingCol,
  setListTechState,
  setTeacherId,
  setCourseLevel,
  setCourseTypeId,
  setCostDown,
  setCostUp,
  setSortType,
}: FilterTitleTrashProps) => {
  const darkMode = useDarkModeSelector();

  const test = () => {
    setSortingCol(undefined);
    setListTechState([]);
    setTeacherId(undefined);
    setCourseLevel(undefined);
    setCourseTypeId(undefined);
    setCostDown(undefined);
    setCostUp(undefined);
    setSortType(undefined);
  };

  return (
    <div className="bg-filterTitle dark:bg-gray-800 rounded-[16px] h-[48px] px-3 flex justify-between items-center">
      <div className="flex gap-1">
        {darkMode ? <img src={filterDarkIcon} /> : <img src={filterIcon} />}
        <span className="font-[500] text-text1 dark:text-darkText">فیلتر</span>
      </div>
      <button
        className="w-[32px] h-[32px] bg-red rounded-[12px] flex justify-center items-center"
        onClick={test}
      >
        <img src={trashIcon} />
      </button>
    </div>
  );
};

export { FilterTitleTrash };
