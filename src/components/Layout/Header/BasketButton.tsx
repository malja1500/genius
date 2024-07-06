import { Link } from "../../common/Link";

import shoppingBagIcon from "../../../assets/images/Header/shopping-bag.png";

const BasketButton = () => {
  return (
    <div>
      <Link to="/" className="basket">
        <img src={shoppingBagIcon} alt="basket" />
        <span className="basketTotalCoursesAdded">2</span>
      </Link>
    </div>
  );
};

export { BasketButton };
