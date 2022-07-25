/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import LandingPage from './pages/LandingPage';
import reportWebVitals from './reportWebVitals';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Layout from './components/Layout/Layout';
import Cart from './pages/Cart/Cart';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/itemDetail" element={<ItemDetail />} />
      <Route path="pages" element={<Layout />}>
        <Route path="itemDetail/:id" element={<ItemDetail />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
