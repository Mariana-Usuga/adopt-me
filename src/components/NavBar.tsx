import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './navBar.scss';

const NavBar = () => {
  console.log('wir');
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="header__nav">
      <div className="header__main">
        <h2 className="header__main-logo">
          {/* <Link to="/">MarktPul</Link> */}
          Adopt Me
        </h2>
        <button
          type="button"
          className="header__bars"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {!isNavExpanded ? <FaBars /> : <FaTimes />}
        </button>
      </div>
      <ul
        className={!isNavExpanded ? 'header__ul' : 'header__ul--show background--show'}
      >
        <li className="header__li">
          {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
          Inicio
          {/* </Link> */}
        </li>
        <li className="header__li">
          {/* <Link to="/register" style={{ textDecoration: 'none' }}> */}
          Registro
          {/* </Link> */}
        </li>
        <li className="header__li">
          Inicio
          {/* {username ? ( */}
          {/* // <div> */}
          {/* <FaUser /> */}
          {/* <Link to="/user">{` ${username}`}</Link> */}
          {/* </div> */}
          {/* // ) : ( */}
          {/* // <Link to="login">Login</Link> */}
          {/* // )} */}
        </li>
        {/* <li */}
        {/* // className="header__li" */}
        {/* // onMouseOver={cartPreview} */}
        {/* // onMouseLeave={cartPreviewLeave} */}
        {/* // onFocus={cartPreview} */}
        {/* // > */}
        {/* <Link to="/cart"> */}
        {/* <i className="search-header__mobile-cart fas fa-shopping-cart"> */}
        {/* <div className="header--cartLength">{cart.length}</div> */}
        {/* </i> */}
        {/* </Link> */}
        {/* <div className="header--cartPrev" id="cartPrev">
            {cart.map((element) => (
              <CartPreview
                src={element.imageMain}
                producto={element.title}
                cantidad={element.qty}
                precio={element.price}
                id={element._id}
                key={generateKey(element.title)}
              />
            ))}
            <Link to="/cart">
              <button type="button" className="cartPrev--button">
                Ir al Carrito
              </button>
            </Link>
          </div> */}
        {/* </li> */}
      </ul>
      <div className="background" />
    </nav>
  );
};

export default NavBar;
