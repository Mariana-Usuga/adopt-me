/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import { Dispatch } from 'react';
import { Product } from '../../interface/Product';
import { LOAD_CART } from '../types/cartTypes';

export const loadCart = (cart: Product[]) => ({
  type: LOAD_CART,
  payload: cart,
});

// export const addToCart = (product: Product) => ({
//   type: ADD_TO_CART,
//   payload: product,
// });

// export const deleteFromCart = (productId) => ({
//   type: DELETE_FROM_CART,
//   payload: productId,
// });

// export const updateCurrentAddQty = (product) => ({
//   type: ADD_ONE_CART,
//   payload: product,
// });
// export const updateCurrentRemoveQty = (product) => ({
//   type: REMOVE_ONE_CART,
//   payload: product,
// });

// export const estimatedTotal = (product) => ({
//   type: ESTIMATED_TOTAL,
//   payload: product,
// });

// export const addProductToCart = (product: Product) => async (dispatch: Dispatch<Action>) => {
/* const products = await getProduct(product);
  const producto = { ...products.data, qty: 1 }; */
//   const producto = { ...product, qty: 1 };
//   dispatch(addToCart(producto));
// };

// export const deleteProductFromCart = (productId) => async (dispatch) => {
//   dispatch(deleteFromCart(productId));
// };

// export const fetchEstimatedTotal = (productId) => async (dispatch) => {
//   dispatch(estimatedTotal(productId));
// };
