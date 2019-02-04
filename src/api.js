import axios from 'axios';

export const API_KEY = 'QekbxCX1T6ljcnHvzJPyofrj7NRZqwmN';

export function loadTrending() {
  axios
    .get(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
    .then(json => {
      console.log({ json, jsondata: json.data });
      return json.data;
    });
}

export function loadRandom() {
  axios
    .get(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then(json => {
      console.log({ json, jsondata: json.data });
      return json.data;
    });
}
