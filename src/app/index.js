// import './styles/main'
import React, { PropTypes } from 'react'
import { RouteHandler } from 'react-router'
// import { connect } from 'react-redux'
// import { initApp } from './state/actions'

const App = React.createClass({

  propTypes: {
    dispatch: PropTypes.func
  },

  componentDidMount () {
    const { dispatch } = this.props
    // dispatch(initApp())
  },

  render () {
    return (
      <div>
        Hello World!
      </div>
    )
  }

})

        // <RouteHandler />


// export default connect()(App)
export default App
