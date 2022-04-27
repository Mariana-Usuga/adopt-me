import { FC } from 'react';
import { FaAngleDown, FaCat, FaDog } from 'react-icons/fa';

const Dropdown: FC<{ animal: string }> = ({ animal }) => (
  <div className="category__item">
    {animal === 'Dog' ? <FaDog /> : <FaCat />}
    <div className="category__item__pet">
      {animal}
    </div>
    <span className="category__item__down">
      <FaAngleDown />
    </span>
  </div>
);

export default Dropdown;
