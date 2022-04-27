/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';
import { FaAngleDown, FaCat, FaDog } from 'react-icons/fa';
// import ListProduct from '../ListProduct/ListProduct';
import { DogProducts } from '../../Data/DogProducts';
import { CatProducts } from '../../Data/CatProducts/CatProducts';

const Dropdown: FC<{ animal: string }> = ({ animal }) => {
  // const [show, setShow] = useState(false);

  const products = {
    cat: <FaCat />,
    dog: <FaDog />,
  };

  return (
    <>
      <div className="category__item">
        {animal === 'Dog' ? <FaDog /> : <FaCat />}
        <div className="category__item__pet">
          {animal}
        </div>
        <span className="category__item__down">
          <FaAngleDown />
        </span>
      </div>
      {/* {show && <ListProduct products={DogProducts} />} */}
    </>
  );
};

export default Dropdown;
