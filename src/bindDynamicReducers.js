import { combineReducers } from 'redux'
import createReducer from './createReducer'

export default function bindDynamicReducers(dynamicReducers) {
  return combineReducers({
    _: createReducer({}, {}),
    ...dynamicReducers
  })
}
