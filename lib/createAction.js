"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAction;
function createAction(type) {
  return function action(payload) {
    return { type: type, payload: payload };
  };
}