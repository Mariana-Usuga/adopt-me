/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';
import { FaAngleDown, FaCat, FaDog, FaAngleRight } from 'react-icons/fa';

const Dropdown: FC<{ animal: string, faAngleDown:boolean }> = ({ animal, faAngleDown }) => {
  const products = {
    cat: <FaCat />,
    dog: <FaDog />,
  };

  return (
    <div className="category__item">
      {animal === 'Dog' ? <FaDog /> : <FaCat />}
      <div className="category__item__pet">
        {animal}
      </div>
      <span className="category__item__down">
        {!faAngleDown ? <FaAngleRight /> : <FaAngleDown /> }
      </span>
    </div>
  );
};

export default Dropdown;
