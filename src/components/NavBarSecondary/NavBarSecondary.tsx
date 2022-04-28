/* eslint-disable no-shadow */
/* eslint-disable no-lonely-if */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quotes */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { DogProducts } from '../../Data/DogProducts';
import { CatProducts } from '../../Data/CatProducts/CatProducts';
import ListProduct from '../ListProduct/ListProduct';

import './navBarSecondary.scss';

const NavBarSecondary = () => {
  const [animalProduct, setAnimalProduct] = useState<number>(0);
  const [show, setShow] = useState({ cat: false, dog: false });

  const products = [
    [],
    DogProducts,
    CatProducts,
  ];

  const showProducts = (index:number) => {
    setAnimalProduct(index);
    if (index === 1) {
      setShow({ ...show, dog: !show.dog, cat: false });
    } else {
      setShow({ ...show, cat: !show.cat, dog: false });
    }
  };

  return (
    <>
      <div className="category">
        <div onClick={() => showProducts(1)}>
          <Dropdown animal="Dog" faAngleDown={show.dog} />
        </div>
        <div onClick={() => showProducts(2)}>
          <Dropdown animal="Cat" faAngleDown={show.cat} />
        </div>
      </div>
      <div className={show.cat || show.dog ? "category__listProduct--show"
        : "category__listProduct"}
      >
        <ListProduct products={products[animalProduct]} />
      </div>
    </>
  );
};

export default NavBarSecondary;
