import axios from "axios";
import { types } from "../types/types"

const baseLink = "https://api.themoviedb.org/3";
const path = "certification_country=US&certification=G&sort_by=popularity.desc";
const APIKey = "&api_key=6eaabb81439b3ad146d593a4f2b7471c";
const allMoviesURL = baseLink + '/discover/movie?' + path + APIKey;
const searchURL = baseLink + '/search/movie?' + path + APIKey;

export const getAllMovies = () => {
    return async (dispatch) => {
        const res = await axios.get(allMoviesURL)
        dispatch({ type: types.ALL_MOVIES, payload: res.data.results, pageCount: res.data.total_pages })
    }
}

export const searchMovies = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`${searchURL}&query=${word}`)
        dispatch({ type: types.SEARCH_MOVIES, payload: res.data.results, pageCount: res.data.total_pages })
    }
}
export const pageMovies = (currentPage) => {
    return async (dispatch) => {
        const res = await axios.get(`${allMoviesURL}&page=${currentPage}`)
        dispatch({ type: types.PAGE_MOVIES, payload: res.data.results })
    }
}
export const getMovieDetails = (movieId) => {
    return async (dispatch) => {
        const res = await axios.get(`${baseLink}/movie/${movieId}?${path + APIKey}`)
        console.log(res.data)
        dispatch({ type: types.MOVIE_DETAILS, payload: res.data })
    }
}
export const setLoading = () => {
    return async (dispatch) => {
        dispatch({ type: types.LOADING, loading: true })
    }
}