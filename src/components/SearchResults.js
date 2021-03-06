import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import GifList from './GifList';

import { API_KEY } from '../api';

const SearchResults = ({ searchText, resultCount }) => {
  const [gifs, setGifs] = useState({});

  useEffect(() => {
    const loadResults = async () => {
      try {
        const response = await fetch(
          `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${API_KEY}&rating=R&limit=${resultCount}`
        );
        const json = await response.json();

        setGifs(json);
      } catch (err) {
        console.error(err);
      }
    };

    loadResults();
  }, [searchText, resultCount]);

  return (
    <div>
      <h1>
        Search Results: <small>{searchText}</small>
      </h1>

      {!gifs.data ? <h2>Loading...</h2> : <GifList gifs={gifs.data} />}
    </div>
  );
};

SearchResults.propTypes = {
  searchText: PropTypes.string.isRequired,
  resultCount: PropTypes.number.isRequired,
};

export default SearchResults;
