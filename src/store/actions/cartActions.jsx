import { LOAD_CART,
  ADD_TO_CART,
  ADD_ONE_CART,
  REMOVE_ONE_CART,
  DELETE_FROM_CART,
  ESTIMATED_TOTAL } from '../types/cartTypes';

export const loadCart = (cart) => ({
  type: LOAD_CART,
  payload: cart,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const deleteFromCart = (productId) => ({
  type: DELETE_FROM_CART,
  payload: productId,
});

export const updateCurrentAddQty = (product) => ({
  type: ADD_ONE_CART,
  payload: product,
});
export const updateCurrentRemoveQty = (product) => ({
  type: REMOVE_ONE_CART,
  payload: product,
});

export const estimatedTotal = (product) => ({
  type: ESTIMATED_TOTAL,
  payload: product,
});

export const addProductToCart = (product) => async (dispatch) => {
  /* const products = await getProduct(product);
  const producto = { ...products.data, qty: 1 }; */
  const producto = { ...product, qty: 1 };
  dispatch(addToCart(producto));
};

export const deleteProductFromCart = (productId) => async (dispatch) => {
  dispatch(deleteFromCart(productId));
};

export const fetchEstimatedTotal = (productId) => async (dispatch) => {
  dispatch(estimatedTotal(productId));
};
