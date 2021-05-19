var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import readXlsx from './readXlsx';
import convertToJson from './convertToJson';
import convertMapToSchema from './convertMapToSchema';

export default function readXlsxFileContents(entries, xml, _ref) {
	var schema = _ref.schema,
	    map = _ref.map,
	    options = _objectWithoutProperties(_ref, ['schema', 'map']);

	if (!schema && map) {
		schema = convertMapToSchema(map);
	}
	var result = readXlsx(entries, xml, _extends({}, options, { properties: schema || options.properties }));
	if (schema) {
		return convertToJson(result.data, schema, _extends({}, options, { properties: result.properties }));
	}
	return result;
}
//# sourceMappingURL=readXlsxFileContents.js.map