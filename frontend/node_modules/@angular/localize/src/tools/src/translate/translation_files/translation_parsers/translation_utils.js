(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_utils", ["require", "exports", "tslib", "@angular/compiler", "@angular/localize/src/tools/src/diagnostics", "@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_parse_error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addErrorsToBundle = exports.addParseError = exports.addParseDiagnostic = exports.isNamedElement = exports.canParseXml = exports.parseInnerRange = exports.getAttribute = exports.getAttrOrThrow = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var compiler_1 = require("@angular/compiler");
    var diagnostics_1 = require("@angular/localize/src/tools/src/diagnostics");
    var translation_parse_error_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_parse_error");
    function getAttrOrThrow(element, attrName) {
        var attrValue = getAttribute(element, attrName);
        if (attrValue === undefined) {
            throw new translation_parse_error_1.TranslationParseError(element.sourceSpan, "Missing required \"" + attrName + "\" attribute:");
        }
        return attrValue;
    }
    exports.getAttrOrThrow = getAttrOrThrow;
    function getAttribute(element, attrName) {
        var attr = element.attrs.find(function (a) { return a.name === attrName; });
        return attr !== undefined ? attr.value : undefined;
    }
    exports.getAttribute = getAttribute;
    /**
     * Parse the "contents" of an XML element.
     *
     * This would be equivalent to parsing the `innerHTML` string of an HTML document.
     *
     * @param element The element whose inner range we want to parse.
     * @returns a collection of XML `Node` objects and any errors that were parsed from the element's
     *     contents.
     */
    function parseInnerRange(element) {
        var xmlParser = new compiler_1.XmlParser();
        var xml = xmlParser.parse(element.sourceSpan.start.file.content, element.sourceSpan.start.file.url, { tokenizeExpansionForms: true, range: getInnerRange(element) });
        return xml;
    }
    exports.parseInnerRange = parseInnerRange;
    /**
     * Compute a `LexerRange` that contains all the children of the given `element`.
     * @param element The element whose inner range we want to compute.
     */
    function getInnerRange(element) {
        var start = element.startSourceSpan.end;
        var end = element.endSourceSpan.start;
        return {
            startPos: start.offset,
            startLine: start.line,
            startCol: start.col,
            endPos: end.offset,
        };
    }
    /**
     * Can this XML be parsed for translations, given the expected `rootNodeName` and expected root node
     * `attributes` that should appear in the file.
     *
     * @param filePath The path to the file being checked.
     * @param contents The contents of the file being checked.
     * @param rootNodeName The expected name of an XML root node that should exist.
     * @param attributes The attributes (and their values) that should appear on the root node.
     * @returns The `XmlTranslationParserHint` object for use by `TranslationParser.parse()` if the XML
     * document has the expected format.
     */
    function canParseXml(filePath, contents, rootNodeName, attributes) {
        var e_1, _a;
        var diagnostics = new diagnostics_1.Diagnostics();
        var xmlParser = new compiler_1.XmlParser();
        var xml = xmlParser.parse(contents, filePath);
        if (xml.rootNodes.length === 0 ||
            xml.errors.some(function (error) { return error.level === compiler_1.ParseErrorLevel.ERROR; })) {
            xml.errors.forEach(function (e) { return addParseError(diagnostics, e); });
            return { canParse: false, diagnostics: diagnostics };
        }
        var rootElements = xml.rootNodes.filter(isNamedElement(rootNodeName));
        var rootElement = rootElements[0];
        if (rootElement === undefined) {
            diagnostics.warn("The XML file does not contain a <" + rootNodeName + "> root node.");
            return { canParse: false, diagnostics: diagnostics };
        }
        var _loop_1 = function (attrKey) {
            var attr = rootElement.attrs.find(function (attr) { return attr.name === attrKey; });
            if (attr === undefined || attr.value !== attributes[attrKey]) {
                addParseDiagnostic(diagnostics, rootElement.sourceSpan, "The <" + rootNodeName + "> node does not have the required attribute: " + attrKey + "=\"" + attributes[attrKey] + "\".", compiler_1.ParseErrorLevel.WARNING);
                return { value: { canParse: false, diagnostics: diagnostics } };
            }
        };
        try {
            for (var _b = tslib_1.__values(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var attrKey = _c.value;
                var state_1 = _loop_1(attrKey);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (rootElements.length > 1) {
            xml.errors.push(new compiler_1.ParseError(xml.rootNodes[1].sourceSpan, 'Unexpected root node. XLIFF 1.2 files should only have a single <xliff> root node.', compiler_1.ParseErrorLevel.WARNING));
        }
        return { canParse: true, diagnostics: diagnostics, hint: { element: rootElement, errors: xml.errors } };
    }
    exports.canParseXml = canParseXml;
    /**
     * Create a predicate, which can be used by things like `Array.filter()`, that will match a named
     * XML Element from a collection of XML Nodes.
     *
     * @param name The expected name of the element to match.
     */
    function isNamedElement(name) {
        function predicate(node) {
            return node instanceof compiler_1.Element && node.name === name;
        }
        return predicate;
    }
    exports.isNamedElement = isNamedElement;
    /**
     * Add an XML parser related message to the given `diagnostics` object.
     */
    function addParseDiagnostic(diagnostics, sourceSpan, message, level) {
        addParseError(diagnostics, new compiler_1.ParseError(sourceSpan, message, level));
    }
    exports.addParseDiagnostic = addParseDiagnostic;
    /**
     * Copy the formatted error message from the given `parseError` object into the given `diagnostics`
     * object.
     */
    function addParseError(diagnostics, parseError) {
        if (parseError.level === compiler_1.ParseErrorLevel.ERROR) {
            diagnostics.error(parseError.toString());
        }
        else {
            diagnostics.warn(parseError.toString());
        }
    }
    exports.addParseError = addParseError;
    /**
     * Add the provided `errors` to the `bundle` diagnostics.
     */
    function addErrorsToBundle(bundle, errors) {
        var e_2, _a;
        try {
            for (var errors_1 = tslib_1.__values(errors), errors_1_1 = errors_1.next(); !errors_1_1.done; errors_1_1 = errors_1.next()) {
                var error = errors_1_1.value;
                addParseError(bundle.diagnostics, error);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (errors_1_1 && !errors_1_1.done && (_a = errors_1.return)) _a.call(errors_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    exports.addErrorsToBundle = addErrorsToBundle;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25fdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL3RyYW5zbGF0ZS90cmFuc2xhdGlvbl9maWxlcy90cmFuc2xhdGlvbl9wYXJzZXJzL3RyYW5zbGF0aW9uX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCw4Q0FBc0k7SUFFdEksMkVBQWlEO0lBRWpELG1KQUFnRTtJQUdoRSxTQUFnQixjQUFjLENBQUMsT0FBZ0IsRUFBRSxRQUFnQjtRQUMvRCxJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixNQUFNLElBQUksK0NBQXFCLENBQzNCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsd0JBQXFCLFFBQVEsa0JBQWMsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQVBELHdDQU9DO0lBRUQsU0FBZ0IsWUFBWSxDQUFDLE9BQWdCLEVBQUUsUUFBZ0I7UUFDN0QsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQzFELE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFIRCxvQ0FHQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsU0FBZ0IsZUFBZSxDQUFDLE9BQWdCO1FBQzlDLElBQU0sU0FBUyxHQUFHLElBQUksb0JBQVMsRUFBRSxDQUFDO1FBQ2xDLElB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LENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQU5ELHNDQU1DO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxNQUErQixFQUFFLE1BQW9COzs7WUFDckYsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBdkIsSUFBTSxLQUFLLG1CQUFBO2dCQUNkLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzFDOzs7Ozs7Ozs7SUFDSCxDQUFDO0lBSkQsOENBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7RWxlbWVudCwgTGV4ZXJSYW5nZSwgTm9kZSwgUGFyc2VFcnJvciwgUGFyc2VFcnJvckxldmVsLCBQYXJzZVNvdXJjZVNwYW4sIFBhcnNlVHJlZVJlc3VsdCwgWG1sUGFyc2VyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbmltcG9ydCB7RGlhZ25vc3RpY3N9IGZyb20gJy4uLy4uLy4uL2RpYWdub3N0aWNzJztcblxuaW1wb3J0IHtUcmFuc2xhdGlvblBhcnNlRXJyb3J9IGZyb20gJy4vdHJhbnNsYXRpb25fcGFyc2VfZXJyb3InO1xuaW1wb3J0IHtQYXJzZUFuYWx5c2lzLCBQYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZX0gZnJvbSAnLi90cmFuc2xhdGlvbl9wYXJzZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0ck9yVGhyb3coZWxlbWVudDogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGF0dHJWYWx1ZSA9IGdldEF0dHJpYnV0ZShlbGVtZW50LCBhdHRyTmFtZSk7XG4gIGlmIChhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBUcmFuc2xhdGlvblBhcnNlRXJyb3IoXG4gICAgICAgIGVsZW1lbnQuc291cmNlU3BhbiwgYE1pc3NpbmcgcmVxdWlyZWQgXCIke2F0dHJOYW1lfVwiIGF0dHJpYnV0ZTpgKTtcbiAgfVxuICByZXR1cm4gYXR0clZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsZW1lbnQ6IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgY29uc3QgYXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZChhID0+IGEubmFtZSA9PT0gYXR0ck5hbWUpO1xuICByZXR1cm4gYXR0ciAhPT0gdW5kZWZpbmVkID8gYXR0ci52YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgXCJjb250ZW50c1wiIG9mIGFuIFhNTCBlbGVtZW50LlxuICpcbiAqIFRoaXMgd291bGQgYmUgZXF1aXZhbGVudCB0byBwYXJzaW5nIHRoZSBgaW5uZXJIVE1MYCBzdHJpbmcgb2YgYW4gSFRNTCBkb2N1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB3aG9zZSBpbm5lciByYW5nZSB3ZSB3YW50IHRvIHBhcnNlLlxuICogQHJldHVybnMgYSBjb2xsZWN0aW9uIG9mIFhNTCBgTm9kZWAgb2JqZWN0cyBhbmQgYW55IGVycm9ycyB0aGF0IHdlcmUgcGFyc2VkIGZyb20gdGhlIGVsZW1lbnQnc1xuICogICAgIGNvbnRlbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbm5lclJhbmdlKGVsZW1lbnQ6IEVsZW1lbnQpOiBQYXJzZVRyZWVSZXN1bHQge1xuICBjb25zdCB4bWxQYXJzZXIgPSBuZXcgWG1sUGFyc2VyKCk7XG4gIGNvbnN0IHhtbCA9IHhtbFBhcnNlci5wYXJzZShcbiAgICAgIGVsZW1lbnQuc291cmNlU3Bhbi5zdGFydC5maWxlLmNvbnRlbnQsIGVsZW1lbnQuc291cmNlU3Bhbi5zdGFydC5maWxlLnVybCxcbiAgICAgIHt0b2tlbml6ZUV4cGFuc2lvbkZvcm1zOiB0cnVlLCByYW5nZTogZ2V0SW5uZXJSYW5nZShlbGVtZW50KX0pO1xuICByZXR1cm4geG1sO1xufVxuXG4vKipcbiAqIENvbXB1dGUgYSBgTGV4ZXJSYW5nZWAgdGhhdCBjb250YWlucyBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSBnaXZlbiBgZWxlbWVudGAuXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB3aG9zZSBpbm5lciByYW5nZSB3ZSB3YW50IHRvIGNvbXB1dGUuXG4gKi9cbmZ1bmN0aW9uIGdldElubmVyUmFuZ2UoZWxlbWVudDogRWxlbWVudCk6IExleGVyUmFuZ2Uge1xuICBjb25zdCBzdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuLmVuZDtcbiAgY29uc3QgZW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydDtcbiAgcmV0dXJuIHtcbiAgICBzdGFydFBvczogc3RhcnQub2Zmc2V0LFxuICAgIHN0YXJ0TGluZTogc3RhcnQubGluZSxcbiAgICBzdGFydENvbDogc3RhcnQuY29sLFxuICAgIGVuZFBvczogZW5kLm9mZnNldCxcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIFwiaGludFwiIG9iamVjdCBpcyB1c2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gZnJvbSBgY2FuUGFyc2UoKWAgdG8gYHBhcnNlKClgIGZvclxuICogYFRyYW5zbGF0aW9uUGFyc2VyYHMgdGhhdCBleHBlY3QgWE1MIGNvbnRlbnRzLlxuICpcbiAqIFRoaXMgc2F2ZXMgdGhlIGBwYXJzZSgpYCBtZXRob2QgZnJvbSBoYXZpbmcgdG8gcmUtcGFyc2UgdGhlIFhNTC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBYbWxUcmFuc2xhdGlvblBhcnNlckhpbnQge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBlcnJvcnM6IFBhcnNlRXJyb3JbXTtcbn1cblxuLyoqXG4gKiBDYW4gdGhpcyBYTUwgYmUgcGFyc2VkIGZvciB0cmFuc2xhdGlvbnMsIGdpdmVuIHRoZSBleHBlY3RlZCBgcm9vdE5vZGVOYW1lYCBhbmQgZXhwZWN0ZWQgcm9vdCBub2RlXG4gKiBgYXR0cmlidXRlc2AgdGhhdCBzaG91bGQgYXBwZWFyIGluIHRoZSBmaWxlLlxuICpcbiAqIEBwYXJhbSBmaWxlUGF0aCBUaGUgcGF0aCB0byB0aGUgZmlsZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIGNvbnRlbnRzIFRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHJvb3ROb2RlTmFtZSBUaGUgZXhwZWN0ZWQgbmFtZSBvZiBhbiBYTUwgcm9vdCBub2RlIHRoYXQgc2hvdWxkIGV4aXN0LlxuICogQHBhcmFtIGF0dHJpYnV0ZXMgVGhlIGF0dHJpYnV0ZXMgKGFuZCB0aGVpciB2YWx1ZXMpIHRoYXQgc2hvdWxkIGFwcGVhciBvbiB0aGUgcm9vdCBub2RlLlxuICogQHJldHVybnMgVGhlIGBYbWxUcmFuc2xhdGlvblBhcnNlckhpbnRgIG9iamVjdCBmb3IgdXNlIGJ5IGBUcmFuc2xhdGlvblBhcnNlci5wYXJzZSgpYCBpZiB0aGUgWE1MXG4gKiBkb2N1bWVudCBoYXMgdGhlIGV4cGVjdGVkIGZvcm1hdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhblBhcnNlWG1sKFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcsIHJvb3ROb2RlTmFtZTogc3RyaW5nLFxuICAgIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBQYXJzZUFuYWx5c2lzPFhtbFRyYW5zbGF0aW9uUGFyc2VySGludD4ge1xuICBjb25zdCBkaWFnbm9zdGljcyA9IG5ldyBEaWFnbm9zdGljcygpO1xuICBjb25zdCB4bWxQYXJzZXIgPSBuZXcgWG1sUGFyc2VyKCk7XG4gIGNvbnN0IHhtbCA9IHhtbFBhcnNlci5wYXJzZShjb250ZW50cywgZmlsZVBhdGgpO1xuXG4gIGlmICh4bWwucm9vdE5vZGVzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgeG1sLmVycm9ycy5zb21lKGVycm9yID0+IGVycm9yLmxldmVsID09PSBQYXJzZUVycm9yTGV2ZWwuRVJST1IpKSB7XG4gICAgeG1sLmVycm9ycy5mb3JFYWNoKGUgPT4gYWRkUGFyc2VFcnJvcihkaWFnbm9zdGljcywgZSkpO1xuICAgIHJldHVybiB7Y2FuUGFyc2U6IGZhbHNlLCBkaWFnbm9zdGljc307XG4gIH1cblxuICBjb25zdCByb290RWxlbWVudHMgPSB4bWwucm9vdE5vZGVzLmZpbHRlcihpc05hbWVkRWxlbWVudChyb290Tm9kZU5hbWUpKTtcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSByb290RWxlbWVudHNbMF07XG4gIGlmIChyb290RWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGlhZ25vc3RpY3Mud2FybihgVGhlIFhNTCBmaWxlIGRvZXMgbm90IGNvbnRhaW4gYSA8JHtyb290Tm9kZU5hbWV9PiByb290IG5vZGUuYCk7XG4gICAgcmV0dXJuIHtjYW5QYXJzZTogZmFsc2UsIGRpYWdub3N0aWNzfTtcbiAgfVxuXG4gIGZvciAoY29uc3QgYXR0cktleSBvZiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKSkge1xuICAgIGNvbnN0IGF0dHIgPSByb290RWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBhdHRyS2V5KTtcbiAgICBpZiAoYXR0ciA9PT0gdW5kZWZpbmVkIHx8IGF0dHIudmFsdWUgIT09IGF0dHJpYnV0ZXNbYXR0cktleV0pIHtcbiAgICAgIGFkZFBhcnNlRGlhZ25vc3RpYyhcbiAgICAgICAgICBkaWFnbm9zdGljcywgcm9vdEVsZW1lbnQuc291cmNlU3BhbixcbiAgICAgICAgICBgVGhlIDwke3Jvb3ROb2RlTmFtZX0+IG5vZGUgZG9lcyBub3QgaGF2ZSB0aGUgcmVxdWlyZWQgYXR0cmlidXRlOiAke2F0dHJLZXl9PVwiJHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlc1thdHRyS2V5XX1cIi5gLFxuICAgICAgICAgIFBhcnNlRXJyb3JMZXZlbC5XQVJOSU5HKTtcbiAgICAgIHJldHVybiB7Y2FuUGFyc2U6IGZhbHNlLCBkaWFnbm9zdGljc307XG4gICAgfVxuICB9XG5cbiAgaWYgKHJvb3RFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgeG1sLmVycm9ycy5wdXNoKG5ldyBQYXJzZUVycm9yKFxuICAgICAgICB4bWwucm9vdE5vZGVzWzFdLnNvdXJjZVNwYW4sXG4gICAgICAgICdVbmV4cGVjdGVkIHJvb3Qgbm9kZS4gWExJRkYgMS4yIGZpbGVzIHNob3VsZCBvbmx5IGhhdmUgYSBzaW5nbGUgPHhsaWZmPiByb290IG5vZGUuJyxcbiAgICAgICAgUGFyc2VFcnJvckxldmVsLldBUk5JTkcpKTtcbiAgfVxuXG4gIHJldHVybiB7Y2FuUGFyc2U6IHRydWUsIGRpYWdub3N0aWNzLCBoaW50OiB7ZWxlbWVudDogcm9vdEVsZW1lbnQsIGVycm9yczogeG1sLmVycm9yc319O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHByZWRpY2F0ZSwgd2hpY2ggY2FuIGJlIHVzZWQgYnkgdGhpbmdzIGxpa2UgYEFycmF5LmZpbHRlcigpYCwgdGhhdCB3aWxsIG1hdGNoIGEgbmFtZWRcbiAqIFhNTCBFbGVtZW50IGZyb20gYSBjb2xsZWN0aW9uIG9mIFhNTCBOb2Rlcy5cbiAqXG4gKiBAcGFyYW0gbmFtZSBUaGUgZXhwZWN0ZWQgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBtYXRjaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmFtZWRFbGVtZW50KG5hbWU6IHN0cmluZyk6IChub2RlOiBOb2RlKSA9PiBub2RlIGlzIEVsZW1lbnQge1xuICBmdW5jdGlvbiBwcmVkaWNhdGUobm9kZTogTm9kZSk6IG5vZGUgaXMgRWxlbWVudCB7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIG5vZGUubmFtZSA9PT0gbmFtZTtcbiAgfVxuICByZXR1cm4gcHJlZGljYXRlO1xufVxuXG4vKipcbiAqIEFkZCBhbiBYTUwgcGFyc2VyIHJlbGF0ZWQgbWVzc2FnZSB0byB0aGUgZ2l2ZW4gYGRpYWdub3N0aWNzYCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJzZURpYWdub3N0aWMoXG4gICAgZGlhZ25vc3RpY3M6IERpYWdub3N0aWNzLCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBsZXZlbDogUGFyc2VFcnJvckxldmVsKTogdm9pZCB7XG4gIGFkZFBhcnNlRXJyb3IoZGlhZ25vc3RpY3MsIG5ldyBQYXJzZUVycm9yKHNvdXJjZVNwYW4sIG1lc3NhZ2UsIGxldmVsKSk7XG59XG5cbi8qKlxuICogQ29weSB0aGUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgZ2l2ZW4gYHBhcnNlRXJyb3JgIG9iamVjdCBpbnRvIHRoZSBnaXZlbiBgZGlhZ25vc3RpY3NgXG4gKiBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJzZUVycm9yKGRpYWdub3N0aWNzOiBEaWFnbm9zdGljcywgcGFyc2VFcnJvcjogUGFyc2VFcnJvcik6IHZvaWQge1xuICBpZiAocGFyc2VFcnJvci5sZXZlbCA9PT0gUGFyc2VFcnJvckxldmVsLkVSUk9SKSB7XG4gICAgZGlhZ25vc3RpY3MuZXJyb3IocGFyc2VFcnJvci50b1N0cmluZygpKTtcbiAgfSBlbHNlIHtcbiAgICBkaWFnbm9zdGljcy53YXJuKHBhcnNlRXJyb3IudG9TdHJpbmcoKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgdGhlIHByb3ZpZGVkIGBlcnJvcnNgIHRvIHRoZSBgYnVuZGxlYCBkaWFnbm9zdGljcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEVycm9yc1RvQnVuZGxlKGJ1bmRsZTogUGFyc2VkVHJhbnNsYXRpb25CdW5kbGUsIGVycm9yczogUGFyc2VFcnJvcltdKTogdm9pZCB7XG4gIGZvciAoY29uc3QgZXJyb3Igb2YgZXJyb3JzKSB7XG4gICAgYWRkUGFyc2VFcnJvcihidW5kbGUuZGlhZ25vc3RpY3MsIGVycm9yKTtcbiAgfVxufVxuIl19