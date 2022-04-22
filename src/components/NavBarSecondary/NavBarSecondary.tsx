import { FaAngleDown } from 'react-icons/fa';

import './navBarSecondary.scss';

const NavBarSecondary = () => (
  <div className="container__category">
    <div className="container__category__item">
      <div>
        Dogs
      </div>
      <span className="container__category__down">
        <FaAngleDown />
      </span>
    </div>
    <div className="container__category__item">
      Cats
      <span className="container__category__down">
        <FaAngleDown />
      </span>
    </div>
  </div>
);

export default NavBarSecondary;
