import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RadioGroup } from "../../../common/RadioGroup";
import { FilterAccordion } from "../FilterAccordion";

interface SortTypeFilterProps {
  setSortType: Dispatch<SetStateAction<string | undefined>>;
}

const SortTypeFilter = ({ setSortType }: SortTypeFilterProps) => {
  const [isSortValueChanged, setIsSortValueChanged] = useState<boolean>(false);

  const handleSortTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortType(e.target.value);
    setIsSortValueChanged(true);
  };

  const handleDeleteValueChange = () => {
    setSortType(undefined);
    setIsSortValueChanged(false);
  };

  return (
    <FilterAccordion title="مرتب ساری">
      <RadioGroup name="sortTypeGroup">
        <FilterCheckbox
          type="radio"
          label="صعودی"
          value="ASC"
          onChange={handleSortTypeChange}
        />
        <FilterCheckbox
          type="radio"
          label="نزولی"
          value="DESC"
          onChange={handleSortTypeChange}
        />
      </RadioGroup>
    </FilterAccordion>
  );
};

export { SortTypeFilter };
