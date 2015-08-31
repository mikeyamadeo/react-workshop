import style from './style'
import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Flexbox from 'obj.Flexbox'
import StyledInput from 'atm.StyledInput'
import Btn from 'atm.Btn'

const AddPokemonForm = React.createClass({

  getInitialState () {
    return {
      inputValue: ''
    }
  },

  propTypes: {
    onUpdate: PropTypes.func
  },

  updateInput (inputValue) {
    this.setState({
      inputValue
    })
  },

  onChange (e) {
    this.updateInput(e.target.value)
  },

  onSubmit () {
    const { inputValue } = this.state
    const { onUpdate } = this.props
    this.updateInput('')
    onUpdate(inputValue)
  },

  render () {
    const { onSubmit, onChange } = this
    const { inputValue } = this.state

    return (
      <Flexbox tag='form' { ...{ onSubmit} } styleName='root' direction='column' justify='center' align='center'>
        <div>
          <StyledInput { ...{ onChange, value: inputValue } } />
        </div>
        <div styleName='submit'>
          <Btn copy='Submit a Pokemon!' type='submit' theme='main' />
        </div>
      </Flexbox>
    )
  }
})

export default CSSModules(AddPokemonForm, style)
