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
import { useState, MouseEvent } from 'react';
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

  const showProducts = (e:MouseEvent<HTMLButtonElement>, index:number) => {
    setAnimalProduct(index);
    // if (index === 1) {
    const { name } = e.currentTarget;
    console.log('showw', name);
    setShow({ ...show, cat: !show.cat, dog: false });
    // } else {
    // setShow({ ...show, cat: !show.cat, dog: false });
    // }
  };

  return (
    <>
      <div className="category">
        <button type="button" name="dog" onClick={(e) => showProducts(e, 1)}>
          <Dropdown animal="Dog" faAngleDown={show.dog} />
        </button>
        <button type="button" name="cat" onClick={(e) => showProducts(e, 2)}>
          <Dropdown animal="Cat" faAngleDown={show.cat} />
        </button>
      </div>
      {/* <div className={!show ? "category__listProduct" : "category__listProduct--show"}>
        <ListProduct products={products[animalProduct]} />
      </div> */}
      {show.cat || show.dog ? <ListProduct products={products[animalProduct]} /> : null}
    </>
  );
};

export default NavBarSecondary;
function e(e: any, arg1: number): void {
  throw new Error('Function not implemented.');
}
