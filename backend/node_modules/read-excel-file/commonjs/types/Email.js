"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Email;
exports.isEmail = isEmail;
function Email() {}

var regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function isEmail(value) {
	return regexp.test(value);
}
//# sourceMappingURL=Email.js.map