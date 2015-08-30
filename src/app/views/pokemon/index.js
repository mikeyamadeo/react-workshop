import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import Showcase from './components/org.Showcase'
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
    const { pkmn } = this.props

    return (
      <div>
        <AddPokemonForm onUpdate={this.onUpdate} />
        <List pokemon={pkmn} />
      </div>
    )
  }

})

export default connect(selector, boundActions)(PokemonView)

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
