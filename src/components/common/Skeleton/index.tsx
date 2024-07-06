import ReactLoadingSkeleton from "react-loading-skeleton";

import { useDarkModeSelector } from "../../../redux/darkMode";

import "react-loading-skeleton/dist/skeleton.css";

const Skeleton = ({ ...rest }) => {
  const darkMode = useDarkModeSelector();

  return (
    <ReactLoadingSkeleton
      baseColor={darkMode ? "#242424" : undefined}
      highlightColor={darkMode ? "#2B2B2B" : undefined}
      {...rest}
    />
  );
};

export { Skeleton };
