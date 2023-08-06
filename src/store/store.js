import { createStore, applyMiddleware } from 'redux'
import { moviesReducer } from '../reducers/moviesReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(thunk)))