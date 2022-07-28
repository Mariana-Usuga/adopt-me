/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Product } from '../../interface/Product';
import { deleteItem } from '../../store/reducers/cartReducer';
import { RootState } from '../../store';

import './shoppingCart.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  // const token = JSON.parse(localStorage.getItem('token'));
  console.log('bien', cart.cart);

  const lessQuantity = () => {
    dispatch(deleteItem());
  };

  return (
    <div className="cart">
      <div className="cart__header">Carrito</div>
      <div className="cart__shoppingCart">
        <div className="cart__shoppingCart__product">
          {cart.cart.map((product: any) => (
            <div className="cart__shoppingCart__product__container">
              <div className="cart__shoppingCart__product__img">
                <img src={product.img} alt="" />
              </div>
              <div className="cart__shoppingCart__product__detail">
                <div className="cart__shoppingCart__product__detail__title">{product.name}</div>
                <div className="cart__shoppingCart__product__detail__totalProduct">
                  <div className="cart__shoppingCart__product__detail__totalProduct__totalPrice">
                    {product.price}
                  </div>
                  <div className="cart__shoppingCart__product__detail__totalProduct__amount">
                    <span
                      className="cart__shoppingCart__product__detail__totalProduct__amount__less"
                      onClick={lessQuantity}
                    >
                      -
                    </span>
                    <span
                      className="cart__shoppingCart__product__detail__totalProduct__amount__number"
                    >
                      1
                    </span>
                    <span
                      className="cart__shoppingCart__product__detail__totalProduct__amount__plus"
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
function deleteItem(): any {
  throw new Error('Function not implemented.');
}
