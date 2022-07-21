import React from 'react';

import './shoppingCart.scss';

const Cart = () => {
  // const token = JSON.parse(localStorage.getItem('token'));
  // const cart = useSelector((state) => state.cartReducer.cart);
  // const [isEmpty] = useState(true);
  // useEffect(() => {
  //   if (cart.length) {
  //     setIsEmpty(false);
  //   }
  // }, []);
  console.log('bien');
  return (
    <div className="cart">
      <div className="cart__header">Carrito</div>
      <div className="cart__shoppingCart">
        <div className="cart__shoppingCart__product">
          <div className="cart__shoppingCart__product__container">
            <div className="cart__shoppingCart__product__img">
              <img src="https://laika.com.co/cdn-cgi/image/onerror=redirect,format=auto,fit=scale-down,width=600,quality=80/https://laikapp.s3.amazonaws.com/images_products/2652_Evolve_Cat_%2ALata_Pavo__614X615.png" alt="" />
            </div>
            <div className="cart__shoppingCart__product__detail">
              <div className="cart__shoppingCart__product__detail__title">Evolve Cat Lata Pavo</div>
              <div className="cart__shoppingCart__product__detail__totalProduct">
                <div className="cart__shoppingCart__product__detail__totalProduct__totalPrice">
                  20.000
                </div>
                <div className="cart__shoppingCart__product__detail__totalProduct__amount">
                  <span className="cart__shoppingCart__product__detail__totalProduct__amount__less">-</span>
                  <span className="cart__shoppingCart__product__detail__totalProduct__amount__number">2</span>
                  <span className="cart__shoppingCart__product__detail__totalProduct__amount__plus">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
