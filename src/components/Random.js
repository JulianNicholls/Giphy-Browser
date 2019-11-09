import React, { useState, useRef, useEffect, Fragment } from 'react';

import { API_KEY } from '../api';

const Random = () => {
  const [gif, setGif] = useState({});
  const handle = useRef(0);

  useEffect(() => {
    loadRandom();

    return () => {
      if (handle.current) clearInterval(handle.current);
    };
  }, []);

  const loadRandom = async () => {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=R`
      );
      const json = await response.json();

      setGif(json);
    } catch (err) {
      console.error(err);
    }
  };

  const slideshow = () => {
    handle.current = setInterval(loadRandom, 5000);
  };

  const image = gif.data;

  return (
    <div className="random">
      {!image ? (
        <h2>Loading...</h2>
      ) : (
        <Fragment>
          <div className="gif-holder">
            <img src={image.images.original.url} alt={image.title} />
          </div>
          <div className="button-holder">
            <button disabled={handle.current !== 0} onClick={loadRandom}>
              Another!
            </button>
            <button disabled={handle.current !== 0} onClick={slideshow}>
              Slide show
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Random;
