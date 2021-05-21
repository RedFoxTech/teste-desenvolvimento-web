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

var _convertMapToSchema = require('./convertMapToSchema');

var _convertMapToSchema2 = _interopRequireDefault(_convertMapToSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function readXlsxFileContents(entries, xml, _ref) {
	var schema = _ref.schema,
	    map = _ref.map,
	    options = _objectWithoutProperties(_ref, ['schema', 'map']);

	if (!schema && map) {
		schema = (0, _convertMapToSchema2.default)(map);
	}
	var result = (0, _readXlsx2.default)(entries, xml, _extends({}, options, { properties: schema || options.properties }));
	if (schema) {
		return (0, _convertToJson2.default)(result.data, schema, _extends({}, options, { properties: result.properties }));
	}
	return result;
}
//# sourceMappingURL=readXlsxFileContents.js.map