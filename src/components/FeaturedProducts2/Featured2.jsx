/* eslint-disable import/named */
import { FeaturedProducts2 } from '../../Data/FeaturedProducts2';

const Featured2 = () => (
  <div className="FeaturedProducts2">
    {FeaturedProducts2.map((product) => (
      <div>
        <img src={product.img} alt="" />
        <div>{product.name}</div>
        <div>{product.price}</div>
      </div>
    ))}
  </div>
);

export default Featured2;
