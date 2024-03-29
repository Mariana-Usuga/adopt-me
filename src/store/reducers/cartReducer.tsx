/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import { Product } from '../../interface/Product';
export interface itemCart {
  id?:number
  img?:string
  name?:string
  price?:number
  qty: number
}

export interface Cart {
  map: any;
  cart: itemCart[];
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
      state.cart = state.cart.map((product) => (product.id === action.payload
        ? {
          ...product,
          qty: product.qty - 1,
        }
        : product));
    },
    deleteOfCart: (state, action) => {
      state.cart = state.cart.filter((product) => (product.id !== action.payload));
    },
    deleteIte: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addToCart, deleteItem } = counterSlice.actions;

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
