import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { chooseTrending, chooseRandom, search } = props;
  return (
    <header>
      <span id="product">GIPHY API</span>
      <span onClick={chooseTrending} className="section">
        Trending
      </span>
      <span onClick={chooseRandom} className="section">
        Random
      </span>
      <span onClick={search} className="section">
        <input type="search" placeholder="search" />
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
