import style from './style'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import List from './components/mol.List'
import AddPokemonForm from './components/org.AddPokemonForm'
import { submitPokemon } from './state/actions'

const PokemonView = React.createClass({

  propTypes: {
    pkmn: PropTypes.array,
    addPokemon: PropTypes.func
  },

  onUpdate (newPokemon) {
    const { addPokemon } = this.props
    addPokemon({
      name: newPokemon
    })
  },

  render () {
    const { onUpdate } = this
    const { pkmn } = this.props

    return (
      <div styleName='container'>
        <AddPokemonForm onUpdate={onUpdate} />
        <List items={pkmn} />
      </div>
    )
  }

})

export default connect(
  selector, boundActions
)(CSSModules(PokemonView, style))

function selector (state) {

  const { pokemon } = state

  return {
    pkmn: pokemon
  }
}

function boundActions (dispatch) {
  return {
    addPokemon: name => dispatch(submitPokemon(name))
  }
}
