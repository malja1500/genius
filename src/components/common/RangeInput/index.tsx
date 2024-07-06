import { Dispatch, SetStateAction } from "react";

import { useTimeOut } from "../../../hooks/useTimeOut";

import { RangeSlider } from "../Slider";

interface RageInputProps {
  value: number | Record<number, number>;
  setValue: Dispatch<SetStateAction<number[]>>;
  setCostDown?: Dispatch<SetStateAction<number | undefined>>;
  setCostUp?: Dispatch<SetStateAction<number | undefined>>;
  setIsValueChanged?: Dispatch<SetStateAction<boolean>>;
}

const RageInput = ({
  value,
  setValue,
  setCostDown,
  setCostUp,
  setIsValueChanged,
}: RageInputProps) => {
  const priceTimeOut = useTimeOut();

  const handleRangeSliderInput = (value: number[]) => {
    setValue(value);
    priceTimeOut(() => {
      setCostDown && setCostDown(+value[0]);
      setCostUp && setCostUp(value[1]);
      setIsValueChanged && setIsValueChanged(true);
    }, 800);
  };

  return (
    <RangeSlider
      value={+value}
      min={150000}
      max={1450000}
      onInput={handleRangeSliderInput}
    />
  );
};

export { RageInput };
