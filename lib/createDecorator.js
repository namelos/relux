'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDecorator;

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _createReducer = require('./createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

var _renameHandlers = require('./renameHandlers');

var _renameHandlers2 = _interopRequireDefault(_renameHandlers);

var _renameActions = require('./renameActions');

var _renameActions2 = _interopRequireDefault(_renameActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDecorator(store) {
  return function decorator(reducerName, initialState, handlers) {
    var namespace = reducerName + '_';

    var renamedHandlers = (0, _renameHandlers2.default)(namespace, handlers);

    var actions = (0, _renameActions2.default)(namespace, renamedHandlers);

    store.addReducer(reducerName, (0, _createReducer2.default)(initialState, renamedHandlers));

    return (0, _reactRedux.connect)(function (state) {
      return state;
    }, function (dispatch) {
      return (0, _redux.bindActionCreators)(actions, dispatch);
    });
  };
}