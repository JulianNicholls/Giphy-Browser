import React, { useState } from 'react';

import Header from './components/Header';
import Trending from './components/Trending';
import Random from './components/Random';
import SearchResults from './components/SearchResults';

import './styles/App.scss';

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
      <main className="container">
        {page === 'trending' && <Trending />}
        {page === 'random' && <Random />}
        {page === 'searchResults' && <SearchResults searchText={searchText} />}
      </main>
    </div>
  );
};

export default App;
