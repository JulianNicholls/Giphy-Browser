import React from 'react';
import PropTypes from 'prop-types';

function GifList({ gifs }) {
  return (
    <div className="gif-list">
      {gifs.map(image => (
        <a href={image.images.original.url} key={image.id}>
          <img src={image.images.fixed_width.url} alt={image.title} />
        </a>
      ))}
    </div>
  );
}

GifList.propTypes = {
  gifs: PropTypes.array.isRequired,
};

export default GifList;
