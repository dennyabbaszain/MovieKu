/* eslint-disable camelcase */
import '../styles/__detail-movie.scss';

class DetailMovie extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set dataMovie(data) {
    this._dataMovie = data;
    this.render();
  }

  // eslint-disable-next-line accessor-pairs
  set eventBack(event) {
    this._eventBack = event;
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
    console.log(this._dataMovie, genre, company);
    this.innerHTML = `
    <div class='detail-movie'>
    <button class='detail-back'><i class="bi bi-arrow-left-circle"></i> Back </button>
      <div class='img-wrap'>
        <img src='https://image.tmdb.org/t/p/w500/${poster_path}' alt='thumb'/>
      </div>
      <div class='detail-movie-about'>
        <h1>${title}</h1>
        <h3><i class="bi bi-star-fill"></i> ${vote_average}</h3>
        <p>Release : ${release_date}</p>
        <p>Genre : ${genre}</p>
        <p>Production Company : ${company}</p>
        <p>Production Budget : ${budget} US$ </p>
        <p>Release : ${release_date}</p>
        <p>Release : ${release_date}</p>
        <p>${overview} </p>
      </div>
  </div>`;

    const btnBack = this.querySelector('.detail-back ');
    btnBack.addEventListener('click', () => this._eventBack());
    const detailMovie = document.createElement('detail-movie');
    detailMovie.eventBack = this._eventBack;
    this.appendChild(detailMovie);
  }
}
customElements.define('detail-movie', DetailMovie);
