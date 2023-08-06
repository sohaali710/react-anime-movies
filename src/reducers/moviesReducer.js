import { types } from "../types/types"

const initialVal = { movies: [], movieDetails: {}, pageCount: 0, loading: false }

export const moviesReducer = (state = initialVal, action) => {
    switch (action.type) {
        case types.ALL_MOVIES:
            return { ...state, movies: action.payload, pageCount: action.pageCount, loading: false }
        case types.SEARCH_MOVIES:
            return { ...state, movies: action.payload, pageCount: action.pageCount, loading: false }
        case types.PAGE_MOVIES:
            return { ...state, movies: action.payload, loading: false }
        case types.MOVIE_DETAILS:
            return { ...state, movieDetails: action.payload, loading: false }
        case types.LOADING:
            return { ...state, loading: true }
        default:
            return state;
    }
}