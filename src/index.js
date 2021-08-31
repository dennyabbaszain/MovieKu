/* eslint-disable space-before-function-paren */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import axios from 'axios';
import './styles/style.scss';
import './components/app-header.js';
import './components/app-footer.js';
import './components/app-hero.js';
import './components/app-search.js';
import './components/list-popular.js';
import './components/list-popular-data.js';
import './components/list-toprated.js';
import './components/list-toprated-data.js';
import './components/list-upcoming.js';
import './components/list-upcoming-data.js';
import './components/result-search.js';
import './components/detail-movie.js';
import './components/loading.js';

class MovieApp {
  constructor() {
    this.APIkey = '?api_key=b64d5359e0d3ff5bf8c41d809ccee8d7';
    this.PROXY = 'https://cors.bridged.cc/';
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.listPopular = document.querySelector('list-popular-data');
    this.listTopRated = document.querySelector('list-toprated-data');
    this.listUpcoming = document.querySelector('list-upcoming-data');
    this.detailMovie = document.querySelector('detail-movie');
    this.container = document.querySelector('.container');
    this.searchForm = document.querySelector('app-search');
    this.resultText = document.querySelector('.result-text');
    this.resultSearch = document.querySelector('result-search');
  }

  getDataOnLoadPopular() {
    axios
      .get(`${this.PROXY}${this.baseUrl}movie/popular${this.APIkey}`)
      .then((res) => {
        const data = res.data.results;
        this.renderMovieListPopular(data);
        this.removeLoading();
      })
      .catch((err) => console.log(err));
  }

  getDataOnLoadTopRated() {
    axios
      .get(`${this.PROXY}${this.baseUrl}movie/top_rated${this.APIkey}`)
      .then((res) => {
        const data = res.data.results;
        this.renderMovieListTopRated(data);
      })
      .catch((err) => console.log(err));
  }

  getDataOnLoadUpcoming() {
    axios
      .get(`${this.PROXY}${this.baseUrl}movie/upcoming${this.APIkey}`)
      .then((res) => {
        const data = res.data.results;
        this.renderMovieListUpcoming(data);
      })
      .catch((err) => console.log(err));
  }

  getDataDetail(id) {
    axios
      .get(
        `${this.PROXY}${this.baseUrl}movie/${id}${this.APIkey}&append_to_response=videos`
      )
      .then((res) => {
        const data = res.data;
        this.renderMovieDetail(data);
        this.removeLoading();
      })
      .catch((err) => console.log(err));
  }

  getSearcingMovie(keyword) {
    if (keyword.length === 0) {
      movieApp.resultSearch.classList.add('result-search-success');
      this.removeLoading();
      return this.fallbackResult('teks input kosong!');
    }
    axios
      .get(
        `${this.PROXY}${this.baseUrl}search/movie${this.APIkey}&query=${keyword}`
      )
      .then((res) => {
        const data = res.data.results;
        movieApp.resultSearch.classList.add('result-search-success');
        this.renderMovieResultSearch(data);
        this.removeLoading();
      })
      .catch((err) => console.log(err));
  }

  fallbackResult(message) {
    this.resultSearch.resultError = message;
  }

  renderMovieResultSearch(data) {
    this.resultSearch.dataMovie = data;
  }

  renderMovieListPopular(data) {
    this.listPopular.dataMovie = data;
  }

  renderMovieListTopRated(data) {
    this.listTopRated.dataMovie = data;
  }

  renderMovieListUpcoming(data) {
    this.listUpcoming.dataMovie = data;
  }

  renderMovieDetail(data, event) {
    const detailMovie = document.createElement('detail-movie');
    detailMovie.dataMovie = data;
    detailMovie.eventBack = this._eventBack;
    document.body.appendChild(detailMovie);
  }

  renderLoading() {
    const loading = document.createElement('loading-animate');
    document.body.appendChild(loading);
  }

  removeLoading() {
    const loading = document.querySelector('loading-animate');
    loading.remove();
  }
}

const movieApp = new MovieApp();
movieApp.renderLoading();
movieApp.getDataOnLoadPopular();
movieApp.getDataOnLoadTopRated();
movieApp.getDataOnLoadUpcoming();

movieApp.listPopular.eventDetail = function () {
  movieApp.container.style.display = 'none';
  const id = this._dataMovie.id;
  movieApp.renderLoading();
  movieApp.getDataDetail(id);
};
movieApp.listTopRated.eventDetail = function () {
  movieApp.container.style.display = 'none';
  const id = this._dataMovie.id;
  movieApp.renderLoading();
  movieApp.getDataDetail(id);
};
movieApp.listUpcoming.eventDetail = function () {
  movieApp.container.style.display = 'none';
  const id = this._dataMovie.id;
  movieApp.renderLoading();
  movieApp.getDataDetail(id);
};
movieApp.resultSearch.eventDetail = function () {
  movieApp.container.style.display = 'none';
  const id = this._dataMovie.id;
  movieApp.renderLoading();
  movieApp.getDataDetail(id);
};
movieApp.searchForm.eventSubmit = function (e) {
  const keyword = this.searchValue;
  movieApp.renderLoading();
  movieApp.resultText.style.display = 'block';
  movieApp.getSearcingMovie(keyword);
  e.preventDefault();
};
