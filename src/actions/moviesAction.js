import axios from "axios";
import { types } from "../types/types"

const baseLink = "https://api.themoviedb.org/3";
const path = "certification_country=US&certification=G&sort_by=popularity.desc";
const APIKey = "&api_key=6eaabb81439b3ad146d593a4f2b7471c";
const allMoviesURL = baseLink + '/discover/movie?' + path + APIKey;
const searchURL = baseLink + '/search/movie?' + path + APIKey;
// const allMoviesURL = 'https://api.jikan.moe/v4/anime';

export const getAllMovies = () => {
    return async (dispatch) => {
        const res = await axios.get(allMoviesURL)
        dispatch({ type: types.ALL_MOVIES, payload: res.data.results, pageCount: res.data.total_pages, loading: false })
        // dispatch({ type: types.ALL_MOVIES, payload: res.data.data, pageCount: res.data.pagination.last_visible_page, loading: false })
    }
}

export const searchMovies = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`${searchURL}&query=${word}`)
        dispatch({ type: types.SEARCH_MOVIES, payload: res.data.results, pageCount: res.data.total_pages, loading: false })
        // const res = await axios.get(`${allMoviesURL}?q=${word}&order_by=popularity&sort=asc&sfw`)
        // dispatch({ type: types.SEARCH_MOVIES, payload: res.data.data, pageCount: res.data.pagination.last_visible_page, loading: false })
    }
}
export const pageMovies = (currentPage) => {
    return async (dispatch) => {
        const res = await axios.get(`${allMoviesURL}&page=${currentPage}`)
        dispatch({ type: types.PAGE_MOVIES, payload: res.data.results, loading: false })
        // const res = await axios.get(`${allMoviesURL}?page=${currentPage}`)
        // dispatch({ type: types.PAGE_MOVIES, payload: res.data.data, loading: false })
    }
}
export const getMovieDetails = (movieId) => {
    return async (dispatch) => {
        const res = await axios.get(`${baseLink}/movie/${movieId}?${path + APIKey}`)
        dispatch({ type: types.MOVIE_DETAILS, payload: res.data, loading: false })
        // const res = await axios.get(`${allMoviesURL}/${movieId}`)
        // dispatch({ type: types.MOVIE_DETAILS, payload: res.data.data, loading: false })
    }
}
export const setLoading = () => {
    return async (dispatch) => {
        dispatch({ type: types.LOADING, loading: true })
    }
}