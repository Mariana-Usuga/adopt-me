/* eslint-disable */
/* eslint-disable prettier/prettier */
import {
  LOAD_CART,
  ADD_TO_CART,
  ADD_ONE_CART,
  REMOVE_ONE_CART,
  DELETE_FROM_CART,
  ESTIMATED_TOTAL,
} from '../types/cartTypes';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cartProduct')) || [],
  estimatedTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  const cart = [...state.cart, action.payload];
  switch (action.type) {
    case LOAD_CART:
      return { ...state, cart: action.payload };
    case ADD_TO_CART:
      return {
        ...state,
        cart,
      };
    default:
      return state;
  }
};

export default cartReducer;
