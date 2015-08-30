import style from './style'
import React, { PropTypes } from 'react'
import { capitalize } from 'utils.rendering'
import CSSModules from 'react-css-modules'

const List = React.createClass({

  propTypes: {
    pokemon: PropTypes.array
  },

  render () {
    const { pokemon } = this.props

    return (
      <ul>
        { pokemon.map(_renderPokemon) }
      </ul>
    )
  }

})

export default CSSModules(List, style)

function _renderPokemon (pokemon) {
  return (
    <li styleName='item'>
      { capitalize(pokemon.name) }
    </li>
  )
}
