/* eslint-disable import/extensions */
// import 'regenerator-runtime';
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
import './components/detail-movie.js';

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
  }

  getDataOnLoadPopular() {
    axios
      .get(`${this.PROXY}${this.baseUrl}movie/popular${this.APIkey}`)
      .then((res) => {
        const data = res.data.results;
        this.renderMovieListPopular(data);
      });
  }

  getDataOnLoadTopRated() {
    axios
      .get(`${this.PROXY}${this.baseUrl}movie/top_rated${this.APIkey}`)
      .then((res) => {
        const data = res.data.results;
        this.renderMovieListTopRated(data);
      });
  }

  getDataOnLoadUpcoming() {
    axios
      .get(`${this.PROXY}${this.baseUrl}movie/upcoming${this.APIkey}`)
      .then((res) => {
        const data = res.data.results;
        this.renderMovieListUpcoming(data);
      });
  }

  getDataDetail(id) {
    axios
      .get(
        `${this.PROXY}${this.baseUrl}movie/${id}${this.APIkey}&append_to_response=videos`
      )
      .then((res) => {
        const data = res.data;
        this.renderMovieDetail(data);
      });
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

  renderMovieDetail(data) {
    const detailMovie = document.createElement('detail-movie');
    detailMovie.dataMovie = data;
    document.body.appendChild(detailMovie);
  }
}

const movieApp = new MovieApp();

movieApp.getDataOnLoadPopular();
movieApp.getDataOnLoadTopRated();
movieApp.getDataOnLoadUpcoming();

movieApp.listPopular.eventDetail = function () {
  movieApp.container.style.display = 'none';
  const id = this._dataMovie.id;
  movieApp.getDataDetail(id);
};
movieApp.listTopRated.eventDetail = function () {
  movieApp.container.style.display = 'none';
  const id = this._dataMovie.id;
  movieApp.getDataDetail(id);
};
movieApp.listUpcoming.eventDetail = function () {
  movieApp.container.style.display = 'none';
  const id = this._dataMovie.id;
  movieApp.getDataDetail(id);
};
movieApp.detailMovie.eventBack = function () {
  console.log('work');
};
