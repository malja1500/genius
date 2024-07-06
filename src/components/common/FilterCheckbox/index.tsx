import { Checkbox } from "../CheckBox";
import { FormControlLabel } from "../FormControlLabel";
import { FormGroup } from "../FormGroup";
import { Radio } from "../Radio";

import checkboxIcon from "../../../assets/images/Courses/Filter/checkbox.svg";
import checkedIcon from "../../../assets/images/Courses/Filter/checked.png";

interface FilterCheckboxProps {
  type?: string;
  label: string;
  className?: string;
  isChecked?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterCheckbox = ({
  type,
  label,
  className,
  isChecked,
  value,
  onChange,
}: FilterCheckboxProps) => {
  return (
    <div className={className}>
      <FormGroup>
        <FormControlLabel
          control={
            type == "radio" ? (
              <Radio
                icon={<img src={checkboxIcon} />}
                checkedIcon={
                  <div>
                    <img src={checkedIcon} className="w-full" />
                  </div>
                }
                defaultChecked={isChecked}
                value={value}
                onChange={onChange}
              />
            ) : (
              <Checkbox
                icon={<img src={checkboxIcon} />}
                checkedIcon={
                  <div>
                    <img src={checkedIcon} className="w-full" />
                  </div>
                }
                defaultChecked={value == null || isChecked}
                value={value}
                onChange={onChange}
              />
            )
          }
          label={label}
        />
      </FormGroup>
    </div>
  );
};

export { FilterCheckbox };
