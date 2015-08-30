import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { devTools } from 'redux-devtools'
import apiMiddleware from 'config.apiMiddleware'
import * as reducers from 'redux.reducers'

const reducer = combineReducers(reducers)
const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    apiMiddleware
  ),
  devTools(),
  createStore
)

/**
 * Creates a preconfigured store.
 */
export default function configureStore (initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
