// eslint-disable-next-line import/no-unresolved, import/extensions
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
// import { products } from '../../mockData/products';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Amount from '../../components/Amount/Amount';
import { Product } from '../../interface/Product';
import { products } from '../../Data/products';

import './itemDetail.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams()

  const addProduct = () => {
    dispatch(addToCart());
  };

  return (
    <div className="itemDetail">
       {products.find((p: Product) => p.id === id).map((pr) => (
    <li>
      {pr}
    </li>
  ))}
    </div>
  );
};
export default ItemDetail;
<>
<div className="itemDetail__main">
<img
  className="itemDetail__main__img"
  alt="product"
  src="https://res.cloudinary.com/db3njhxi0/image/upload/v1651706826/wevcdgyshtxkeyfbjkyg.jpg"
/>
</div>
<div className="itemDetail__info">
<h2 className="itemDetail__info__title">Cat Chow for Cat</h2>
<div className="itemDetail__info__container">
  <div>20.000</div>
  <Amount />
</div>
<div className="itemDetail__info__btns">
  <button className="itemDetail__info__btns__btnBuy" type="button">
    Comprar
  </button>
  <button
    className="itemDetail__info__btns__btnAddCart"
    type="button"
    onClick={addProduct}
  >
    Añadir al carrito
  </button>
</div>
</div>
