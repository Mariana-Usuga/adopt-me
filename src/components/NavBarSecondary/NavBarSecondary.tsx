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
  const [show, setShow] = useState(false);

  const products = [
    [],
    DogProducts,
    CatProducts,
  ];

  const showProducts = (index:number) => {
    setAnimalProduct(index);
    setShow(!show);
  };

  return (
    <>
      <div className="category">
        <div onClick={() => showProducts(1)}>
          <Dropdown animal="Dog" />
        </div>
        <div onClick={() => showProducts(2)}>
          <Dropdown animal="Cat" />
        </div>
      </div>
      <div className={!show ? "category__listProduct" : "category__listProduct--show"}>
        <ListProduct products={products[animalProduct]} />
      </div>
    </>
  );
};

export default NavBarSecondary;
