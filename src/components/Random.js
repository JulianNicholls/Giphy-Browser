import React, { Component, Fragment } from 'react';

import { API_KEY } from '../api';

export class Random extends Component {
  state = {
    gif: {},
    showHandle: null,
  };

  componentDidMount() {
    this.loadRandom();
  }

  componentWillUnmount() {
    const { showHandle } = this.state;

    if (showHandle) clearInterval(showHandle);
  }

  async loadRandom() {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=r`
      );
      const json = await response.json();

      this.setState({ gif: json });
    } catch (err) {
      console.error(err);
    }
  }

  slideshow = () => {
    this.loadRandom();

    const showHandle = setInterval(() => this.loadRandom(), 5000);

    this.setState({ showHandle });
  };

  render() {
    const { gif } = this.state;

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
              <button onClick={() => this.loadRandom()}>Another!</button>
              <button onClick={() => this.slideshow()}>Slide show</button>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Random;
