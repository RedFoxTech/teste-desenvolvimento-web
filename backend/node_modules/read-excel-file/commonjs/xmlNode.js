'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _xpath = require('xpath');

var _xpath2 = _interopRequireDefault(_xpath);

var _xmldom = require('xmldom');

var _xmldom2 = _interopRequireDefault(_xmldom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	createDocument: function createDocument(content) {
		return new _xmldom2.default.DOMParser().parseFromString(content);
	},
	select: function select(doc, node, path) {
		var namespaces = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		var select = _xpath2.default.useNamespaces(namespaces);
		return select(path, node || doc);
	}
};
//# sourceMappingURL=xmlNode.js.map