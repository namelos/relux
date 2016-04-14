'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _bindDynamicReducers = require('./bindDynamicReducers');

var _bindDynamicReducers2 = _interopRequireDefault(_bindDynamicReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(config) {
  var store = (0, _redux.createStore)((0, _bindDynamicReducers2.default)());
  store.reducers = {};

  store.addReducer = function (name, reducer) {
    store.reducers[name] = reducer;
    store.replaceReducer((0, _bindDynamicReducers2.default)(store.reducers));
  };

  return store;
}