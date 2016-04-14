import { combineReducers } from 'redux'
import { createReducer } from './createReducer'

export function bindDynamicReducers(dynamicReducers) {
  return combineReducers(dynamicReducers)
}
