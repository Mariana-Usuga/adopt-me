/* eslint-disable */
import Carousel from 'react-elastic-carousel';
import './ItemDetail.scss';
import {
  addProductToCart,
  addQtyProductToCart,
} from '../../store/actions/cartActions';

const ItemDetail = () => {

  /* eslint-disable */
  const handleCarrito = () => {
    const cartPrev = JSON.parse(localStorage.getItem('cartProduct')) || [];
    const exists = cartPrev.find((element) => element._id === product._id);
    if (exists) {
      dispatch(addQtyProductToCart(exists));
    } else {
      dispatch(addProductToCart(product));
    }
  };
  return (
    <>
      <div className="container">
        <div className="container__main">
          <img
            className="container__main__img"
            src={product?.imageMain}
            alt="product"
          />
          <Carousel className="carousel" breakPoints={breakPoints}>
            {product?.images === 0 ? (
              <div>no hay mas fotos</div>
            ) : (
              product?.images?.map((img) => <div className="product">
              <img className="product__img" src={img} alt="product" />
            </div>)
            )}
          </Carousel>
        </div>
        <div className="container__info">
          <h2 className="container__info__title">{product?.title}</h2>
          <p className="container__info__description">{product?.description}</p>
          <p className="container__info__price">
            {product?.price.toLocaleString('es-MX')}
          </p>
          <button className="btn__buy" type="button">
            <Link
              to={token ? `/pages/paymentProcess/${id}` : '/login'}
              className="btn__buy__link"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Comprar
            </Link>
          </button>
          <button
            className="btn__addCart"
            type="button"
            onClick={handleCarrito}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
