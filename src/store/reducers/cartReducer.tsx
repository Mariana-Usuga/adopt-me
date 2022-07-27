/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interface/Product';

export interface Cart {
  map: any;
  cart: Product[]
}

const initialState: Cart = {
  cart: [],
  map: undefined,
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    deleteItem: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
// /* eslint-disable */
// /* eslint-disable prettier/prettier */

// const cartReducer = (state = initialState, action: Action) => {
//   const cart = [...state.cart, action.payload];
//   switch (action.type) {
//     case LOAD_CART:
//       return { ...state, cart: action.payload };
//     case ADD_TO_CART:
//       return {
//         ...state,
//         cart,
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;
