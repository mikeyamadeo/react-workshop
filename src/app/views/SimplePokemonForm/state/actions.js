export const POKEMON_SUBMITTED = 'POKEMON_SUBMITTED'

export function submitPokemon (p) {
  return {
    type: POKEMON_SUBMITTED,
    payload: {
      newPokemon: p
    }
  }
}
