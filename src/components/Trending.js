import React, { Component } from 'react';

import { API_KEY } from '../api';

export class Trending extends Component {
  state = {
    gifs: {},
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
      );
      const json = await response.json();

      console.log(json);

      this.setState({ gifs: json });
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
              <a href={image.images.original.url} key={image.id}>
                <img src={image.images.fixed_height.url} alt={image.title} />
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Trending;
