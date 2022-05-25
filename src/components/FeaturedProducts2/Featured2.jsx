/* eslint-disable import/named */
import { FeaturedProducts2 } from '../../Data/FeaturedProducts2';

import './featured2.scss';

const Featured2 = () => (
  <div className="featuredProductsContainer2">
    {FeaturedProducts2.map((product) => (
      <div>
        <img className="featuredProductsContainer2__img" src={product.img} alt="" />
        <div>
          <button className="featuredProductsContainer2__btn" type="button">ADD TO CART</button>
        </div>
        <div>{product.name}</div>
        <div>{product.price}</div>
      </div>
    ))}
  </div>
);

export default Featured2;
