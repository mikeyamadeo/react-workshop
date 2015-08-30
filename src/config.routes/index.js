import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from '../app'
import PokemonView from '../app/views/pokemon'
import WildPokemonView from '../app/views/WildPokemon'

var routes = (
  <Route handler={App} >
    <DefaultRoute handler={PokemonView} />
    <Route name='wildPokemon' path='/wild' handler={WildPokemonView} />
  </Route>
)

export default routes
