/* eslint-disable */
import './ItemDetail.scss';

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
  return (
    <>
      <div className="container">
        <div className="container__main">
          <img
            className="container__main__img"
            src={product?.imageMain}
            alt="product"
          />
        </div>
        <div className="container__info">
          <h2 className="container__info__title">cat show</h2>
          <p className="container__info__description">rico</p>
          <p className="container__info__price">
            {product?.price.toLocaleString('es-MX')}
          </p>
          <button className="btn__buy" type="button">
              Comprar
          </button>
          <button
            className="btn__addCart"
            type="button"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
