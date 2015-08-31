import { createReducer } from 'utils.redux'
import { REQUEST_SPRITE, REQUEST_SPRITE_SUCCESS } from './actions'

export const wildPokemon = createReducer({
  current: '',
  remaining: []
}, {

  [REQUEST_SPRITE_SUCCESS]: (state, { payload }) => {

    return {
      ...state,
      current: payload
    }
  }
})
