import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { useTeachers } from "../../../../core/services/api/teacher/useTeachers";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RadioGroup } from "../../../common/RadioGroup";
import { SearchBox } from "../../../common/SearchBox";
import { FilterAccordion } from "../FilterAccordion";

interface TeacherFilterProps {
  setTeacherId: Dispatch<SetStateAction<number | undefined>>;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
}

const TeacherFilter = ({ setTeacherId, setQuery }: TeacherFilterProps) => {
  const [isValueChanged, setIsValueChanged] = useState(false);
  const [isShowMoreTeachers, setIsShowMoreTeachers] = useState(false);

  const { data: teachers } = useTeachers();

  const handleDeleteValueChange = () => {
    setTeacherId(undefined);
    setQuery(undefined);
    setIsValueChanged(false);
  };

  const handleTeachersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeacherId(+e.target.value);
    setIsValueChanged(true);
  };

  const handleShowMoreTeachers = () =>
    setIsShowMoreTeachers(!isShowMoreTeachers);

  const renderTeachers = () => {
    if (isShowMoreTeachers) return teachers;
    else return teachers ? teachers?.slice(0, 5) : [];
  };

  return (
    <FilterAccordion title="اساتید دوره" isOpen>
      <div className="w-[96%] pr-5 mb-5">
        <SearchBox
          placeholder="جستجوی استاد"
          inputClasses="border-[1px] border-filterAccordionBorder dark:border-[#464646] placeholder:dark:text-darkText"
          setQuery={setQuery}
          setIsValueChanged={setIsValueChanged}
        />
      </div>
      <RadioGroup name="teacherGroup">
        {renderTeachers() &&
          renderTeachers()?.map((teacher) => (
            <FilterCheckbox
              key={teacher.teacherId}
              type="radio"
              label={teacher.fullName}
              value={teacher.teacherId}
              onChange={handleTeachersChange}
            />
          ))}
      </RadioGroup>
      <button
        className="font-[500] text-[14px] text-primaryColor underline px-5 mt-2"
        onClick={handleShowMoreTeachers}
      >
        {isShowMoreTeachers ? "مشاهده کمتر" : "مشاهده بیشتر"}
      </button>
    </FilterAccordion>
  );
};

export { TeacherFilter };
