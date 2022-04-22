import { FaSearch } from 'react-icons/fa';

import './inputSearch.scss';

const InputSearch = () => {
  console.log('icnf');
  return (
    <div className="inputSearchContainer">
      <div className="inputSearchContainer__fa">
        <FaSearch />
      </div>
      <div className="inputSearchContainer__item">
        <label htmlFor="search">
          <input
            className="inputSearchContainer__input"
            type="text"
            placeholder="What do need your pet?"
          />
        </label>
      </div>
    </div>
  );
};

export default InputSearch;
