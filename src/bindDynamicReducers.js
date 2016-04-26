import { combineReducers } from 'redux'
import createReducer from './createReducer'

const defaultReducer = createReducer({}, {})

export default function bindDynamicReducers(dynamicReducers) {
  return combineReducers({
    _: defaultReducer,
    ...dynamicReducers
  })
}
