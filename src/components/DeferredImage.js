import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InView } from 'react-intersection-observer';

function DeferredImage({ image }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <InView>
      {({ inView, ref }) => {
        if (loaded || inView) {
          setLoaded(true);

          return (
            <img ref={ref} src={image.images.fixed_width.url} alt={image.title} />
          );
        }

        return <div className="lazy" ref={ref} />;
      }}
    </InView>
  );
}

DeferredImage.propTypes = {
  image: PropTypes.object.isRequired,
};

export default DeferredImage;
