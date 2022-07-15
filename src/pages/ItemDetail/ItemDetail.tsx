import './itemDetail.scss';

const ItemDetail = () => {
  // /* eslint-disable */
  // const handleCarrito = () => {
  //   const cartPrev = JSON.parse(localStorage.getItem('cartProduct')) || [];
  //   const exists = cartPrev.find((element) => element._id === product._id);
  //   if (exists) {
  //     dispatch(addQtyProductToCart(exists));
  //   } else {
  //     dispatch(addProductToCart(product));
  //   }
  // };
  console.log('working');
  return (
    <div className="itemDetail">
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
          <div className="itemDetail__info__container__price">
            {/* {product?.price.toLocaleString('es-MX')} */}
            20.000
          </div>
          <div className="itemDetail__info__container__amount">
            <div>Amount</div>
            <div>- 1 +</div>
          </div>
        </div>
        <div className="itemDetail__info__btns">
          <button className="itemDetail__info__btns__btnBuy" type="button">
            Comprar
          </button>
          <button
            className="itemDetail__info__btns__btnAddCart"
            type="button"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
