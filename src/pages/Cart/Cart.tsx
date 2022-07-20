import React, { useState } from 'react';

import './shoppingCart.scss';

const Cart = () => {
  // const token = JSON.parse(localStorage.getItem('token'));
  // const cart = useSelector((state) => state.cartReducer.cart);
  const [isEmpty] = useState(true);
  // useEffect(() => {
  //   if (cart.length) {
  //     setIsEmpty(false);
  //   }
  // }, []);
  return (
    <>
      <main id="shopping-cart">
        {/* <ShoppingCart /> */}
        {/* <CartSummary /> */}
      </main>
      {/* <Link
        to={token ? '/pages/paymentProcess' : '/login'}
        style={{ textDecoration: 'none' }}
      > */}
      <button
          // onClick={buyShoppingCart}
        className="shopping-cart__btnPay"
        type="button"
        disabled={isEmpty}
      >
        Proceder al Pago
      </button>
      {/* </Link> */}
    </>
  );
};
export default Cart;
