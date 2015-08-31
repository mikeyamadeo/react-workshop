import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from '../app'
import SimplePokemonForm from '../app/views/SimplePokemonForm'
import WildPokemonView from '../app/views/WildPokemon'

var routes = (
  <Route handler={App} >
    <Route name='simpleForm' path='/form' handler={SimplePokemonForm} />
    <Route name='wildPokemon' path='/wild' handler={WildPokemonView} />
  </Route>
)

export default routes
