import style from './style'
import React, { PropTypes } from 'react'
import cn from 'classnames'
import CSSModules from 'react-css-modules'

const Btn = React.createClass({

  propTypes: {
    copy: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.oneOf(['main']),
    children: PropTypes.any
  },

  render () {

    const { copy, type, onClick, theme, children } = this.props

    return (
      <button styleName={cn({
        [theme]: !!theme
      })} { ...{ type, onClick } }>
        { copy || children }
      </button>
    )
  }
})

export default CSSModules(Btn, style, {
  allowMultiple: true,
  errorWhenNotFound: false
})
