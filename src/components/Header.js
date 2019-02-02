import React from 'react';
import PropTypes from 'prop-types';
const Header = () => {
  return (
    <header>
      <span id="product">GIPHY API</span>
      <span className="section">Trending</span>
      <span className="section">Random</span>
      <span className="section">
        <input type="search" />
      </span>
    </header>
  );
};

Header.propTypes = {
  chooseTrending: PropTypes.func.isRequired,
  chooseRandom: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default Header;
