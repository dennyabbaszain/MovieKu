/* eslint-disable accessor-pairs */
import './movie-item.js';
import searchNotFound from '../public/search-not-found.svg';

class ResultSearch extends HTMLElement {
  set dataMovie(data) {
    this._dataMovie = data;
    this.render();
  }

  set eventDetail(event) {
    this._eventDetail = event;
  }

  set resultError(message) {
    this._message = message;
    this.innerHTML = `
    <div class='img-search-not-found'>
      <img src=${searchNotFound} alt='thumb'/>
      <h3>${message}</h3>
    </div>
    `;
  }

  render() {
    this.innerHTML = '';
    if (this._dataMovie.length === 0) {
      this.innerHTML = ` <div class='img-search-not-found'>
      <img src=${searchNotFound} alt='thumb'/>
      <h3> movie not found</h3>
    </div>`;
    }
    this._dataMovie.forEach((data) => {
      const movieItem = document.createElement('movie-item');
      movieItem.dataMovie = data;
      movieItem.eventDetail = this._eventDetail;
      this.appendChild(movieItem);
    });
  }
}

customElements.define('result-search', ResultSearch);
