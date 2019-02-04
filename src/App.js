import React, { Component } from 'react';

import Header from './components/Header';
import Trending from './components/Trending';

import './styles/App.scss';

const Random = () => (
  <div>
    <h1>Random GIF</h1>
  </div>
);

const SearchResults = () => (
  <div>
    <h1>Search Results</h1>
  </div>
);

class App extends Component {
  state = {
    page: 'trending',
    searchText: '',
  };

  chooseRandom = () => this.setState(() => ({ page: 'random' }));
  chooseTrending = () => this.setState(() => ({ page: 'trending' }));
  search = searchText =>
    this.setState(() => ({ page: 'searchResults', searchText }));

  render() {
    const { page, searchText } = this.state;

    return (
      <div>
        <Header
          chooseRandom={this.chooseRandom}
          chooseTrending={this.chooseTrending}
          search={this.search}
        />
        <div className="container">
          {page === 'trending' && <Trending />}
          {page === 'random' && <Random />}
          {page === 'searchResults' && <SearchResults searchText={searchText} />}
        </div>
      </div>
    );
  }
}

export default App;
