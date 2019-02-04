import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    searchText: '',
  };

  render() {
    const { chooseTrending, chooseRandom, search } = this.props;

    return (
      <header>
        <span id="product" onClick={chooseTrending}>
          GYFI
        </span>
        <span className="img-span">
          <img
            src="/images/Poweredby_100px-Black_VertLogo.png"
            alt="Powered by Giphy"
          />
        </span>
        <span onClick={chooseTrending} className="section">
          Trending
        </span>
        <span onClick={chooseRandom} className="section">
          Random
        </span>
        <span>
          <input
            type="search"
            placeholder="search"
            value={this.state.searchText}
            onChange={evt => this.setState({ searchText: evt.target.value })}
          />
          &nbsp;
          <button
            className="search"
            onClick={() => search(this.state.searchText)}
          >
            Search
          </button>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  chooseTrending: PropTypes.func.isRequired,
  chooseRandom: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default Header;
