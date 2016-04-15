'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inject;

var _bindDynamicReducers = require('./bindDynamicReducers');

var _bindDynamicReducers2 = _interopRequireDefault(_bindDynamicReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inject() {
  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var store = createStore(reducer, initialState, enhancer);

      store.addReducer = function (name, reducer) {
        store.reducers[name] = reducer;
        store.replaceReducer((0, _bindDynamicReducers2.default)(store.reducers));
      };

      return store;
    };
  };
}