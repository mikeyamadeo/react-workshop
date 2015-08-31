let _router = null

export default {
  set (router) { _router = router },

  get () { return _router },

  getCurrent,

  transitionTo,

  replaceWith

}

function transitionTo (...config) {
  _router.transitionTo.apply(null, config)
}

function replaceWith (...config) {
  _router.replaceWith.apply(null, config)
}

function getCurrent () {
  return {
    path: _router.getCurrentPath(),
    pathname: _router.getCurrentPathname(),
    params: _router.getCurrentParams(),
    query: _router.getCurrentQuery(),
    routes: _router.getCurrentRoutes()
  }
}
