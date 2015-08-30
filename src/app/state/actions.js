import { createAsyncActions as aa } from 'utils.redux'

export const CALL_API = Symbol('Call API')

export const {
  REQUEST_POKEDEX,
  REQUEST_POKEDEX_SUCCESS,
  REQUEST_POKEDEX_FAILURE
} = aa('REQUEST_POKEDEX')

const fetchPokemon = {
  [CALL_API]: {
    types: [REQUEST_POKEDEX, REQUEST_POKEDEX_SUCCESS, REQUEST_POKEDEX_FAILURE],
    endpoint: `api/v1/pokedex/1`
  }
}

export const {
  REQUEST_SPRITE,
  REQUEST_SPRITE_SUCCESS,
  REQUEST_SPRITE_FAILURE
} = aa('REQUEST_SPRITE')

function fetchSprite (id) {
  return {
    [CALL_API]: {
      types: [REQUEST_SPRITE, REQUEST_SPRITE_SUCCESS, REQUEST_SPRITE_FAILURE],
      endpoint: `api/v1/sprite/${id}`
    }
  }
}

/**
 * prime data here. :)
 */
export function initApp () {
  return (dispatch) => {
    // dispatch(fetchPokemon)
    return null
  }
}
