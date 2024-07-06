import { Link as ReactRouterLink } from "react-router-dom";

import { LinkProps } from "../../../types/link-nav-link-props";

import { handleScroll } from "../../../core/utils/scroll-helper.utils";

const Link = ({ children, to, className, ...rest }: LinkProps) => {
  return (
    <ReactRouterLink
      to={to!}
      className={className}
      onClick={handleScroll}
      {...rest}
    >
      {children}
    </ReactRouterLink>
  );
};

export { Link };
