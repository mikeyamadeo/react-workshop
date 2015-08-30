import style from './style'
import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

const Charmander = React.createClass({

  propTypes: {
    size: PropTypes.number
  },

  render () {
    return (
      <div styleName='charmander'>
        <div styleName='tail stem'></div>
        <div styleName='tail end'></div>

        <div styleName='flame yellow'></div>
        <div styleName='flame red'></div>

        <div styleName='body left'></div>
        <div styleName='body right'></div>
        <div styleName='belly right'></div>
        <div styleName='belly left'></div>
        <div styleName='arm left'></div>
        <div styleName='arm right'></div>
        <div styleName='leg left'></div>
        <div styleName='leg right'></div>
        <div styleName='foot left'></div>
        <div styleName='foot right'></div>

        <div styleName='mouth'></div>
        <div styleName='tongue'></div>

        <div styleName='head left'></div>
        <div styleName='head right'></div>
        <div styleName='eye left'></div>
        <div styleName='eye right'></div>
        <div styleName='pupil right'></div>
        <div styleName='pupil left'></div>
        <div styleName='nostril left'></div>
        <div styleName='nostril right'></div>
      </div>
    )
  }

})

/**
 * 1. Tell CSSModules to allow multiple classes to be passed to styleName
 */
export default CSSModules(
  Charmander,
  style,
  { allowMultiple: true }
)
