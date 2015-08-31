import style from './style'
import React from 'react'
import { Link } from 'react-router'
import Router from 'utils.routing'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'

const links = [
  {
    name: 'Wild Pokemon',
    to: 'wildPokemon'
  },
  {
    name: 'Simple Form',
    to: 'simpleForm'
  }
]

const Nav = React.createClass({

  renderNavItem (item, i) {
    return (
      <li key={i}>
        <Link to={item.to}>
          { item.name }
        </Link>
      </li>
    )
  },

  render () {

    return (
      <Flexbox tag='header' styleName='container' justify='center'>
        <Flexbox tag='ul' justify='space-between'>

          <li styleName='item' onClick={routeTo.bind(null, links[0].to)}>
              <a styleName='link'>{ links[0].name }</a>
          </li>

          <li styleName='item' onClick={routeTo.bind(null, links[1].to)}>
              <a styleName='link'>{ links[1].name }</a>
          </li>

        </Flexbox>
      </Flexbox>
    )
  }
})

export default CSSModules(Nav, style)

function routeTo (name) {
  console.log(name)
  Router.transitionTo(name)
}
