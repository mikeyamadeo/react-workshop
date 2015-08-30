import { createAsyncActions as aa } from 'utils.redux'

import { CALL_API } from 'state/actions'

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
export function fetchWildPokemon (id) {
  return (dispatch, getState) => {
    dispatch(fetchSprite(id))
    return null
  }
}
