import { PropsWithChildren } from "react";

import titleAfter from "../../../assets/images/Landing/LandingServices/title.svg";

const Heading = ({ children }: PropsWithChildren) => {
  return (
    <div className="headingWrapper">
      <h3 className="font-[900] text-[40px]">{children}</h3>
      <img src={titleAfter} />
    </div>
  );
};

export { Heading };
