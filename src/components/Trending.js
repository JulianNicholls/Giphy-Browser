import React, { Component } from 'react';
import axios from 'axios';

import { API_KEY } from '../api';

export class Trending extends Component {
  state = {
    gifs: {},
  };

  async componentDidMount() {
    try {
      const json = await axios.get(
        `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
      );

      console.log({ data: json.data });
      this.setState({ gifs: json.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { gifs } = this.state;

    return (
      <div className="trending">
        <h1>Trending GIFs</h1>

        {!gifs.data ? (
          <h2>Loading...</h2>
        ) : (
          <div className="trending-list">
            {gifs.data.map(image => (
              <a href={image.images.original.url}>
                <img
                  src={image.images.fixed_height.url}
                  alt={image.title}
                  key={image.id}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Trending;
