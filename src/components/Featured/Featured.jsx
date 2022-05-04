import { FeaturedProducts } from '../../Data/FeaturedProducts';

import './featured.scss';

const Featured = () => (
  <div className="featuredProducts">
    <div className="featuredProducts__title">Doggy Must Haves</div>
    <div className="featuredProducts__container">
      {FeaturedProducts.map((product) => (
        <div className="featuredProducts__container__item">
          <img className="featuredProducts__container__item__img" src={product.img} alt="" />
          <div className="featuredProducts__container__item__name">{product.name}</div>
        </div>
      )) }
    </div>
  </div>
);

export default Featured;
