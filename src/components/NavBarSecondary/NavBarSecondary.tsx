/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Dropdown from '../Dropdown/Dropdown';

import './navBarSecondary.scss';

const NavBarSecondary = () => (
  <div className="category">
    <Dropdown animal="Dog" />
    <Dropdown animal="Cat" />
  </div>
);

export default NavBarSecondary;
