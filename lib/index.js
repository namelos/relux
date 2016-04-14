'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configureStore = require('./configureStore');

Object.defineProperty(exports, 'createStore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_configureStore).default;
  }
});

var _createDecorator = require('./createDecorator');

Object.defineProperty(exports, 'createRelux', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createDecorator).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }