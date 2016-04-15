import bindDynamicReducers from './bindDynamicReducers'

export default function inject() {
  return createStore => (reducer, initialState, enhancer) => {
    var store = createStore(reducer, initialState, enhancer)

    store.reducers = {}

    store.addReducer = function(name, reducer) {
      store.reducers[name] = reducer
      store.replaceReducer(bindDynamicReducers(store.reducers))
    }

    return store
  }
}
