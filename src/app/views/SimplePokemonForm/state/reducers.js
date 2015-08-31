import { POKEMON_SUBMITTED } from './actions'

export function pokemon (state = [
  {
    name: 'Pikachu'
  },
  {
    name: 'Charmander'
  },
  {
    name: 'Bulbasaur'
  },
  {
    name: 'Squirtle'
  }
], action) {

  const { type, payload } = action

  switch (type) {
    case POKEMON_SUBMITTED:
      const { newPokemon } = payload
      return state.concat(newPokemon)
    default:
      return state
  }

  return state
}
