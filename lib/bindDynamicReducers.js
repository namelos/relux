'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = bindDynamicReducers;

var _redux = require('redux');

var _createReducer = require('./createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bindDynamicReducers(dynamicReducers) {
  return (0, _redux.combineReducers)(_extends({
    _: (0, _createReducer2.default)({}, {})
  }, dynamicReducers));
}