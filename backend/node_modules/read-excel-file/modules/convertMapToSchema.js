var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export default function convertMapToSchema(map) {
	var schema = {};
	for (var _iterator = Object.keys(map), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var key = _ref;

		var prop = map[key];
		var type = void 0;
		if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
			prop = Object.keys(map[key])[0];
			type = convertMapToSchema(map[key][prop]);
		}
		schema[key] = {
			prop: prop
		};
		if (type) {
			schema[key].type = type;
		}
	}
	return schema;
}
//# sourceMappingURL=convertMapToSchema.js.map