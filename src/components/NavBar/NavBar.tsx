/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { FaBars, FaTimes, FaSistrix } from 'react-icons/fa';
import InputSearch from '../InputSearch/InputSearch';

import './navBar.scss';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showInputSearch, setShowInputSearch] = useState(false);

  return (
    <nav className="header__nav">
      <div className="header__main">
        <h2 className="header__main__logo">
          Adopt Me
        </h2>
        <button
          type="button"
          className="header__bars"
          onClick={() => {
            setShowInputSearch(!showInputSearch);
          }}
        >
          {!showInputSearch ? <FaSistrix /> : <FaTimes />}
        </button>
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
      {showInputSearch && <InputSearch />}
      {/* <InputSearch /> */}
      <ul
        className={!isNavExpanded ? 'header__ul'
          : 'header__ul--show background--show'}
      >
        <li className="header__li">
          {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
          About
          {/* </Link> */}
        </li>
        <li className="header__li">
          {/* <Link to="/register" style={{ textDecoration: 'none' }}> */}
          Pets
          {/* </Link> */}
        </li>
        <li className="header__li">
          Store
        </li>
        <li className="header__li">
          <InputSearch />
        </li>
        <li className="header__li">
          Log in
        </li>
        <li className="header__li__signUp">
          {/* <div className="header__li__signUp"> */}
          Sign up
          {/* </div> */}
        </li>
      </ul>
      <div className="background" />
    </nav>
  );
};

export default NavBar;
