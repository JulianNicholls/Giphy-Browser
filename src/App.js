import React, { useState } from 'react';

import Header from './components/Header';
import Trending from './components/Trending';
import Random from './components/Random';

import './styles/App.scss';

const SearchResults = ({ searchText }) => (
  <div>
    <h1>Search Results</h1>
    <h3>Search: {searchText}</h3>
  </div>
);

const App = () => {
  const [page, setPage] = useState('trending');
  const [searchText, setSearchText] = useState('');

  const chooseRandom = () => setPage('random');
  const chooseTrending = () => setPage('trending');
  const search = searchText => {
    setSearchText(searchText);
    setPage('searchResults');
  };

  return (
    <div>
      <Header
        chooseRandom={chooseRandom}
        chooseTrending={chooseTrending}
        search={search}
      />
      <div className="container">
        {page === 'trending' && <Trending />}
        {page === 'random' && <Random />}
        {page === 'searchResults' && <SearchResults searchText={searchText} />}
      </div>
    </div>
  );
};

export default App;
