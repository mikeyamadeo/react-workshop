import { createReducer } from 'utils.redux'
import { REQUEST_POKEDEX, REQUEST_POKEDEX_SUCCESS } from './actions'

export const pokedex = createReducer({
  isFetching: false,
  pokemon: {}
}, {
  [REQUEST_POKEDEX]: (state, { action }) => {
    return {
      ...state,
      isFetching: true
    }
  },

  [REQUEST_POKEDEX_SUCCESS]: (state, { payload }) => {
    const { pokemon } = payload
    let pokemonMap = {}

    pokemon.forEach(p => {
      pokemonMap[p.name] = p
    })

    return {
      ...state,
      isFetching: false,
      pokemon: pokemonMap
    }
  }
})
