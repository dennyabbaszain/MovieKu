/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable accessor-pairs */
/* eslint-disable camelcase */
import '../styles/__detail-movie.scss';
import notFoundImg from '../public/not-found.png';
class DetailMovie extends HTMLElement {
  set dataMovie(data) {
    this._dataMovie = data;
    this.render();
  }

  render() {
    const {
      title,
      poster_path,
      budget,
      release_date,
      overview,
      vote_average,
      genres,
      production_companies,
    } = this._dataMovie;
    const genre = genres.map((genre) => {
      return genre.name;
    });
    const company = production_companies.map((company) => {
      return company.name;
    });
    this.innerHTML = `
    <div class='detail-movie'>
    <button class='detail-back'><i class="bi bi-arrow-left-circle"></i> Back </button>
      <div class='img-wrap'>
        <img src=${
          poster_path == null
            ? notFoundImg
            : `https://image.tmdb.org/t/p/w500/${poster_path}`
        } alt='thumb'/>
      </div>
      <div class='detail-movie-about'>
        <h1>${title}</h1>
        <h3><i class="bi bi-star-fill"></i> ${vote_average}</h3>
        <p>Release : ${release_date === '' ? 'none' : release_date}</p>
        <p>Genre : ${genre.length === 0 ? 'none' : genre}</p>
        <p>Production Company : ${company.length === 0 ? 'none' : company}</p>
        <p>Production Budget : ${budget === 0 ? 'none' : `${budget}US$`}  </p>
        <p>${overview === '' ? 'none overview' : overview} </p>
      </div>
  </div>`;

    const btnBack = this.querySelector('.detail-back ');
    btnBack.addEventListener('click', function (e) {
      const container = document.querySelector('.container');
      const detailMovie = document.querySelector('detail-movie');
      container.style.display = 'block';
      detailMovie.remove();
    });
  }
}
customElements.define('detail-movie', DetailMovie);
