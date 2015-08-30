import style from './style'
import React from 'react'
import CSSModules from 'react-css-modules'

const StyledInput = React.createClass({
  render () {
    return (<input { ...this.props } styleName='input' />)
  }
})

export default CSSModules(StyledInput, style)
