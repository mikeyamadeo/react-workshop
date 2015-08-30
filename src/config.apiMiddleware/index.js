import { configureApiMiddleware } from 'redux.middleware/api'
import { CALL_API } from 'app/state/actions'

const env = process.env.NODE_ENV || 'development'

export const API_ROOT = (env === 'production')
  ? 'http://pokeapi.co/'
  : 'http://pokeapi.co/'

export default configureApiMiddleware(CALL_API, API_ROOT)
