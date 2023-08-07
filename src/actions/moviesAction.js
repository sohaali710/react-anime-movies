import axios from "axios";
import { types } from "../types/types"

const baseUrl = 'https://api.jikan.moe/v4/anime';

export const getAllMovies = () => {
    return async (dispatch) => {
        const res = await axios.get(baseUrl)
        dispatch({ type: types.ALL_MOVIES, payload: res.data.data, pageCount: res.data.pagination.last_visible_page, loading: false })
    }
}

export const searchMovies = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`${baseUrl}?q=${word}&order_by=popularity&sort=asc&sfw`)
        console.log(res.data.data)
        dispatch({ type: types.SEARCH_MOVIES, payload: res.data.data, pageCount: res.data.pagination.last_visible_page, loading: false })
    }
}
export const pageMovies = (currentPage) => {
    return async (dispatch) => {
        const res = await axios.get(`${baseUrl}?page=${currentPage}`)
        dispatch({ type: types.PAGE_MOVIES, payload: res.data.data, loading: false })
    }
}
export const getMovieDetails = (movieId) => {
    return async (dispatch) => {
        // const res = await axios.get(`${baseLink}/movie/${movieId}?${path + APIKey}`)
        const res = await axios.get(`${baseUrl}/${movieId}`)
        console.log(res.data)
        dispatch({ type: types.MOVIE_DETAILS, payload: res.data.data, loading: false })
    }
}
export const setLoading = () => {
    return async (dispatch) => {
        dispatch({ type: types.LOADING, loading: true })
    }
}