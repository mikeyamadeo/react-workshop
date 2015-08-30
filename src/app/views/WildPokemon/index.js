import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWildPokemon } from './state/actions'

function fetchCycle (action, timeout) {
  setTimeout(() => {
    action(getRandomIntInclusive(1, 150))

    fetchCycle(action, getRandomIntInclusive(1000, 10000))
  }, timeout)
}

function getRandomIntInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const WildPokemonView = React.createClass({

  propTypes: {
    wildPokemon: PropTypes.object,
    fetchWildPokemon: PropTypes.func
  },

  componentDidMount () {
    const { fetchWildPokemon } = this.props
    // fetchCycle(fetchWildPokemon)
  },

  render () {
    const { wildPokemon } = this.props
    const { current } = wildPokemon
    let img
    return (
      <div>
        { current.name }
        { img = current ? <img src={`http://pokeapi.co${current.image}`} /> : null }
      </div>
    )
  }

})

export default connect(selector, boundActions)(WildPokemonView)

function selector (state) {

  const { wildPokemon } = state

  return {
    wildPokemon
  }
}

function boundActions (dispatch) {
  return {
    fetchWildPokemon: name => dispatch(fetchWildPokemon(name))
  }
}
