import { createReducer } from 'utils.redux'
import { REQUEST_SPRITE, REQUEST_SPRITE_SUCCESS } from './actions'

export const wildPokemon = createReducer({
  current: '',
  remaining: []
}, {

  [REQUEST_SPRITE_SUCCESS]: (state, { payload }) => {
    // const { pokemon } = payload
    // let pokemonMap = {}

    // pokemon.forEach(p => {
    //   pokemonMap[p.name] = p
    // })
    console.log(payload, 'from sprite reducer')
    return {
      ...state,
      current: payload
    }
  }
})
