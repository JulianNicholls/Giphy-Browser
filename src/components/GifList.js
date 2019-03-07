import React from 'react';
import PropTypes from 'prop-types';

import DeferredImage from './DeferredImage';

function GifList({ gifs }) {
  return (
    <div className="gif-list">
      {gifs.map(image => (
        <a href={image.images.original.url} key={image.id}>
          <DeferredImage image={image} />
        </a>
      ))}
    </div>
  );
}

GifList.propTypes = {
  gifs: PropTypes.array.isRequired,
};

export default GifList;
