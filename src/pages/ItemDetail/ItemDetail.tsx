/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { RootState } from '../../store';
// import { addToCart } from '../../store/actions/cartActions';
import Amount from '../../components/Amount/Amount';
import { Product } from '../../interface/Product';
import { products } from '../../Data/products';
import { addToCart } from '../../store/reducers/cartReducer';
import Cart from '../Cart/Cart';
import './itemDetail.scss';

const ItemDetail = () => {
  // const count = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [item, setItem] = useState({
    id: 0,
    img: '',
    name: '',
    price: 0,

  });

  const addProduct = () => {
    console.log('add', item);
    dispatch(addToCart(item));
  };

  useEffect(() => {
    const p = products.find((product: Product) => product.id === Number(id));
    if (p !== undefined) {
      setItem(p);
    }
  }, []);

  return (
    <div className="itemDetail">
      <div className="itemDetail__main">
        <img
          className="itemDetail__main__img"
          alt="product"
          src={item.img}
        />
      </div>
      <div className="itemDetail__info">
        <h2 className="itemDetail__info__title">{item.name}</h2>
        <div className="itemDetail__info__container">
          <div>{item.price}</div>
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
      <Cart />
    </div>
  );
};
export default ItemDetail;
