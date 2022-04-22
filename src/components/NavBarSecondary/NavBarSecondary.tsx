import { FaAngleDown, FaCat, FaDog } from 'react-icons/fa';

import './navBarSecondary.scss';

const NavBarSecondary = () => (
  <div className="category">
    <div className="category__item">
      <FaDog />
      <div className="category__item__pet">
        Dogs
      </div>
      <span className="category__item__down">
        <FaAngleDown />
      </span>
    </div>
    <div className="category__item">
      <FaCat />
      <div className="category__item__pet">
        Cats
      </div>
      <span className="category__item__down">
        <FaAngleDown />
      </span>
    </div>
  </div>
);

export default NavBarSecondary;
