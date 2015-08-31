import style from './style'
import React, { PropTypes } from 'react'
import { capitalize } from 'utils.rendering'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'

const List = React.createClass({

  propTypes: {
    items: PropTypes.array
  },

  render () {
    const { items } = this.props

    return (
      <Flexbox tag='ul' direction='column' align='center' styleName='container'>
        { items.map(_renderItem) }
      </Flexbox>
    )
  }

})

export default CSSModules(List, style)

function _renderItem (item) {
  return (
    <li styleName='item'>
      { capitalize(item.name) }
    </li>
  )
}
