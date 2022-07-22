/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { products } from '../../Data/products';

import './featured.scss';

const Featured = () => (
  <div className="featuredProducts">
    <div className="featuredProducts__title">Doggy Must Haves</div>
    <div className="featuredProducts__container">
      {products.map((product) => (
        <Link to={`pages/itemDetail/${product.id}`}>
          <div className="featuredProducts__container__item">
            <img className="featuredProducts__container__item__img" src={product.img} alt="" />
            <div className="featuredProducts__container__item__name">{product.name}</div>
          </div>
        </Link>
      )) }
    </div>
  </div>
);

export default Featured;
