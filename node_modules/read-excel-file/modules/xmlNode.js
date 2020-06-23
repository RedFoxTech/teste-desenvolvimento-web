import xpath from 'xpath';
import XMLDOM from 'xmldom';

export default {
	createDocument: function createDocument(content) {
		return new XMLDOM.DOMParser().parseFromString(content);
	},
	select: function select(doc, node, path) {
		var namespaces = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		var select = xpath.useNamespaces(namespaces);
		return select(path, node || doc);
	}
};
//# sourceMappingURL=xmlNode.js.map