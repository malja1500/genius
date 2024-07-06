import { Dispatch, SetStateAction, useState } from "react";

import { useTechnologies } from "../../../../core/services/api/course/useTechnologies";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { FilterAccordion } from "../FilterAccordion";

interface CategoryFilterProps {
  setListTechState: Dispatch<SetStateAction<string[]>>;
}

const CategoryFilter = ({ setListTechState }: CategoryFilterProps) => {
  const [isValueChanged, setIsValueChanged] = useState(false);

  const { data: technologies } = useTechnologies();

  const handleTechnologiesChange = (item: string) => {
    setListTechState((prevState) => {
      if (prevState.includes(item)) {
        // If item is already in the array, remove it
        return prevState.filter((i) => i !== item);
      } else {
        // If item is not is the array, add it
        return [...prevState, item];
      }
    });
    setIsValueChanged(true);
  };

  const handleDeleteValueChange = () => {
    setListTechState([]);
    setIsValueChanged(false);
  };

  return (
    <FilterAccordion title="دسته بندی‌ ها">
      {technologies &&
        technologies?.map((technology) => (
          <FilterCheckbox
            key={technology.id}
            label={technology.techName}
            value={String(technology.id)}
            onChange={() => handleTechnologiesChange(String(technology.id))}
          />
        ))}
    </FilterAccordion>
  );
};

export { CategoryFilter };
