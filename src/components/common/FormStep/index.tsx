import { RiCheckboxCircleFill, RiCheckboxCircleLine } from "react-icons/ri";

interface FormStepProps {
  title: string;
  description: string;
  step: number;
  currentStep: number;
}

const FormStep = ({ title, description, step, currentStep }: FormStepProps) => {
  return (
    <div className="flex gap-2">
      {step <= currentStep ? (
        <RiCheckboxCircleFill color="#2196F3" size={20} />
      ) : (
        <RiCheckboxCircleLine color="#2196F3" size={20} />
      )}
      <div>
        <h3 className="font-[600] text-white">{title}</h3>
        <p className="font-[400] text-white">{description}</p>
      </div>
    </div>
  );
};

export { FormStep };
