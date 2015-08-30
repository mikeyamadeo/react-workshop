import style from './style'
import React from 'react'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'
import Charmander from 'org.Charmander'

const Nav = React.createClass({

  render () {

    return (
      <Flexbox tag='header' styleName='root' justify='center'>
        <Charmander />
      </Flexbox>
    )
  }
})

export default CSSModules(Nav, style)
