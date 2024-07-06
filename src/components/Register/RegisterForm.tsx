import { RegisterStepOneForm } from "./RegisterSteps/RegisterStepOneForm";
import { RegisterStepThreeForm } from "./RegisterSteps/RegisterStepThreeForm";
import { RegisterStepTwoForm } from "./RegisterSteps/RegisterStepTwoForm";

interface currentStepProps {
  currentStep: number;
  setCurrentValue: (value: number) => void;
}

const RegisterForm = ({ currentStep, setCurrentValue }: currentStepProps) => {
  return (
    <div>
      {currentStep === 1 && (
        <RegisterStepOneForm setCurrentValue={setCurrentValue} />
      )}
      {currentStep === 2 && (
        <RegisterStepTwoForm setCurrentValue={setCurrentValue} />
      )}
      {currentStep === 3 && (
        <RegisterStepThreeForm setCurrentValue={setCurrentValue} />
      )}
    </div>
  );
};

export { RegisterForm };
