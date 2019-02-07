import React, { useState, useEffect } from 'react';

import { API_KEY } from '../api';

const Trending = () => {
  const [gifs, setGifs] = useState({});

  const loadTrending = async () => {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
      );
      const json = await response.json();

      setGifs(json);
    } catch (err) {
      console.error(err);
    }
  };

  // A useEffect() function cannot be an async function, so the async function
  // must be elsewhere and called with () => { ... }.
  useEffect(() => {
    loadTrending();
  }, []);

  return (
    <div className="trending">
      <h1>Trending GIFs</h1>

      {!gifs.data ? (
        <h2>Loading...</h2>
      ) : (
        <div className="trending-list">
          {gifs.data.map(image => (
            <a href={image.images.original.url} key={image.id}>
              <img src={image.images.fixed_height.url} alt={image.title} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trending;
