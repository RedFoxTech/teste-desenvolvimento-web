'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = readXlsxFileContents;

var _readXlsx = require('./readXlsx');

var _readXlsx2 = _interopRequireDefault(_readXlsx);

var _convertToJson = require('./convertToJson');

var _convertToJson2 = _interopRequireDefault(_convertToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readXlsxFileContents(entries, xml, options) {
	var result = (0, _readXlsx2.default)(entries, xml, _extends({}, options, { properties: options.schema || options.properties }));
	if (options.schema) {
		return (0, _convertToJson2.default)(result.data, options.schema, _extends({}, options, { properties: result.properties }));
	}
	return result;
}
//# sourceMappingURL=readXlsxFileContents.js.map