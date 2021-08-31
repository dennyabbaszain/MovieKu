/* eslint-disable accessor-pairs */
/* eslint-disable camelcase */
import '../styles/__movie-item.scss';
import notFoundImg from '../public/not-found.png';

class MovieItem extends HTMLElement {
  set dataMovie(data) {
    this._dataMovie = data;
    this.render();
  }

  set eventDetail(event) {
    this._eventDetail = event;
  }

  render() {
    const { title, poster_path, release_date, overview, vote_average } =
      this._dataMovie;
    this.innerHTML = `
    <div class='movie-item'>
      <div class='img-wrap'>
        <img src=${
          poster_path == null
            ? notFoundImg
            : `https://image.tmdb.org/t/p/w500${poster_path}`
        } alt='thumb'/>
      </div>
      <div class='about-movie-wrap'>
        <h3>${title}</h3>
        <h4><i class="bi bi-star-fill"></i> ${vote_average}</h4>
        <p>Release : ${release_date === '' ? 'none' : release_date}</p>
        <p>${overview === '' ? 'none overview' : overview} </p>
      </div>
    </div>`;

    const movieCard = this.querySelector('.movie-item');
    movieCard.addEventListener('click', () => this._eventDetail());
  }
}
customElements.define('movie-item', MovieItem);
