(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/source_file_utils", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/localize", "@babel/types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeLocationPosition = exports.getLocation = exports.buildCodeFrameError = exports.isBabelParseError = exports.BabelParseError = exports.translate = exports.isArrayOfExpressions = exports.isStringLiteralArray = exports.unwrapLazyLoadHelperCall = exports.unwrapStringLiteralArray = exports.wrapInParensIfNecessary = exports.unwrapExpressionsFromTemplateLiteral = exports.unwrapMessagePartsFromTemplateLiteral = exports.unwrapSubstitutionsFromLocalizeCall = exports.unwrapMessagePartsFromLocalizeCall = exports.buildLocalizeReplacement = exports.isGlobalIdentifier = exports.isNamedIdentifier = exports.isLocalize = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var localize_1 = require("@angular/localize");
    var t = require("@babel/types");
    /**
     * Is the given `expression` the global `$localize` identifier?
     *
     * @param expression The expression to check.
     * @param localizeName The configured name of `$localize`.
     */
    function isLocalize(expression, localizeName) {
        return isNamedIdentifier(expression, localizeName) && isGlobalIdentifier(expression);
    }
    exports.isLocalize = isLocalize;
    /**
     * Is the given `expression` an identifier with the correct `name`?
     *
     * @param expression The expression to check.
     * @param name The name of the identifier we are looking for.
     */
    function isNamedIdentifier(expression, name) {
        return expression.isIdentifier() && expression.node.name === name;
    }
    exports.isNamedIdentifier = isNamedIdentifier;
    /**
     * Is the given `identifier` declared globally.
     *
     * @param identifier The identifier to check.
     * @publicApi used by CLI
     */
    function isGlobalIdentifier(identifier) {
        return !identifier.scope || !identifier.scope.hasBinding(identifier.node.name);
    }
    exports.isGlobalIdentifier = isGlobalIdentifier;
    /**
     * Build a translated expression to replace the call to `$localize`.
     * @param messageParts The static parts of the message.
     * @param substitutions The expressions to substitute into the message.
     * @publicApi used by CLI
     */
    function buildLocalizeReplacement(messageParts, substitutions) {
        var mappedString = t.stringLiteral(messageParts[0]);
        for (var i = 1; i < messageParts.length; i++) {
            mappedString =
                t.binaryExpression('+', mappedString, wrapInParensIfNecessary(substitutions[i - 1]));
            mappedString = t.binaryExpression('+', mappedString, t.stringLiteral(messageParts[i]));
        }
        return mappedString;
    }
    exports.buildLocalizeReplacement = buildLocalizeReplacement;
    /**
     * Extract the message parts from the given `call` (to `$localize`).
     *
     * The message parts will either by the first argument to the `call` or it will be wrapped in call
     * to a helper function like `__makeTemplateObject`.
     *
     * @param call The AST node of the call to process.
     * @param fs The file system to use when computing source-map paths. If not provided then it uses
     *     the "current" FileSystem.
     * @publicApi used by CLI
     */
    function unwrapMessagePartsFromLocalizeCall(call, fs) {
        if (fs === void 0) { fs = file_system_1.getFileSystem(); }
        var cooked = call.get('arguments')[0];
        if (cooked === undefined) {
            throw new BabelParseError(call.node, '`$localize` called without any arguments.');
        }
        if (!cooked.isExpression()) {
            throw new BabelParseError(cooked.node, 'Unexpected argument to `$localize` (expected an array).');
        }
        // If there is no call to `__makeTemplateObject(...)`, then `raw` must be the same as `cooked`.
        var raw = cooked;
        // Check for a memoized form: `x || x = ...`
        if (cooked.isLogicalExpression() && cooked.node.operator === '||' &&
            cooked.get('left').isIdentifier()) {
            var right = cooked.get('right');
            if (right.isAssignmentExpression()) {
                cooked = right.get('right');
                if (!cooked.isExpression()) {
                    throw new BabelParseError(cooked.node, 'Unexpected "makeTemplateObject()" function (expected an expression).');
                }
            }
            else if (right.isSequenceExpression()) {
                var expressions = right.get('expressions');
                if (expressions.length > 2) {
                    // This is a minified sequence expression, where the first two expressions in the sequence
                    // are assignments of the cooked and raw arrays respectively.
                    var _a = tslib_1.__read(expressions, 2), first = _a[0], second = _a[1];
                    if (first.isAssignmentExpression()) {
                        cooked = first.get('right');
                        if (!cooked.isExpression()) {
                            throw new BabelParseError(first.node, 'Unexpected cooked value, expected an expression.');
                        }
                        if (second.isAssignmentExpression()) {
                            raw = second.get('right');
                            if (!raw.isExpression()) {
                                throw new BabelParseError(second.node, 'Unexpected raw value, expected an expression.');
                            }
                        }
                        else {
                            // If the second expression is not an assignment then it is probably code to take a copy
                            // of the cooked array. For example: `raw || (raw=cooked.slice(0))`.
                            raw = cooked;
                        }
                    }
                }
            }
        }
        // Check for `__makeTemplateObject(cooked, raw)` or `__templateObject()` calls.
        if (cooked.isCallExpression()) {
            var call_1 = cooked;
            if (call_1.get('arguments').length === 0) {
                // No arguments so perhaps it is a `__templateObject()` call.
                // Unwrap this to get the `_taggedTemplateLiteral(cooked, raw)` call.
                call_1 = unwrapLazyLoadHelperCall(call_1);
            }
            cooked = call_1.get('arguments')[0];
            if (!cooked.isExpression()) {
                throw new BabelParseError(cooked.node, 'Unexpected `cooked` argument to the "makeTemplateObject()" function (expected an expression).');
            }
            var arg2 = call_1.get('arguments')[1];
            if (arg2 && !arg2.isExpression()) {
                throw new BabelParseError(arg2.node, 'Unexpected `raw` argument to the "makeTemplateObject()" function (expected an expression).');
            }
            // If there is no second argument then assume that raw and cooked are the same
            raw = arg2 !== undefined ? arg2 : cooked;
        }
        var _b = tslib_1.__read(unwrapStringLiteralArray(cooked, fs), 1), cookedStrings = _b[0];
        var _c = tslib_1.__read(unwrapStringLiteralArray(raw, fs), 2), rawStrings = _c[0], rawLocations = _c[1];
        return [localize_1.ɵmakeTemplateObject(cookedStrings, rawStrings), rawLocations];
    }
    exports.unwrapMessagePartsFromLocalizeCall = unwrapMessagePartsFromLocalizeCall;
    /**
     * Parse the localize call expression to extract the arguments that hold the substition expressions.
     *
     * @param call The AST node of the call to process.
     * @param fs The file system to use when computing source-map paths. If not provided then it uses
     *     the "current" FileSystem.
     * @publicApi used by CLI
     */
    function unwrapSubstitutionsFromLocalizeCall(call, fs) {
        if (fs === void 0) { fs = file_system_1.getFileSystem(); }
        var expressions = call.get('arguments').splice(1);
        if (!isArrayOfExpressions(expressions)) {
            var badExpression = expressions.find(function (expression) { return !expression.isExpression(); });
            throw new BabelParseError(badExpression.node, 'Invalid substitutions for `$localize` (expected all substitution arguments to be expressions).');
        }
        return [
            expressions.map(function (path) { return path.node; }), expressions.map(function (expression) { return getLocation(fs, expression); })
        ];
    }
    exports.unwrapSubstitutionsFromLocalizeCall = unwrapSubstitutionsFromLocalizeCall;
    /**
     * Parse the tagged template literal to extract the message parts.
     *
     * @param elements The elements of the template literal to process.
     * @param fs The file system to use when computing source-map paths. If not provided then it uses
     *     the "current" FileSystem.
     * @publicApi used by CLI
     */
    function unwrapMessagePartsFromTemplateLiteral(elements, fs) {
        if (fs === void 0) { fs = file_system_1.getFileSystem(); }
        var cooked = elements.map(function (q) {
            if (q.node.value.cooked === undefined) {
                throw new BabelParseError(q.node, "Unexpected undefined message part in \"" + elements.map(function (q) { return q.node.value.cooked; }) + "\"");
            }
            return q.node.value.cooked;
        });
        var raw = elements.map(function (q) { return q.node.value.raw; });
        var locations = elements.map(function (q) { return getLocation(fs, q); });
        return [localize_1.ɵmakeTemplateObject(cooked, raw), locations];
    }
    exports.unwrapMessagePartsFromTemplateLiteral = unwrapMessagePartsFromTemplateLiteral;
    /**
     * Parse the tagged template literal to extract the interpolation expressions.
     *
     * @param quasi The AST node of the template literal to process.
     * @param fs The file system to use when computing source-map paths. If not provided then it uses
     *     the "current" FileSystem.
     * @publicApi used by CLI
     */
    function unwrapExpressionsFromTemplateLiteral(quasi, fs) {
        if (fs === void 0) { fs = file_system_1.getFileSystem(); }
        return [quasi.node.expressions, quasi.get('expressions').map(function (e) { return getLocation(fs, e); })];
    }
    exports.unwrapExpressionsFromTemplateLiteral = unwrapExpressionsFromTemplateLiteral;
    /**
     * Wrap the given `expression` in parentheses if it is a binary expression.
     *
     * This ensures that this expression is evaluated correctly if it is embedded in another expression.
     *
     * @param expression The expression to potentially wrap.
     */
    function wrapInParensIfNecessary(expression) {
        if (t.isBinaryExpression(expression)) {
            return t.parenthesizedExpression(expression);
        }
        else {
            return expression;
        }
    }
    exports.wrapInParensIfNecessary = wrapInParensIfNecessary;
    /**
     * Extract the string values from an `array` of string literals.
     *
     * @param array The array to unwrap.
     * @param fs The file system to use when computing source-map paths. If not provided then it uses
     *     the "current" FileSystem.
     */
    function unwrapStringLiteralArray(array, fs) {
        if (fs === void 0) { fs = file_system_1.getFileSystem(); }
        if (!isStringLiteralArray(array.node)) {
            throw new BabelParseError(array.node, 'Unexpected messageParts for `$localize` (expected an array of strings).');
        }
        var elements = array.get('elements');
        return [elements.map(function (str) { return str.node.value; }), elements.map(function (str) { return getLocation(fs, str); })];
    }
    exports.unwrapStringLiteralArray = unwrapStringLiteralArray;
    /**
     * This expression is believed to be a call to a "lazy-load" template object helper function.
     * This is expected to be of the form:
     *
     * ```ts
     *  function _templateObject() {
     *    var e = _taggedTemplateLiteral(['cooked string', 'raw string']);
     *    return _templateObject = function() { return e }, e
     *  }
     * ```
     *
     * We unwrap this to return the call to `_taggedTemplateLiteral()`.
     *
     * @param call the call expression to unwrap
     * @returns the  call expression
     */
    function unwrapLazyLoadHelperCall(call) {
        var callee = call.get('callee');
        if (!callee.isIdentifier()) {
            throw new BabelParseError(callee.node, 'Unexpected lazy-load helper call (expected a call of the form `_templateObject()`).');
        }
        var lazyLoadBinding = call.scope.getBinding(callee.node.name);
        if (!lazyLoadBinding) {
            throw new BabelParseError(callee.node, 'Missing declaration for lazy-load helper function');
        }
        var lazyLoadFn = lazyLoadBinding.path;
        if (!lazyLoadFn.isFunctionDeclaration()) {
            throw new BabelParseError(lazyLoadFn.node, 'Unexpected expression (expected a function declaration');
        }
        var returnedNode = getReturnedExpression(lazyLoadFn);
        if (returnedNode.isCallExpression()) {
            return returnedNode;
        }
        if (returnedNode.isIdentifier()) {
            var identifierName = returnedNode.node.name;
            var declaration = returnedNode.scope.getBinding(identifierName);
            if (declaration === undefined) {
                throw new BabelParseError(returnedNode.node, 'Missing declaration for return value from helper.');
            }
            if (!declaration.path.isVariableDeclarator()) {
                throw new BabelParseError(declaration.path.node, 'Unexpected helper return value declaration (expected a variable declaration).');
            }
            var initializer = declaration.path.get('init');
            if (!initializer.isCallExpression()) {
                throw new BabelParseError(declaration.path.node, 'Unexpected return value from helper (expected a call expression).');
            }
            // Remove the lazy load helper if this is the only reference to it.
            if (lazyLoadBinding.references === 1) {
                lazyLoadFn.remove();
            }
            return initializer;
        }
        return call;
    }
    exports.unwrapLazyLoadHelperCall = unwrapLazyLoadHelperCall;
    function getReturnedExpression(fn) {
        var e_1, _a;
        var bodyStatements = fn.get('body').get('body');
        try {
            for (var bodyStatements_1 = tslib_1.__values(bodyStatements), bodyStatements_1_1 = bodyStatements_1.next(); !bodyStatements_1_1.done; bodyStatements_1_1 = bodyStatements_1.next()) {
                var statement = bodyStatements_1_1.value;
                if (statement.isReturnStatement()) {
                    var argument = statement.get('argument');
                    if (argument.isSequenceExpression()) {
                        var expressions = argument.get('expressions');
                        return Array.isArray(expressions) ? expressions[expressions.length - 1] : expressions;
                    }
                    else if (argument.isExpression()) {
                        return argument;
                    }
                    else {
                        throw new BabelParseError(statement.node, 'Invalid return argument in helper function (expected an expression).');
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (bodyStatements_1_1 && !bodyStatements_1_1.done && (_a = bodyStatements_1.return)) _a.call(bodyStatements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        throw new BabelParseError(fn.node, 'Missing return statement in helper function.');
    }
    /**
     * Is the given `node` an array of literal strings?
     *
     * @param node The node to test.
     */
    function isStringLiteralArray(node) {
        return t.isArrayExpression(node) && node.elements.every(function (element) { return t.isStringLiteral(element); });
    }
    exports.isStringLiteralArray = isStringLiteralArray;
    /**
     * Are all the given `nodes` expressions?
     * @param nodes The nodes to test.
     */
    function isArrayOfExpressions(paths) {
        return paths.every(function (element) { return element.isExpression(); });
    }
    exports.isArrayOfExpressions = isArrayOfExpressions;
    /**
     * Translate the text of the given message, using the given translations.
     *
     * Logs as warning if the translation is not available
     * @publicApi used by CLI
     */
    function translate(diagnostics, translations, messageParts, substitutions, missingTranslation) {
        try {
            return localize_1.ɵtranslate(translations, messageParts, substitutions);
        }
        catch (e) {
            if (localize_1.ɵisMissingTranslationError(e)) {
                diagnostics.add(missingTranslation, e.message);
                // Return the parsed message because this will have the meta blocks stripped
                return [
                    localize_1.ɵmakeTemplateObject(e.parsedMessage.messageParts, e.parsedMessage.messageParts),
                    substitutions
                ];
            }
            else {
                diagnostics.error(e.message);
                return [messageParts, substitutions];
            }
        }
    }
    exports.translate = translate;
    var BabelParseError = /** @class */ (function (_super) {
        tslib_1.__extends(BabelParseError, _super);
        function BabelParseError(node, message) {
            var _this = _super.call(this, message) || this;
            _this.node = node;
            _this.type = 'BabelParseError';
            return _this;
        }
        return BabelParseError;
    }(Error));
    exports.BabelParseError = BabelParseError;
    function isBabelParseError(e) {
        return e.type === 'BabelParseError';
    }
    exports.isBabelParseError = isBabelParseError;
    function buildCodeFrameError(fs, path, e) {
        var filename = path.hub.file.opts.filename;
        if (filename) {
            filename = fs.resolve(filename);
            var cwd = path.hub.file.opts.cwd;
            if (cwd) {
                cwd = fs.resolve(cwd);
                filename = fs.relative(cwd, filename);
            }
        }
        else {
            filename = '(unknown file)';
        }
        var message = path.hub.file.buildCodeFrameError(e.node, e.message).message;
        return filename + ": " + message;
    }
    exports.buildCodeFrameError = buildCodeFrameError;
    function getLocation(fs, startPath, endPath) {
        var startLocation = startPath.node.loc;
        var file = getFileFromPath(fs, startPath);
        if (!startLocation || !file) {
            return undefined;
        }
        var endLocation = endPath && getFileFromPath(fs, endPath) === file && endPath.node.loc || startLocation;
        return {
            start: getLineAndColumn(startLocation.start),
            end: getLineAndColumn(endLocation.end),
            file: file,
            text: getText(startPath),
        };
    }
    exports.getLocation = getLocation;
    function serializeLocationPosition(location) {
        var endLineString = location.end !== undefined && location.end.line !== location.start.line ?
            "," + (location.end.line + 1) :
            '';
        return "" + (location.start.line + 1) + endLineString;
    }
    exports.serializeLocationPosition = serializeLocationPosition;
    function getFileFromPath(fs, path) {
        var _a;
        var opts = path === null || path === void 0 ? void 0 : path.hub.file.opts;
        var filename = opts === null || opts === void 0 ? void 0 : opts.filename;
        if (!filename) {
            return null;
        }
        var relativePath = fs.relative(opts.cwd, filename);
        var root = (_a = opts.generatorOpts.sourceRoot) !== null && _a !== void 0 ? _a : opts.cwd;
        var absPath = fs.resolve(root, relativePath);
        return absPath;
    }
    function getLineAndColumn(loc) {
        // Note we want 0-based line numbers but Babel returns 1-based.
        return { line: loc.line - 1, column: loc.column };
    }
    function getText(path) {
        if (path.node.start === null || path.node.end === null) {
            return undefined;
        }
        return path.hub.file.code.substring(path.node.start, path.node.end);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX2ZpbGVfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL3NvdXJjZV9maWxlX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwyRUFBMEg7SUFDMUgsOENBQW1JO0lBRW5JLGdDQUFrQztJQUlsQzs7Ozs7T0FLRztJQUNILFNBQWdCLFVBQVUsQ0FDdEIsVUFBb0IsRUFBRSxZQUFvQjtRQUM1QyxPQUFPLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBSEQsZ0NBR0M7SUFFRDs7Ozs7T0FLRztJQUNILFNBQWdCLGlCQUFpQixDQUM3QixVQUFvQixFQUFFLElBQVk7UUFDcEMsT0FBTyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQ3BFLENBQUM7SUFIRCw4Q0FHQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsVUFBa0M7UUFDbkUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFGRCxnREFFQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBZ0Isd0JBQXdCLENBQ3BDLFlBQWtDLEVBQUUsYUFBc0M7UUFDNUUsSUFBSSxZQUFZLEdBQWlCLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFN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QUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7YWJzb2x1dGVGcm9tLCBBYnNvbHV0ZUZzUGF0aCwgZ2V0RmlsZVN5c3RlbSwgUGF0aE1hbmlwdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge8m1aXNNaXNzaW5nVHJhbnNsYXRpb25FcnJvciwgybVtYWtlVGVtcGxhdGVPYmplY3QsIMm1UGFyc2VkVHJhbnNsYXRpb24sIMm1U291cmNlTG9jYXRpb24sIMm1dHJhbnNsYXRlfSBmcm9tICdAYW5ndWxhci9sb2NhbGl6ZSc7XG5pbXBvcnQge05vZGVQYXRofSBmcm9tICdAYmFiZWwvdHJhdmVyc2UnO1xuaW1wb3J0ICogYXMgdCBmcm9tICdAYmFiZWwvdHlwZXMnO1xuXG5pbXBvcnQge0RpYWdub3N0aWNIYW5kbGluZ1N0cmF0ZWd5LCBEaWFnbm9zdGljc30gZnJvbSAnLi9kaWFnbm9zdGljcyc7XG5cbi8qKlxuICogSXMgdGhlIGdpdmVuIGBleHByZXNzaW9uYCB0aGUgZ2xvYmFsIGAkbG9jYWxpemVgIGlkZW50aWZpZXI/XG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb24gVGhlIGV4cHJlc3Npb24gdG8gY2hlY2suXG4gKiBAcGFyYW0gbG9jYWxpemVOYW1lIFRoZSBjb25maWd1cmVkIG5hbWUgb2YgYCRsb2NhbGl6ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsaXplKFxuICAgIGV4cHJlc3Npb246IE5vZGVQYXRoLCBsb2NhbGl6ZU5hbWU6IHN0cmluZyk6IGV4cHJlc3Npb24gaXMgTm9kZVBhdGg8dC5JZGVudGlmaWVyPiB7XG4gIHJldHVybiBpc05hbWVkSWRlbnRpZmllcihleHByZXNzaW9uLCBsb2NhbGl6ZU5hbWUpICYmIGlzR2xvYmFsSWRlbnRpZmllcihleHByZXNzaW9uKTtcbn1cblxuLyoqXG4gKiBJcyB0aGUgZ2l2ZW4gYGV4cHJlc3Npb25gIGFuIGlkZW50aWZpZXIgd2l0aCB0aGUgY29ycmVjdCBgbmFtZWA/XG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb24gVGhlIGV4cHJlc3Npb24gdG8gY2hlY2suXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaWRlbnRpZmllciB3ZSBhcmUgbG9va2luZyBmb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05hbWVkSWRlbnRpZmllcihcbiAgICBleHByZXNzaW9uOiBOb2RlUGF0aCwgbmFtZTogc3RyaW5nKTogZXhwcmVzc2lvbiBpcyBOb2RlUGF0aDx0LklkZW50aWZpZXI+IHtcbiAgcmV0dXJuIGV4cHJlc3Npb24uaXNJZGVudGlmaWVyKCkgJiYgZXhwcmVzc2lvbi5ub2RlLm5hbWUgPT09IG5hbWU7XG59XG5cbi8qKlxuICogSXMgdGhlIGdpdmVuIGBpZGVudGlmaWVyYCBkZWNsYXJlZCBnbG9iYWxseS5cbiAqXG4gKiBAcGFyYW0gaWRlbnRpZmllciBUaGUgaWRlbnRpZmllciB0byBjaGVjay5cbiAqIEBwdWJsaWNBcGkgdXNlZCBieSBDTElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzR2xvYmFsSWRlbnRpZmllcihpZGVudGlmaWVyOiBOb2RlUGF0aDx0LklkZW50aWZpZXI+KSB7XG4gIHJldHVybiAhaWRlbnRpZmllci5zY29wZSB8fCAhaWRlbnRpZmllci5zY29wZS5oYXNCaW5kaW5nKGlkZW50aWZpZXIubm9kZS5uYW1lKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIHRyYW5zbGF0ZWQgZXhwcmVzc2lvbiB0byByZXBsYWNlIHRoZSBjYWxsIHRvIGAkbG9jYWxpemVgLlxuICogQHBhcmFtIG1lc3NhZ2VQYXJ0cyBUaGUgc3RhdGljIHBhcnRzIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHN1YnN0aXR1dGlvbnMgVGhlIGV4cHJlc3Npb25zIHRvIHN1YnN0aXR1dGUgaW50byB0aGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNBcGkgdXNlZCBieSBDTElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVSZXBsYWNlbWVudChcbiAgICBtZXNzYWdlUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBzdWJzdGl0dXRpb25zOiByZWFkb25seSB0LkV4cHJlc3Npb25bXSk6IHQuRXhwcmVzc2lvbiB7XG4gIGxldCBtYXBwZWRTdHJpbmc6IHQuRXhwcmVzc2lvbiA9IHQuc3RyaW5nTGl0ZXJhbChtZXNzYWdlUGFydHNbMF0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IG1lc3NhZ2VQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG1hcHBlZFN0cmluZyA9XG4gICAgICAgIHQuYmluYXJ5RXhwcmVzc2lvbignKycsIG1hcHBlZFN0cmluZywgd3JhcEluUGFyZW5zSWZOZWNlc3Nhcnkoc3Vic3RpdHV0aW9uc1tpIC0gMV0pKTtcbiAgICBtYXBwZWRTdHJpbmcgPSB0LmJpbmFyeUV4cHJlc3Npb24oJysnLCBtYXBwZWRTdHJpbmcsIHQuc3RyaW5nTGl0ZXJhbChtZXNzYWdlUGFydHNbaV0pKTtcbiAgfVxuICByZXR1cm4gbWFwcGVkU3RyaW5nO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgdGhlIG1lc3NhZ2UgcGFydHMgZnJvbSB0aGUgZ2l2ZW4gYGNhbGxgICh0byBgJGxvY2FsaXplYCkuXG4gKlxuICogVGhlIG1lc3NhZ2UgcGFydHMgd2lsbCBlaXRoZXIgYnkgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBgY2FsbGAgb3IgaXQgd2lsbCBiZSB3cmFwcGVkIGluIGNhbGxcbiAqIHRvIGEgaGVscGVyIGZ1bmN0aW9uIGxpa2UgYF9fbWFrZVRlbXBsYXRlT2JqZWN0YC5cbiAqXG4gKiBAcGFyYW0gY2FsbCBUaGUgQVNUIG5vZGUgb2YgdGhlIGNhbGwgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSBmcyBUaGUgZmlsZSBzeXN0ZW0gdG8gdXNlIHdoZW4gY29tcHV0aW5nIHNvdXJjZS1tYXAgcGF0aHMuIElmIG5vdCBwcm92aWRlZCB0aGVuIGl0IHVzZXNcbiAqICAgICB0aGUgXCJjdXJyZW50XCIgRmlsZVN5c3RlbS5cbiAqIEBwdWJsaWNBcGkgdXNlZCBieSBDTElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcE1lc3NhZ2VQYXJ0c0Zyb21Mb2NhbGl6ZUNhbGwoXG4gICAgY2FsbDogTm9kZVBhdGg8dC5DYWxsRXhwcmVzc2lvbj4sXG4gICAgZnM6IFBhdGhNYW5pcHVsYXRpb24gPSBnZXRGaWxlU3lzdGVtKCksXG4gICAgKTogW1RlbXBsYXRlU3RyaW5nc0FycmF5LCAoybVTb3VyY2VMb2NhdGlvbiB8IHVuZGVmaW5lZClbXV0ge1xuICBsZXQgY29va2VkID0gY2FsbC5nZXQoJ2FyZ3VtZW50cycpWzBdO1xuXG4gIGlmIChjb29rZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoY2FsbC5ub2RlLCAnYCRsb2NhbGl6ZWAgY2FsbGVkIHdpdGhvdXQgYW55IGFyZ3VtZW50cy4nKTtcbiAgfVxuICBpZiAoIWNvb2tlZC5pc0V4cHJlc3Npb24oKSkge1xuICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgIGNvb2tlZC5ub2RlLCAnVW5leHBlY3RlZCBhcmd1bWVudCB0byBgJGxvY2FsaXplYCAoZXhwZWN0ZWQgYW4gYXJyYXkpLicpO1xuICB9XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gY2FsbCB0byBgX19tYWtlVGVtcGxhdGVPYmplY3QoLi4uKWAsIHRoZW4gYHJhd2AgbXVzdCBiZSB0aGUgc2FtZSBhcyBgY29va2VkYC5cbiAgbGV0IHJhdyA9IGNvb2tlZDtcblxuICAvLyBDaGVjayBmb3IgYSBtZW1vaXplZCBmb3JtOiBgeCB8fCB4ID0gLi4uYFxuICBpZiAoY29va2VkLmlzTG9naWNhbEV4cHJlc3Npb24oKSAmJiBjb29rZWQubm9kZS5vcGVyYXRvciA9PT0gJ3x8JyAmJlxuICAgICAgY29va2VkLmdldCgnbGVmdCcpLmlzSWRlbnRpZmllcigpKSB7XG4gICAgY29uc3QgcmlnaHQgPSBjb29rZWQuZ2V0KCdyaWdodCcpO1xuICAgIGlmIChyaWdodC5pc0Fzc2lnbm1lbnRFeHByZXNzaW9uKCkpIHtcbiAgICAgIGNvb2tlZCA9IHJpZ2h0LmdldCgncmlnaHQnKTtcbiAgICAgIGlmICghY29va2VkLmlzRXhwcmVzc2lvbigpKSB7XG4gICAgICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBjb29rZWQubm9kZSwgJ1VuZXhwZWN0ZWQgXCJtYWtlVGVtcGxhdGVPYmplY3QoKVwiIGZ1bmN0aW9uIChleHBlY3RlZCBhbiBleHByZXNzaW9uKS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJpZ2h0LmlzU2VxdWVuY2VFeHByZXNzaW9uKCkpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gcmlnaHQuZ2V0KCdleHByZXNzaW9ucycpO1xuICAgICAgaWYgKGV4cHJlc3Npb25zLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhIG1pbmlmaWVkIHNlcXVlbmNlIGV4cHJlc3Npb24sIHdoZXJlIHRoZSBmaXJzdCB0d28gZXhwcmVzc2lvbnMgaW4gdGhlIHNlcXVlbmNlXG4gICAgICAgIC8vIGFyZSBhc3NpZ25tZW50cyBvZiB0aGUgY29va2VkIGFuZCByYXcgYXJyYXlzIHJlc3BlY3RpdmVseS5cbiAgICAgICAgY29uc3QgW2ZpcnN0LCBzZWNvbmRdID0gZXhwcmVzc2lvbnM7XG4gICAgICAgIGlmIChmaXJzdC5pc0Fzc2lnbm1lbnRFeHByZXNzaW9uKCkpIHtcbiAgICAgICAgICBjb29rZWQgPSBmaXJzdC5nZXQoJ3JpZ2h0Jyk7XG4gICAgICAgICAgaWYgKCFjb29rZWQuaXNFeHByZXNzaW9uKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgZmlyc3Qubm9kZSwgJ1VuZXhwZWN0ZWQgY29va2VkIHZhbHVlLCBleHBlY3RlZCBhbiBleHByZXNzaW9uLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2Vjb25kLmlzQXNzaWdubWVudEV4cHJlc3Npb24oKSkge1xuICAgICAgICAgICAgcmF3ID0gc2Vjb25kLmdldCgncmlnaHQnKTtcbiAgICAgICAgICAgIGlmICghcmF3LmlzRXhwcmVzc2lvbigpKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICBzZWNvbmQubm9kZSwgJ1VuZXhwZWN0ZWQgcmF3IHZhbHVlLCBleHBlY3RlZCBhbiBleHByZXNzaW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgc2Vjb25kIGV4cHJlc3Npb24gaXMgbm90IGFuIGFzc2lnbm1lbnQgdGhlbiBpdCBpcyBwcm9iYWJseSBjb2RlIHRvIHRha2UgYSBjb3B5XG4gICAgICAgICAgICAvLyBvZiB0aGUgY29va2VkIGFycmF5LiBGb3IgZXhhbXBsZTogYHJhdyB8fCAocmF3PWNvb2tlZC5zbGljZSgwKSlgLlxuICAgICAgICAgICAgcmF3ID0gY29va2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGZvciBgX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpYCBvciBgX190ZW1wbGF0ZU9iamVjdCgpYCBjYWxscy5cbiAgaWYgKGNvb2tlZC5pc0NhbGxFeHByZXNzaW9uKCkpIHtcbiAgICBsZXQgY2FsbCA9IGNvb2tlZDtcbiAgICBpZiAoY2FsbC5nZXQoJ2FyZ3VtZW50cycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gTm8gYXJndW1lbnRzIHNvIHBlcmhhcHMgaXQgaXMgYSBgX190ZW1wbGF0ZU9iamVjdCgpYCBjYWxsLlxuICAgICAgLy8gVW53cmFwIHRoaXMgdG8gZ2V0IHRoZSBgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChjb29rZWQsIHJhdylgIGNhbGwuXG4gICAgICBjYWxsID0gdW53cmFwTGF6eUxvYWRIZWxwZXJDYWxsKGNhbGwpO1xuICAgIH1cblxuICAgIGNvb2tlZCA9IGNhbGwuZ2V0KCdhcmd1bWVudHMnKVswXTtcbiAgICBpZiAoIWNvb2tlZC5pc0V4cHJlc3Npb24oKSkge1xuICAgICAgdGhyb3cgbmV3IEJhYmVsUGFyc2VFcnJvcihcbiAgICAgICAgICBjb29rZWQubm9kZSxcbiAgICAgICAgICAnVW5leHBlY3RlZCBgY29va2VkYCBhcmd1bWVudCB0byB0aGUgXCJtYWtlVGVtcGxhdGVPYmplY3QoKVwiIGZ1bmN0aW9uIChleHBlY3RlZCBhbiBleHByZXNzaW9uKS4nKTtcbiAgICB9XG4gICAgY29uc3QgYXJnMiA9IGNhbGwuZ2V0KCdhcmd1bWVudHMnKVsxXTtcbiAgICBpZiAoYXJnMiAmJiAhYXJnMi5pc0V4cHJlc3Npb24oKSkge1xuICAgICAgdGhyb3cgbmV3IEJhYmVsUGFyc2VFcnJvcihcbiAgICAgICAgICBhcmcyLm5vZGUsXG4gICAgICAgICAgJ1VuZXhwZWN0ZWQgYHJhd2AgYXJndW1lbnQgdG8gdGhlIFwibWFrZVRlbXBsYXRlT2JqZWN0KClcIiBmdW5jdGlvbiAoZXhwZWN0ZWQgYW4gZXhwcmVzc2lvbikuJyk7XG4gICAgfVxuICAgIC8vIElmIHRoZXJlIGlzIG5vIHNlY29uZCBhcmd1bWVudCB0aGVuIGFzc3VtZSB0aGF0IHJhdyBhbmQgY29va2VkIGFyZSB0aGUgc2FtZVxuICAgIHJhdyA9IGFyZzIgIT09IHVuZGVmaW5lZCA/IGFyZzIgOiBjb29rZWQ7XG4gIH1cblxuICBjb25zdCBbY29va2VkU3RyaW5nc10gPSB1bndyYXBTdHJpbmdMaXRlcmFsQXJyYXkoY29va2VkLCBmcyk7XG4gIGNvbnN0IFtyYXdTdHJpbmdzLCByYXdMb2NhdGlvbnNdID0gdW53cmFwU3RyaW5nTGl0ZXJhbEFycmF5KHJhdywgZnMpO1xuICByZXR1cm4gW8m1bWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZFN0cmluZ3MsIHJhd1N0cmluZ3MpLCByYXdMb2NhdGlvbnNdO1xufVxuXG4vKipcbiAqIFBhcnNlIHRoZSBsb2NhbGl6ZSBjYWxsIGV4cHJlc3Npb24gdG8gZXh0cmFjdCB0aGUgYXJndW1lbnRzIHRoYXQgaG9sZCB0aGUgc3Vic3RpdGlvbiBleHByZXNzaW9ucy5cbiAqXG4gKiBAcGFyYW0gY2FsbCBUaGUgQVNUIG5vZGUgb2YgdGhlIGNhbGwgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSBmcyBUaGUgZmlsZSBzeXN0ZW0gdG8gdXNlIHdoZW4gY29tcHV0aW5nIHNvdXJjZS1tYXAgcGF0aHMuIElmIG5vdCBwcm92aWRlZCB0aGVuIGl0IHVzZXNcbiAqICAgICB0aGUgXCJjdXJyZW50XCIgRmlsZVN5c3RlbS5cbiAqIEBwdWJsaWNBcGkgdXNlZCBieSBDTElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcFN1YnN0aXR1dGlvbnNGcm9tTG9jYWxpemVDYWxsKFxuICAgIGNhbGw6IE5vZGVQYXRoPHQuQ2FsbEV4cHJlc3Npb24+LFxuICAgIGZzOiBQYXRoTWFuaXB1bGF0aW9uID0gZ2V0RmlsZVN5c3RlbSgpKTogW3QuRXhwcmVzc2lvbltdLCAoybVTb3VyY2VMb2NhdGlvbiB8IHVuZGVmaW5lZClbXV0ge1xuICBjb25zdCBleHByZXNzaW9ucyA9IGNhbGwuZ2V0KCdhcmd1bWVudHMnKS5zcGxpY2UoMSk7XG4gIGlmICghaXNBcnJheU9mRXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMpKSB7XG4gICAgY29uc3QgYmFkRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25zLmZpbmQoZXhwcmVzc2lvbiA9PiAhZXhwcmVzc2lvbi5pc0V4cHJlc3Npb24oKSkhO1xuICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgIGJhZEV4cHJlc3Npb24ubm9kZSxcbiAgICAgICAgJ0ludmFsaWQgc3Vic3RpdHV0aW9ucyBmb3IgYCRsb2NhbGl6ZWAgKGV4cGVjdGVkIGFsbCBzdWJzdGl0dXRpb24gYXJndW1lbnRzIHRvIGJlIGV4cHJlc3Npb25zKS4nKTtcbiAgfVxuICByZXR1cm4gW1xuICAgIGV4cHJlc3Npb25zLm1hcChwYXRoID0+IHBhdGgubm9kZSksIGV4cHJlc3Npb25zLm1hcChleHByZXNzaW9uID0+IGdldExvY2F0aW9uKGZzLCBleHByZXNzaW9uKSlcbiAgXTtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwgdG8gZXh0cmFjdCB0aGUgbWVzc2FnZSBwYXJ0cy5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudHMgVGhlIGVsZW1lbnRzIG9mIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0gZnMgVGhlIGZpbGUgc3lzdGVtIHRvIHVzZSB3aGVuIGNvbXB1dGluZyBzb3VyY2UtbWFwIHBhdGhzLiBJZiBub3QgcHJvdmlkZWQgdGhlbiBpdCB1c2VzXG4gKiAgICAgdGhlIFwiY3VycmVudFwiIEZpbGVTeXN0ZW0uXG4gKiBAcHVibGljQXBpIHVzZWQgYnkgQ0xJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBNZXNzYWdlUGFydHNGcm9tVGVtcGxhdGVMaXRlcmFsKFxuICAgIGVsZW1lbnRzOiBOb2RlUGF0aDx0LlRlbXBsYXRlRWxlbWVudD5bXSwgZnM6IFBhdGhNYW5pcHVsYXRpb24gPSBnZXRGaWxlU3lzdGVtKCkpOlxuICAgIFtUZW1wbGF0ZVN0cmluZ3NBcnJheSwgKMm1U291cmNlTG9jYXRpb24gfCB1bmRlZmluZWQpW11dIHtcbiAgY29uc3QgY29va2VkID0gZWxlbWVudHMubWFwKHEgPT4ge1xuICAgIGlmIChxLm5vZGUudmFsdWUuY29va2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgICAgcS5ub2RlLFxuICAgICAgICAgIGBVbmV4cGVjdGVkIHVuZGVmaW5lZCBtZXNzYWdlIHBhcnQgaW4gXCIke2VsZW1lbnRzLm1hcChxID0+IHEubm9kZS52YWx1ZS5jb29rZWQpfVwiYCk7XG4gICAgfVxuICAgIHJldHVybiBxLm5vZGUudmFsdWUuY29va2VkO1xuICB9KTtcbiAgY29uc3QgcmF3ID0gZWxlbWVudHMubWFwKHEgPT4gcS5ub2RlLnZhbHVlLnJhdyk7XG4gIGNvbnN0IGxvY2F0aW9ucyA9IGVsZW1lbnRzLm1hcChxID0+IGdldExvY2F0aW9uKGZzLCBxKSk7XG4gIHJldHVybiBbybVtYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpLCBsb2NhdGlvbnNdO1xufVxuXG4vKipcbiAqIFBhcnNlIHRoZSB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbCB0byBleHRyYWN0IHRoZSBpbnRlcnBvbGF0aW9uIGV4cHJlc3Npb25zLlxuICpcbiAqIEBwYXJhbSBxdWFzaSBUaGUgQVNUIG5vZGUgb2YgdGhlIHRlbXBsYXRlIGxpdGVyYWwgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSBmcyBUaGUgZmlsZSBzeXN0ZW0gdG8gdXNlIHdoZW4gY29tcHV0aW5nIHNvdXJjZS1tYXAgcGF0aHMuIElmIG5vdCBwcm92aWRlZCB0aGVuIGl0IHVzZXNcbiAqICAgICB0aGUgXCJjdXJyZW50XCIgRmlsZVN5c3RlbS5cbiAqIEBwdWJsaWNBcGkgdXNlZCBieSBDTElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcEV4cHJlc3Npb25zRnJvbVRlbXBsYXRlTGl0ZXJhbChcbiAgICBxdWFzaTogTm9kZVBhdGg8dC5UZW1wbGF0ZUxpdGVyYWw+LFxuICAgIGZzOiBQYXRoTWFuaXB1bGF0aW9uID0gZ2V0RmlsZVN5c3RlbSgpKTogW3QuRXhwcmVzc2lvbltdLCAoybVTb3VyY2VMb2NhdGlvbiB8IHVuZGVmaW5lZClbXV0ge1xuICByZXR1cm4gW3F1YXNpLm5vZGUuZXhwcmVzc2lvbnMsIHF1YXNpLmdldCgnZXhwcmVzc2lvbnMnKS5tYXAoZSA9PiBnZXRMb2NhdGlvbihmcywgZSkpXTtcbn1cblxuLyoqXG4gKiBXcmFwIHRoZSBnaXZlbiBgZXhwcmVzc2lvbmAgaW4gcGFyZW50aGVzZXMgaWYgaXQgaXMgYSBiaW5hcnkgZXhwcmVzc2lvbi5cbiAqXG4gKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGlzIGV4cHJlc3Npb24gaXMgZXZhbHVhdGVkIGNvcnJlY3RseSBpZiBpdCBpcyBlbWJlZGRlZCBpbiBhbm90aGVyIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb24gVGhlIGV4cHJlc3Npb24gdG8gcG90ZW50aWFsbHkgd3JhcC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBJblBhcmVuc0lmTmVjZXNzYXJ5KGV4cHJlc3Npb246IHQuRXhwcmVzc2lvbik6IHQuRXhwcmVzc2lvbiB7XG4gIGlmICh0LmlzQmluYXJ5RXhwcmVzc2lvbihleHByZXNzaW9uKSkge1xuICAgIHJldHVybiB0LnBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdCB0aGUgc3RyaW5nIHZhbHVlcyBmcm9tIGFuIGBhcnJheWAgb2Ygc3RyaW5nIGxpdGVyYWxzLlxuICpcbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gdW53cmFwLlxuICogQHBhcmFtIGZzIFRoZSBmaWxlIHN5c3RlbSB0byB1c2Ugd2hlbiBjb21wdXRpbmcgc291cmNlLW1hcCBwYXRocy4gSWYgbm90IHByb3ZpZGVkIHRoZW4gaXQgdXNlc1xuICogICAgIHRoZSBcImN1cnJlbnRcIiBGaWxlU3lzdGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW53cmFwU3RyaW5nTGl0ZXJhbEFycmF5KFxuICAgIGFycmF5OiBOb2RlUGF0aDx0LkV4cHJlc3Npb24+LFxuICAgIGZzOiBQYXRoTWFuaXB1bGF0aW9uID0gZ2V0RmlsZVN5c3RlbSgpKTogW3N0cmluZ1tdLCAoybVTb3VyY2VMb2NhdGlvbiB8IHVuZGVmaW5lZClbXV0ge1xuICBpZiAoIWlzU3RyaW5nTGl0ZXJhbEFycmF5KGFycmF5Lm5vZGUpKSB7XG4gICAgdGhyb3cgbmV3IEJhYmVsUGFyc2VFcnJvcihcbiAgICAgICAgYXJyYXkubm9kZSwgJ1VuZXhwZWN0ZWQgbWVzc2FnZVBhcnRzIGZvciBgJGxvY2FsaXplYCAoZXhwZWN0ZWQgYW4gYXJyYXkgb2Ygc3RyaW5ncykuJyk7XG4gIH1cbiAgY29uc3QgZWxlbWVudHMgPSBhcnJheS5nZXQoJ2VsZW1lbnRzJykgYXMgTm9kZVBhdGg8dC5TdHJpbmdMaXRlcmFsPltdO1xuICByZXR1cm4gW2VsZW1lbnRzLm1hcChzdHIgPT4gc3RyLm5vZGUudmFsdWUpLCBlbGVtZW50cy5tYXAoc3RyID0+IGdldExvY2F0aW9uKGZzLCBzdHIpKV07XG59XG5cbi8qKlxuICogVGhpcyBleHByZXNzaW9uIGlzIGJlbGlldmVkIHRvIGJlIGEgY2FsbCB0byBhIFwibGF6eS1sb2FkXCIgdGVtcGxhdGUgb2JqZWN0IGhlbHBlciBmdW5jdGlvbi5cbiAqIFRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgb2YgdGhlIGZvcm06XG4gKlxuICogYGBgdHNcbiAqICBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gKiAgICB2YXIgZSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoWydjb29rZWQgc3RyaW5nJywgJ3JhdyBzdHJpbmcnXSk7XG4gKiAgICByZXR1cm4gX3RlbXBsYXRlT2JqZWN0ID0gZnVuY3Rpb24oKSB7IHJldHVybiBlIH0sIGVcbiAqICB9XG4gKiBgYGBcbiAqXG4gKiBXZSB1bndyYXAgdGhpcyB0byByZXR1cm4gdGhlIGNhbGwgdG8gYF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoKWAuXG4gKlxuICogQHBhcmFtIGNhbGwgdGhlIGNhbGwgZXhwcmVzc2lvbiB0byB1bndyYXBcbiAqIEByZXR1cm5zIHRoZSAgY2FsbCBleHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBMYXp5TG9hZEhlbHBlckNhbGwoY2FsbDogTm9kZVBhdGg8dC5DYWxsRXhwcmVzc2lvbj4pOlxuICAgIE5vZGVQYXRoPHQuQ2FsbEV4cHJlc3Npb24+IHtcbiAgY29uc3QgY2FsbGVlID0gY2FsbC5nZXQoJ2NhbGxlZScpO1xuICBpZiAoIWNhbGxlZS5pc0lkZW50aWZpZXIoKSkge1xuICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgIGNhbGxlZS5ub2RlLFxuICAgICAgICAnVW5leHBlY3RlZCBsYXp5LWxvYWQgaGVscGVyIGNhbGwgKGV4cGVjdGVkIGEgY2FsbCBvZiB0aGUgZm9ybSBgX3RlbXBsYXRlT2JqZWN0KClgKS4nKTtcbiAgfVxuICBjb25zdCBsYXp5TG9hZEJpbmRpbmcgPSBjYWxsLnNjb3BlLmdldEJpbmRpbmcoY2FsbGVlLm5vZGUubmFtZSk7XG4gIGlmICghbGF6eUxvYWRCaW5kaW5nKSB7XG4gICAgdGhyb3cgbmV3IEJhYmVsUGFyc2VFcnJvcihjYWxsZWUubm9kZSwgJ01pc3NpbmcgZGVjbGFyYXRpb24gZm9yIGxhenktbG9hZCBoZWxwZXIgZnVuY3Rpb24nKTtcbiAgfVxuICBjb25zdCBsYXp5TG9hZEZuID0gbGF6eUxvYWRCaW5kaW5nLnBhdGg7XG4gIGlmICghbGF6eUxvYWRGbi5pc0Z1bmN0aW9uRGVjbGFyYXRpb24oKSkge1xuICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgIGxhenlMb2FkRm4ubm9kZSwgJ1VuZXhwZWN0ZWQgZXhwcmVzc2lvbiAoZXhwZWN0ZWQgYSBmdW5jdGlvbiBkZWNsYXJhdGlvbicpO1xuICB9XG4gIGNvbnN0IHJldHVybmVkTm9kZSA9IGdldFJldHVybmVkRXhwcmVzc2lvbihsYXp5TG9hZEZuKTtcblxuICBpZiAocmV0dXJuZWROb2RlLmlzQ2FsbEV4cHJlc3Npb24oKSkge1xuICAgIHJldHVybiByZXR1cm5lZE5vZGU7XG4gIH1cblxuICBpZiAocmV0dXJuZWROb2RlLmlzSWRlbnRpZmllcigpKSB7XG4gICAgY29uc3QgaWRlbnRpZmllck5hbWUgPSByZXR1cm5lZE5vZGUubm9kZS5uYW1lO1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gcmV0dXJuZWROb2RlLnNjb3BlLmdldEJpbmRpbmcoaWRlbnRpZmllck5hbWUpO1xuICAgIGlmIChkZWNsYXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgQmFiZWxQYXJzZUVycm9yKFxuICAgICAgICAgIHJldHVybmVkTm9kZS5ub2RlLCAnTWlzc2luZyBkZWNsYXJhdGlvbiBmb3IgcmV0dXJuIHZhbHVlIGZyb20gaGVscGVyLicpO1xuICAgIH1cbiAgICBpZiAoIWRlY2xhcmF0aW9uLnBhdGguaXNWYXJpYWJsZURlY2xhcmF0b3IoKSkge1xuICAgICAgdGhyb3cgbmV3IEJhYmVsUGFyc2VFcnJvcihcbiAgICAgICAgICBkZWNsYXJhdGlvbi5wYXRoLm5vZGUsXG4gICAgICAgICAgJ1VuZXhwZWN0ZWQgaGVscGVyIHJldHVybiB2YWx1ZSBkZWNsYXJhdGlvbiAoZXhwZWN0ZWQgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbikuJyk7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemVyID0gZGVjbGFyYXRpb24ucGF0aC5nZXQoJ2luaXQnKTtcbiAgICBpZiAoIWluaXRpYWxpemVyLmlzQ2FsbEV4cHJlc3Npb24oKSkge1xuICAgICAgdGhyb3cgbmV3IEJhYmVsUGFyc2VFcnJvcihcbiAgICAgICAgICBkZWNsYXJhdGlvbi5wYXRoLm5vZGUsXG4gICAgICAgICAgJ1VuZXhwZWN0ZWQgcmV0dXJuIHZhbHVlIGZyb20gaGVscGVyIChleHBlY3RlZCBhIGNhbGwgZXhwcmVzc2lvbikuJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSBsYXp5IGxvYWQgaGVscGVyIGlmIHRoaXMgaXMgdGhlIG9ubHkgcmVmZXJlbmNlIHRvIGl0LlxuICAgIGlmIChsYXp5TG9hZEJpbmRpbmcucmVmZXJlbmNlcyA9PT0gMSkge1xuICAgICAgbGF6eUxvYWRGbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbGl6ZXI7XG4gIH1cbiAgcmV0dXJuIGNhbGw7XG59XG5cbmZ1bmN0aW9uIGdldFJldHVybmVkRXhwcmVzc2lvbihmbjogTm9kZVBhdGg8dC5GdW5jdGlvbkRlY2xhcmF0aW9uPik6IE5vZGVQYXRoPHQuRXhwcmVzc2lvbj4ge1xuICBjb25zdCBib2R5U3RhdGVtZW50cyA9IGZuLmdldCgnYm9keScpLmdldCgnYm9keScpO1xuICBmb3IgKGNvbnN0IHN0YXRlbWVudCBvZiBib2R5U3RhdGVtZW50cykge1xuICAgIGlmIChzdGF0ZW1lbnQuaXNSZXR1cm5TdGF0ZW1lbnQoKSkge1xuICAgICAgY29uc3QgYXJndW1lbnQgPSBzdGF0ZW1lbnQuZ2V0KCdhcmd1bWVudCcpO1xuICAgICAgaWYgKGFyZ3VtZW50LmlzU2VxdWVuY2VFeHByZXNzaW9uKCkpIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbnMgPSBhcmd1bWVudC5nZXQoJ2V4cHJlc3Npb25zJyk7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGV4cHJlc3Npb25zKSA/IGV4cHJlc3Npb25zW2V4cHJlc3Npb25zLmxlbmd0aCAtIDFdIDogZXhwcmVzc2lvbnM7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50LmlzRXhwcmVzc2lvbigpKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBzdGF0ZW1lbnQubm9kZSwgJ0ludmFsaWQgcmV0dXJuIGFyZ3VtZW50IGluIGhlbHBlciBmdW5jdGlvbiAoZXhwZWN0ZWQgYW4gZXhwcmVzc2lvbikuJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBCYWJlbFBhcnNlRXJyb3IoZm4ubm9kZSwgJ01pc3NpbmcgcmV0dXJuIHN0YXRlbWVudCBpbiBoZWxwZXIgZnVuY3Rpb24uJyk7XG59XG5cbi8qKlxuICogSXMgdGhlIGdpdmVuIGBub2RlYCBhbiBhcnJheSBvZiBsaXRlcmFsIHN0cmluZ3M/XG4gKlxuICogQHBhcmFtIG5vZGUgVGhlIG5vZGUgdG8gdGVzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nTGl0ZXJhbEFycmF5KG5vZGU6IHQuTm9kZSk6IG5vZGUgaXMgdC5FeHByZXNzaW9uJlxuICAgIHtlbGVtZW50czogdC5TdHJpbmdMaXRlcmFsW119IHtcbiAgcmV0dXJuIHQuaXNBcnJheUV4cHJlc3Npb24obm9kZSkgJiYgbm9kZS5lbGVtZW50cy5ldmVyeShlbGVtZW50ID0+IHQuaXNTdHJpbmdMaXRlcmFsKGVsZW1lbnQpKTtcbn1cblxuLyoqXG4gKiBBcmUgYWxsIHRoZSBnaXZlbiBgbm9kZXNgIGV4cHJlc3Npb25zP1xuICogQHBhcmFtIG5vZGVzIFRoZSBub2RlcyB0byB0ZXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mRXhwcmVzc2lvbnMocGF0aHM6IE5vZGVQYXRoPHQuTm9kZT5bXSk6IHBhdGhzIGlzIE5vZGVQYXRoPHQuRXhwcmVzc2lvbj5bXSB7XG4gIHJldHVybiBwYXRocy5ldmVyeShlbGVtZW50ID0+IGVsZW1lbnQuaXNFeHByZXNzaW9uKCkpO1xufVxuXG4vKiogT3B0aW9ucyB0aGF0IGFmZmVjdCBob3cgdGhlIGBtYWtlRXNYWFhUcmFuc2xhdGVQbHVnaW4oKWAgZnVuY3Rpb25zIHdvcmsuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0ZVBsdWdpbk9wdGlvbnMge1xuICBtaXNzaW5nVHJhbnNsYXRpb24/OiBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneTtcbiAgbG9jYWxpemVOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSB0aGUgdGV4dCBvZiB0aGUgZ2l2ZW4gbWVzc2FnZSwgdXNpbmcgdGhlIGdpdmVuIHRyYW5zbGF0aW9ucy5cbiAqXG4gKiBMb2dzIGFzIHdhcm5pbmcgaWYgdGhlIHRyYW5zbGF0aW9uIGlzIG5vdCBhdmFpbGFibGVcbiAqIEBwdWJsaWNBcGkgdXNlZCBieSBDTElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShcbiAgICBkaWFnbm9zdGljczogRGlhZ25vc3RpY3MsIHRyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgybVQYXJzZWRUcmFuc2xhdGlvbj4sXG4gICAgbWVzc2FnZVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgc3Vic3RpdHV0aW9uczogcmVhZG9ubHkgYW55W10sXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneSk6IFtUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcmVhZG9ubHkgYW55W11dIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gybV0cmFuc2xhdGUodHJhbnNsYXRpb25zLCBtZXNzYWdlUGFydHMsIHN1YnN0aXR1dGlvbnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKMm1aXNNaXNzaW5nVHJhbnNsYXRpb25FcnJvcihlKSkge1xuICAgICAgZGlhZ25vc3RpY3MuYWRkKG1pc3NpbmdUcmFuc2xhdGlvbiwgZS5tZXNzYWdlKTtcbiAgICAgIC8vIFJldHVybiB0aGUgcGFyc2VkIG1lc3NhZ2UgYmVjYXVzZSB0aGlzIHdpbGwgaGF2ZSB0aGUgbWV0YSBibG9ja3Mgc3RyaXBwZWRcbiAgICAgIHJldHVybiBbXG4gICAgICAgIMm1bWFrZVRlbXBsYXRlT2JqZWN0KGUucGFyc2VkTWVzc2FnZS5tZXNzYWdlUGFydHMsIGUucGFyc2VkTWVzc2FnZS5tZXNzYWdlUGFydHMpLFxuICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWFnbm9zdGljcy5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIFttZXNzYWdlUGFydHMsIHN1YnN0aXR1dGlvbnNdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFiZWxQYXJzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IHR5cGUgPSAnQmFiZWxQYXJzZUVycm9yJztcbiAgY29uc3RydWN0b3IocHVibGljIG5vZGU6IHQuTm9kZSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmFiZWxQYXJzZUVycm9yKGU6IGFueSk6IGUgaXMgQmFiZWxQYXJzZUVycm9yIHtcbiAgcmV0dXJuIGUudHlwZSA9PT0gJ0JhYmVsUGFyc2VFcnJvcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvZGVGcmFtZUVycm9yKFxuICAgIGZzOiBQYXRoTWFuaXB1bGF0aW9uLCBwYXRoOiBOb2RlUGF0aCwgZTogQmFiZWxQYXJzZUVycm9yKTogc3RyaW5nIHtcbiAgbGV0IGZpbGVuYW1lID0gcGF0aC5odWIuZmlsZS5vcHRzLmZpbGVuYW1lO1xuICBpZiAoZmlsZW5hbWUpIHtcbiAgICBmaWxlbmFtZSA9IGZzLnJlc29sdmUoZmlsZW5hbWUpO1xuICAgIGxldCBjd2QgPSBwYXRoLmh1Yi5maWxlLm9wdHMuY3dkO1xuICAgIGlmIChjd2QpIHtcbiAgICAgIGN3ZCA9IGZzLnJlc29sdmUoY3dkKTtcbiAgICAgIGZpbGVuYW1lID0gZnMucmVsYXRpdmUoY3dkLCBmaWxlbmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZpbGVuYW1lID0gJyh1bmtub3duIGZpbGUpJztcbiAgfVxuICBjb25zdCBtZXNzYWdlID0gcGF0aC5odWIuZmlsZS5idWlsZENvZGVGcmFtZUVycm9yKGUubm9kZSwgZS5tZXNzYWdlKS5tZXNzYWdlO1xuICByZXR1cm4gYCR7ZmlsZW5hbWV9OiAke21lc3NhZ2V9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uKFxuICAgIGZzOiBQYXRoTWFuaXB1bGF0aW9uLCBzdGFydFBhdGg6IE5vZGVQYXRoLCBlbmRQYXRoPzogTm9kZVBhdGgpOiDJtVNvdXJjZUxvY2F0aW9ufHVuZGVmaW5lZCB7XG4gIGNvbnN0IHN0YXJ0TG9jYXRpb24gPSBzdGFydFBhdGgubm9kZS5sb2M7XG4gIGNvbnN0IGZpbGUgPSBnZXRGaWxlRnJvbVBhdGgoZnMsIHN0YXJ0UGF0aCk7XG4gIGlmICghc3RhcnRMb2NhdGlvbiB8fCAhZmlsZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBlbmRMb2NhdGlvbiA9XG4gICAgICBlbmRQYXRoICYmIGdldEZpbGVGcm9tUGF0aChmcywgZW5kUGF0aCkgPT09IGZpbGUgJiYgZW5kUGF0aC5ub2RlLmxvYyB8fCBzdGFydExvY2F0aW9uO1xuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IGdldExpbmVBbmRDb2x1bW4oc3RhcnRMb2NhdGlvbi5zdGFydCksXG4gICAgZW5kOiBnZXRMaW5lQW5kQ29sdW1uKGVuZExvY2F0aW9uLmVuZCksXG4gICAgZmlsZSxcbiAgICB0ZXh0OiBnZXRUZXh0KHN0YXJ0UGF0aCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVMb2NhdGlvblBvc2l0aW9uKGxvY2F0aW9uOiDJtVNvdXJjZUxvY2F0aW9uKTogc3RyaW5nIHtcbiAgY29uc3QgZW5kTGluZVN0cmluZyA9IGxvY2F0aW9uLmVuZCAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLmVuZC5saW5lICE9PSBsb2NhdGlvbi5zdGFydC5saW5lID9cbiAgICAgIGAsJHtsb2NhdGlvbi5lbmQubGluZSArIDF9YCA6XG4gICAgICAnJztcbiAgcmV0dXJuIGAke2xvY2F0aW9uLnN0YXJ0LmxpbmUgKyAxfSR7ZW5kTGluZVN0cmluZ31gO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxlRnJvbVBhdGgoZnM6IFBhdGhNYW5pcHVsYXRpb24sIHBhdGg6IE5vZGVQYXRofHVuZGVmaW5lZCk6IEFic29sdXRlRnNQYXRofG51bGwge1xuICBjb25zdCBvcHRzID0gcGF0aD8uaHViLmZpbGUub3B0cztcbiAgY29uc3QgZmlsZW5hbWUgPSBvcHRzPy5maWxlbmFtZTtcbiAgaWYgKCFmaWxlbmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlbGF0aXZlUGF0aCA9IGZzLnJlbGF0aXZlKG9wdHMuY3dkLCBmaWxlbmFtZSk7XG4gIGNvbnN0IHJvb3QgPSBvcHRzLmdlbmVyYXRvck9wdHMuc291cmNlUm9vdCA/PyBvcHRzLmN3ZDtcbiAgY29uc3QgYWJzUGF0aCA9IGZzLnJlc29sdmUocm9vdCwgcmVsYXRpdmVQYXRoKTtcbiAgcmV0dXJuIGFic1BhdGg7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVBbmRDb2x1bW4obG9jOiB7bGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcn0pOiB7bGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcn0ge1xuICAvLyBOb3RlIHdlIHdhbnQgMC1iYXNlZCBsaW5lIG51bWJlcnMgYnV0IEJhYmVsIHJldHVybnMgMS1iYXNlZC5cbiAgcmV0dXJuIHtsaW5lOiBsb2MubGluZSAtIDEsIGNvbHVtbjogbG9jLmNvbHVtbn07XG59XG5cbmZ1bmN0aW9uIGdldFRleHQocGF0aDogTm9kZVBhdGgpOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgaWYgKHBhdGgubm9kZS5zdGFydCA9PT0gbnVsbCB8fCBwYXRoLm5vZGUuZW5kID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gcGF0aC5odWIuZmlsZS5jb2RlLnN1YnN0cmluZyhwYXRoLm5vZGUuc3RhcnQsIHBhdGgubm9kZS5lbmQpO1xufVxuIl19