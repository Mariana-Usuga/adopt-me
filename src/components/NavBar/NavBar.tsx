/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { FaBars, FaTimes, FaSistrix } from 'react-icons/fa';
import InputSearch from '../InputSearch/InputSearch';

import './navBar.scss';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showInputSearch, setShowInputSearch] = useState(false);

  const showAndHide = (compo:string) => {
    if (compo === 'input') {
      setShowInputSearch(!showInputSearch);
      setIsNavExpanded(false);
    } else {
      setIsNavExpanded(!isNavExpanded);
      setShowInputSearch(false);
    }
  };

  return (
    <nav className="header__nav">
      <div className="header__main">
        <h2 className="header__main__logo">
          Adopt Me
        </h2>
        <button
          type="button"
          className="header__bars"
          onClick={() => showAndHide('input')}
        >
          {!showInputSearch ? <FaSistrix /> : <FaTimes />}
        </button>
        <button
          type="button"
          className="header__bars"
          onClick={() => showAndHide('')}
        >
          {!isNavExpanded ? <FaBars /> : <FaTimes />}
        </button>
      </div>
      {showInputSearch && <div className="header__main__input"><InputSearch /></div>}
      {/* <div
        className={showInputSearch ? 'header__nav__input__show' : ''}
      >
        <InputSearch />
      </div> */}
      {/* <div> */}
      <ul className={!isNavExpanded ? 'header__ul'
        : 'header__ul--show background--show'}
      >
        <li className="header__li">
          {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
          Discover
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
        <li className="header__li__inputSearch">
          <InputSearch />
          {/* <input type="text" /> */}
        </li>
        <li className="header__li">
          Log in
        </li>
        <li className="header__li">
          <button className="header__li__signUp__btn" type="button">
            Sign up
          </button>
          {/* <div className="header__li__signUp"> */}
          {/* </div> */}
        </li>
      </ul>
      {/* </div> */}
      {/* <div className="background" /> */}
    </nav>
  );
};

export default NavBar;
