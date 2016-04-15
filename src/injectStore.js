import bindDynamicReducers from './bindDynamicReducers'

export default function injectStore(store) {
  store.addReducer = function(name, reducer) {
    store.reducers[name] = reducer
    store.replaceReducer(bindDynamicReducers(store.reducers))
  }

  return store
}
