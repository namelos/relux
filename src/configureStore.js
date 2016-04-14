import { createStore } from 'redux'
import bindDynamicReducers from './bindDynamicReducers'

export default function configureStore(config) {
  var store = createStore(bindDynamicReducers())
  store.reducers = {}

  store.addReducer = function(name, reducer) {
    store.reducers[name] = reducer
    store.replaceReducer(bindDynamicReducers(store.reducers))
  }

  return store
}