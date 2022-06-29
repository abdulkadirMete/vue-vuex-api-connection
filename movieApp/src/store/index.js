import { createStore } from "vuex";
import axios from "axios";
import { baseApiUrl } from "../data/options";
import {
  MOVIE_FETCH_FAIL,
  MOVIE_FETCH_START,
  MOVIE_FETCH_SUCCESS,
  SLIDER_FETCH_FAIL,
  SLIDER_FETCH_START,
  SLIDER_FETCH_SUCCESS,
} from "./types";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      sliderMovies: [],
      isSliderLoading: true,
      sliderError: null,
      singleMovie: {},
      singleMovieLoading: false,
      singleMovieError: false,
    };
  },

  actions: {
    async fetchSliderMovies(context, payload) {
      try {
        context.commit(SLIDER_FETCH_START);
        const res = await axios.get(`${baseApiUrl}/api/movies/showcase/slider`);
        context.commit(SLIDER_FETCH_SUCCESS, res.data.movies);
      } catch (error) {
        context.commit(SLIDER_FETCH_FAIL, error.message);
      }
    },
    async fetchSingleMovie(context, id) {
      try {
        context.commit(MOVIE_FETCH_START);
        const req1 = axios.get(`${baseApiUrl}/api/movies/movie/${id}`);
        const req2 = axios.get(`${baseApiUrl}/api/movies/movie/rate/${id}`);
        axios.all([req1, req2]).then(
          axios.spread((...responses) => {
            const movie = responses[0];
            const rate = responses[1];
            const singleMovie = { ...movie.data, rate: rate.data };
            context.commit(MOVIE_FETCH_SUCCESS, singleMovie);
          })
        );
      } catch (error) {
        context.commit(MOVIE_FETCH_FAIL, error.message);
      }
    },
  },

  mutations: {
    // slider movies
    SLIDER_FETCH_START: (state) => {
      state.isSliderLoading = true;
    },
    SLIDER_FETCH_SUCCESS: (state, payload) => {
      state.isSliderLoading = false;
      state.sliderMovies = payload;
    },
    SLIDER_FETCH_FAIL: (state, payload) => {
      state.isSliderLoading = false;
      state.sliderError = payload;
    },

    // movie detail
    MOVIE_FETCH_START: (state) => {
      state.singleMovieLoading = true;
    },
    MOVIE_FETCH_SUCCESS: (state, payload) => {
      state.singleMovieLoading = false;
      state.singleMovie = payload;
    },
    MOVIE_FETCH_FAIL: (state, payload) => {
      state.singleMovieLoading = false;
      state.singleMovieError = payload;
    },
  },
  getters: {
    getSliderMovies(state) {
      return state.sliderMovies;
    },
  },
});

export default store;
