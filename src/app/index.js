import './styles/main'
import React, { PropTypes } from 'react'
import { RouteHandler } from 'react-router'
import { connect } from 'react-redux'
import { initApp } from 'state/actions'
import Footer from './components/org.Footer'

const App = React.createClass({

  propTypes: {
    dispatch: PropTypes.func
  },

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(initApp())
  },

  render () {
    return (
      <div>
        <RouteHandler />
        <Footer />
      </div>
    )
  }

})

export default connect()(App)
