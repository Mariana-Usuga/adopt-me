/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LandingPage from './pages/LandingPage';
import reportWebVitals from './reportWebVitals';
// import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/kml" element={<LandingPage />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
