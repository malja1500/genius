import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { useCourseTypes } from "../../../../core/services/api/course/useCourseTypes";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RadioGroup } from "../../../common/RadioGroup";
import { FilterAccordion } from "../FilterAccordion";

interface TypesFilterProps {
  setCourseTypeId: Dispatch<SetStateAction<number | undefined>>;
}

const TypesFilter = ({ setCourseTypeId }: TypesFilterProps) => {
  const [isValueChanged, setIsValueChanged] = useState(false);

  const { data: courseTypes } = useCourseTypes();

  const handleDeleteValueChange = () => {
    setCourseTypeId(undefined);
    setIsValueChanged(false);
  };

  const handleCourseTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCourseTypeId(+e.target.value);
    setIsValueChanged(true);
  };

  return (
    <FilterAccordion title="تایپ دوره">
      <RadioGroup name="courseTypesGroup">
        {courseTypes &&
          courseTypes.map((type) => (
            <FilterCheckbox
              key={type.id}
              type="radio"
              value={type.id}
              label={type.typeName}
              onChange={handleCourseTypeChange}
            />
          ))}
      </RadioGroup>
    </FilterAccordion>
  );
};

export { TypesFilter };
