import React from 'react'
import Router from 'react-router'
import configureStore from './redux.store'
import { Provider } from 'react-redux'
import routes from './config.routes'
// import routingUtils from './utils.routing'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
const store = configureStore()

/**
 * One gotcha is that the child of Provider must be a function.
 * This is to work around an issue with how context (undocumented
 * feature we have to rely on to pass Redux data to components below)
 * works in React 0.13. In React 0.14, you will be able to put your
 * view hierarchy in <Provider> without wrapping it into a function.
 */
const cb = function (Handler) {
  React.render(
    <div>
      <Provider store={store}>
        { () => <Handler /> }
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>,
    document.getElementById('app')
  )
}

const router = Router.create({
  routes
})

/**
 * Circumvent the circular dependency so routing functions
 * can be used outside of components.
 */
// routingUtils.set(router)

router.run(cb)
