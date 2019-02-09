import React, { useState, useEffect, Fragment } from 'react';

import { API_KEY } from '../api';

const Random = () => {
  const [gif, setGif] = useState({});
  const [handle, setHandle] = useState(0);

  // This must be called when handle changes, so that the cleanup knows the
  // updated state of the slideshow handle and not just its initial value.
  useEffect(() => {
    loadRandom();

    return () => {
      if (handle) clearInterval(handle);
    };
  }, [handle]);

  const loadRandom = async () => {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=r`
      );
      const json = await response.json();

      setGif(json);
    } catch (err) {
      console.error(err);
    }
  };

  const slideshow = () => {
    const showHandle = setInterval(loadRandom, 5000);

    setHandle(showHandle);
  };

  const image = gif.data;

  return (
    <div className="random">
      <h1>Random GIF</h1>
      {!image ? (
        <h2>Loading...</h2>
      ) : (
        <Fragment>
          <img src={image.images.original.url} alt={image.title} />
          <div className="button-holder">
            <button onClick={loadRandom}>Another!</button>
            <button onClick={slideshow}>Slide show</button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Random;
