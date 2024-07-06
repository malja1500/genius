import TypewriterEffect, { Options, TypewriterClass } from "typewriter-effect";

interface TypewriterProps {
  options?: Partial<Options> | undefined;
  component?:
    | React.ElementType<any, keyof React.JSX.IntrinsicElements>
    | undefined;
  onInit?: ((typewriter: TypewriterClass) => void) | undefined;
}

const Typewriter = ({ options, component, onInit }: TypewriterProps) => {
  return (
    <TypewriterEffect options={options} component={component} onInit={onInit} />
  );
};

export { Typewriter };
