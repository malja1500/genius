import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { useCourseLevel } from "../../../../core/services/api/course/useCourseLevel";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RadioGroup } from "../../../common/RadioGroup";
import { FilterAccordion } from "../FilterAccordion";

interface LevelFilterProps {
  setCourseLevel: Dispatch<SetStateAction<number | undefined>>;
}

const LevelFilter = ({ setCourseLevel }: LevelFilterProps) => {
  const [isValueChanged, setIsValueChanged] = useState<boolean>(false);

  const { data: courseLevels } = useCourseLevel();

  const handleDeleteValueChange = () => {
    setIsValueChanged(false);
  };

  const handleCourseLevelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCourseLevel(+e.target.value);

    setIsValueChanged(true);
  };

  return (
    <FilterAccordion title="سطح دوره" isOpen>
      <RadioGroup name="courseLevelGroup">
        {courseLevels &&
          courseLevels?.map((level) => (
            <FilterCheckbox
              type="radio"
              key={level.id}
              label={level.levelName}
              value={level.id}
              onChange={handleCourseLevelChange}
            />
          ))}
      </RadioGroup>
    </FilterAccordion>
  );
};

export { LevelFilter };
