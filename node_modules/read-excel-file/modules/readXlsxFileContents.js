var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import readXlsx from './readXlsx';
import convertToJson from './convertToJson';

export default function readXlsxFileContents(entries, xml, options) {
	var result = readXlsx(entries, xml, _extends({}, options, { properties: options.schema || options.properties }));
	if (options.schema) {
		return convertToJson(result.data, options.schema, _extends({}, options, { properties: result.properties }));
	}
	return result;
}
//# sourceMappingURL=readXlsxFileContents.js.map