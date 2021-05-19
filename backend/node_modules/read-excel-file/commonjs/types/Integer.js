"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Integer;
exports.isInteger = isInteger;
function Integer() {}

// https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
function isInteger(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}
//# sourceMappingURL=Integer.js.map