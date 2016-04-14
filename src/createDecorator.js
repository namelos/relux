import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createReducer from './createReducer'
import renameHandlers from './renameHandlers'
import renameActions from './renameActions'

export default function createDecorator(store) {
  return function decorator(reducerName, initialState, handlers) {
    var namespace = reducerName + '_'

    var renamedHandlers = renameHandlers(namespace, handlers)

    var actions = renameActions(namespace, renamedHandlers)

    store.addReducer(reducerName, createReducer(initialState, renamedHandlers))

    return connect(
      state => state,
      dispatch => bindActionCreators(actions, dispatch)
    )
  }
}