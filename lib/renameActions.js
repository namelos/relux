'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renameActions;

var _createAction = require('./createAction');

var _createAction2 = _interopRequireDefault(_createAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renameActions(namespace, namedHandlers) {
  var actionsTypes = Object.keys(namedHandlers);

  var actions = {};

  actionsTypes.forEach(function (actionType) {
    var action = (0, _createAction2.default)(actionType);

    if (actionType.startsWith(namespace)) {
      actions[actionType.replace(namespace, '')] = action;
    }

    actions[actionType] = action;
  });

  return actions;
}