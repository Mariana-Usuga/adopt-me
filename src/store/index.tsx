/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
// import reducers from './reducers/index';

// const store = createStore(
//   reducers,
//   {},
//   applyMiddleware(thunk),
// );

export const store = configureStore({
  reducer: {

  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
