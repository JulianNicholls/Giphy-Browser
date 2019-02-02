import React, { Component } from 'react';

import Header from './components/Header';

import './styles/App.scss';

class App extends Component {
  state = {
    page: 'trending',
    searchText: '',
  };

  chooseRandom = () => this.setState(() => ({ page: 'random' }));
  chooseTrending = () => this.setState(() => ({ page: 'Trending' }));
  search = searchText =>
    this.setState(() => ({ page: 'searchResults', searchText }));

  render() {
    return (
      <div>
        <Header
          chooseRandom={this.chooseRandom}
          chooseTrending={this.chooseTrending}
          search={this.search}
        />
      </div>
    );
  }
}

export default App;
