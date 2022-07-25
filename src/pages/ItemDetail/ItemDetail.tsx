/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved, import/extensions
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../store/actions/cartActions';
// import { products } from '../../mockData/products';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Amount from '../../components/Amount/Amount';
// eslint-disable-next-line import/no-unresolved, import/extensions, no-unused-vars
import { Product } from '../../interface/Product';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { products } from '../../Data/products';

import './itemDetail.scss';

const ItemDetail = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState({
    id: 0,
    img: '',
    name: '',
    price: 0,
  });

  const addProduct = () => {
    // dispatch(addToCart());
    console.log('pr', item);
  };

  useEffect(() => {
    console.log('useefe');
    const p = products.find((product: Product) => product.id === Number(id));
    if (p !== undefined) {
      setItem(p);
    }
    // console.log('useEffe', p, 'id para', id, 'pro');
  // setItem(products.find((p: Product) => p.id === id));
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
    </div>
  );
};
export default ItemDetail;
