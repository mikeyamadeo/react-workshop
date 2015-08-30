import style from './style'
import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'
import StyledInput from 'atm.StyledInput'

let inputValue = ''

const AddPokemonForm = React.createClass({

  propTypes: {
    onUpdate: PropTypes.func
  },

  updateInput (e) {
    inputValue = e.target.value
  },

  onSubmit () {
    const { onUpdate } = this.props
    onUpdate(inputValue)
    inputValue = ''
  },

  render () {
    const { onSubmit } = this

    return (
      <Flexbox tag='form' { ...{ onSubmit} } styleName='root' direction='column' justify='center' align='center'>
        <div>
          <StyledInput onChange={this.updateInput} />
        </div>
        <div>
          <button type='submit' styleName='submit'>
            Submit New Pokemon!
          </button>
        </div>
      </Flexbox>
    )
  }
})

export default CSSModules(AddPokemonForm, style)
