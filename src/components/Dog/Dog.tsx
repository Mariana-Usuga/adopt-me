// import { useState } from 'react';
// import { DogProducts } from '../../Data/DogProducts';

import './dog.scss';

interface DogProducts {
  id?:number
  name: string
  // snacks: string
  // toys: string
  // accesories: string
}

interface Props {
  products:DogProducts[]
}

// const products: DogProducts[] = [];
// FC<{ products: DogProducts }>
const Dog = ({ products }:Props) => (
  <div className="container">
    <ul className="container__dog">
      {products.map((product) => (
        <li className="container__dog__item">{product.name}</li>
      ))}
      {/* <li className="container__dog__item">Alimento</li>
        <li className="container__dog__item">Snacks</li>
        <li className="container__dog__item">Juguetes</li>
        <li className="container__dog__item">Accesorios</li> */}
    </ul>
  </div>
);
export default Dog;
