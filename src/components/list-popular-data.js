/* eslint-disable accessor-pairs */
import './movie-item.js';

class ListPopularData extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set dataMovie(data) {
    this._dataMovie = data;
    this.render();
  }

  set eventDetail(event) {
    this._eventDetail = event;
  }

  render() {
    this.innerHTML = '';
    this._dataMovie.forEach((data) => {
      const movieItem = document.createElement('movie-item');
      movieItem.dataMovie = data;
      movieItem.eventDetail = this._eventDetail;
      this.appendChild(movieItem);
    });
  }
}

customElements.define('list-popular-data', ListPopularData);
