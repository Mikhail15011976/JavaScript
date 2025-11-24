"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canIterate = canIterate;
function canIterate(obj) {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}