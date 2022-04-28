import { useState } from 'react';

import './listProduct.scss';

interface DogProducts {
  id?:number
  name: string
}

interface Props {
  products:DogProducts[]
}

const ListProduct = ({ products }:Props) => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="container">
      <ul className="container__dog">
        {products.map((product) => (
          <li
            className="container__dog__item"
            onClick={() => setShowProducts(!showProducts)}
            aria-hidden
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListProduct;
