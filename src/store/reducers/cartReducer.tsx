/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interface/Product';

export interface Cart {
  cart: Product[]
}

const initialState: Cart = {
  cart: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
// /* eslint-disable */
// /* eslint-disable prettier/prettier */
// import {
//   LOAD_CART,
//   ADD_TO_CART,
//   ADD_ONE_CART,
//   REMOVE_ONE_CART,
//   DELETE_FROM_CART,
//   ESTIMATED_TOTAL,
// } from '../types/cartTypes';

// interface Action {
//   type: string,
// }

// const initialState = {
//   // cart: JSON.parse(localStorage.getItem('cartProduct')) || [],
//   cart: [],
//   estimatedTotal: 0,
// };

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
