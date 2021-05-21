(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/arb_translation_parser", ["require", "exports", "tslib", "@angular/localize", "@angular/localize/src/tools/src/diagnostics"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArbTranslationParser = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var localize_1 = require("@angular/localize");
    var diagnostics_1 = require("@angular/localize/src/tools/src/diagnostics");
    /**
     * A translation parser that can parse JSON formatted as an Application Resource Bundle (ARB).
     *
     * See https://github.com/google/app-resource-bundle/wiki/ApplicationResourceBundleSpecification
     *
     * ```
     * {
     *   "@@locale": "en-US",
     *   "message-id": "Target message string",
     *   "@message-id": {
     *     "type": "text",
     *     "description": "Some description text",
     *     "x-locations": [
     *       {
     *         "start": {"line": 23, "column": 145},
     *         "end": {"line": 24, "column": 53},
     *         "file": "some/file.ts"
     *       },
     *       ...
     *     ]
     *   },
     *   ...
     * }
     * ```
     */
    var ArbTranslationParser = /** @class */ (function () {
        function ArbTranslationParser() {
        }
        /**
         * @deprecated
         */
        ArbTranslationParser.prototype.canParse = function (filePath, contents) {
            var result = this.analyze(filePath, contents);
            return result.canParse && result.hint;
        };
        ArbTranslationParser.prototype.analyze = function (_filePath, contents) {
            var diagnostics = new diagnostics_1.Diagnostics();
            if (!contents.includes('"@@locale"')) {
                return { canParse: false, diagnostics: diagnostics };
            }
            try {
                // We can parse this file if it is valid JSON and contains the `"@@locale"` property.
                return { canParse: true, diagnostics: diagnostics, hint: this.tryParseArbFormat(contents) };
            }
            catch (_a) {
                diagnostics.warn('File is not valid JSON.');
                return { canParse: false, diagnostics: diagnostics };
            }
        };
        ArbTranslationParser.prototype.parse = function (_filePath, contents, arb) {
            var e_1, _a;
            if (arb === void 0) { arb = this.tryParseArbFormat(contents); }
            var bundle = {
                locale: arb['@@locale'],
                translations: {},
                diagnostics: new diagnostics_1.Diagnostics()
            };
            try {
                for (var _b = tslib_1.__values(Object.keys(arb)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var messageId = _c.value;
                    if (messageId.startsWith('@')) {
                        // Skip metadata keys
                        continue;
                    }
                    var targetMessage = arb[messageId];
                    bundle.translations[messageId] = localize_1.ɵparseTranslation(targetMessage);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return bundle;
        };
        ArbTranslationParser.prototype.tryParseArbFormat = function (contents) {
            var json = JSON.parse(contents);
            if (typeof json['@@locale'] !== 'string') {
                throw new Error('Missing @@locale property.');
            }
            return json;
        };
        return ArbTranslationParser;
    }());
    exports.ArbTranslationParser = ArbTranslationParser;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJiX3RyYW5zbGF0aW9uX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvdHJhbnNsYXRlL3RyYW5zbGF0aW9uX2ZpbGVzL3RyYW5zbGF0aW9uX3BhcnNlcnMvYXJiX3RyYW5zbGF0aW9uX3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsOENBQWlHO0lBQ2pHLDJFQUFpRDtJQW1CakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXdCRztJQUNIO1FBQUE7UUFpREEsQ0FBQztRQWhEQzs7V0FFRztRQUNILHVDQUFRLEdBQVIsVUFBUyxRQUFnQixFQUFFLFFBQWdCO1lBQ3pDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hDLENBQUM7UUFFRCxzQ0FBTyxHQUFQLFVBQVEsU0FBaUIsRUFBRSxRQUFnQjtZQUN6QyxJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxhQUFBLEVBQUMsQ0FBQzthQUN2QztZQUNELElBQUk7Z0JBQ0YscUZBQXFGO2dCQUNyRixPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLGFBQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7YUFDOUU7WUFBQyxXQUFNO2dCQUNOLFdBQVcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxhQUFBLEVBQUMsQ0FBQzthQUN2QztRQUNILENBQUM7UUFFRCxvQ0FBSyxHQUFMLFVBQU0sU0FBaUIsRUFBRSxRQUFnQixFQUFFLEdBQXFEOztZQUFyRCxvQkFBQSxFQUFBLE1BQXFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFFOUYsSUFBTSxNQUFNLEdBQTRCO2dCQUN0QyxNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLFdBQVcsRUFBRSxJQUFJLHlCQUFXLEVBQUU7YUFDL0IsQ0FBQzs7Z0JBRUYsS0FBd0IsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQXJDLElBQU0sU0FBUyxXQUFBO29CQUNsQixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzdCLHFCQUFxQjt3QkFDckIsU0FBUztxQkFDVjtvQkFDRCxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFXLENBQUM7b0JBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsNEJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ25FOzs7Ozs7Ozs7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRU8sZ0RBQWlCLEdBQXpCLFVBQTBCLFFBQWdCO1lBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFrQixDQUFDO1lBQ25ELElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDL0M7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDSCwyQkFBQztJQUFELENBQUMsQUFqREQsSUFpREM7SUFqRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge8m1TWVzc2FnZUlkLCDJtXBhcnNlVHJhbnNsYXRpb24sIMm1U291cmNlTG9jYXRpb24sIMm1U291cmNlTWVzc2FnZX0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuaW1wb3J0IHtEaWFnbm9zdGljc30gZnJvbSAnLi4vLi4vLi4vZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHtQYXJzZUFuYWx5c2lzLCBQYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZSwgVHJhbnNsYXRpb25QYXJzZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fcGFyc2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBBcmJKc29uT2JqZWN0IGV4dGVuZHMgUmVjb3JkPMm1TWVzc2FnZUlkLCDJtVNvdXJjZU1lc3NhZ2V8QXJiTWV0YWRhdGE+IHtcbiAgJ0BAbG9jYWxlJzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFyYk1ldGFkYXRhIHtcbiAgdHlwZT86ICd0ZXh0J3wnaW1hZ2UnfCdjc3MnO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgWyd4LWxvY2F0aW9ucyddPzogQXJiTG9jYXRpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmJMb2NhdGlvbiB7XG4gIHN0YXJ0OiB7bGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcn07XG4gIGVuZDoge2xpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXJ9O1xuICBmaWxlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSB0cmFuc2xhdGlvbiBwYXJzZXIgdGhhdCBjYW4gcGFyc2UgSlNPTiBmb3JtYXR0ZWQgYXMgYW4gQXBwbGljYXRpb24gUmVzb3VyY2UgQnVuZGxlIChBUkIpLlxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2FwcC1yZXNvdXJjZS1idW5kbGUvd2lraS9BcHBsaWNhdGlvblJlc291cmNlQnVuZGxlU3BlY2lmaWNhdGlvblxuICpcbiAqIGBgYFxuICoge1xuICogICBcIkBAbG9jYWxlXCI6IFwiZW4tVVNcIixcbiAqICAgXCJtZXNzYWdlLWlkXCI6IFwiVGFyZ2V0IG1lc3NhZ2Ugc3RyaW5nXCIsXG4gKiAgIFwiQG1lc3NhZ2UtaWRcIjoge1xuICogICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAqICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU29tZSBkZXNjcmlwdGlvbiB0ZXh0XCIsXG4gKiAgICAgXCJ4LWxvY2F0aW9uc1wiOiBbXG4gKiAgICAgICB7XG4gKiAgICAgICAgIFwic3RhcnRcIjoge1wibGluZVwiOiAyMywgXCJjb2x1bW5cIjogMTQ1fSxcbiAqICAgICAgICAgXCJlbmRcIjoge1wibGluZVwiOiAyNCwgXCJjb2x1bW5cIjogNTN9LFxuICogICAgICAgICBcImZpbGVcIjogXCJzb21lL2ZpbGUudHNcIlxuICogICAgICAgfSxcbiAqICAgICAgIC4uLlxuICogICAgIF1cbiAqICAgfSxcbiAqICAgLi4uXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIEFyYlRyYW5zbGF0aW9uUGFyc2VyIGltcGxlbWVudHMgVHJhbnNsYXRpb25QYXJzZXI8QXJiSnNvbk9iamVjdD4ge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGNhblBhcnNlKGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcpOiBBcmJKc29uT2JqZWN0fGZhbHNlIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmFuYWx5emUoZmlsZVBhdGgsIGNvbnRlbnRzKTtcbiAgICByZXR1cm4gcmVzdWx0LmNhblBhcnNlICYmIHJlc3VsdC5oaW50O1xuICB9XG5cbiAgYW5hbHl6ZShfZmlsZVBhdGg6IHN0cmluZywgY29udGVudHM6IHN0cmluZyk6IFBhcnNlQW5hbHlzaXM8QXJiSnNvbk9iamVjdD4ge1xuICAgIGNvbnN0IGRpYWdub3N0aWNzID0gbmV3IERpYWdub3N0aWNzKCk7XG4gICAgaWYgKCFjb250ZW50cy5pbmNsdWRlcygnXCJAQGxvY2FsZVwiJykpIHtcbiAgICAgIHJldHVybiB7Y2FuUGFyc2U6IGZhbHNlLCBkaWFnbm9zdGljc307XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyBXZSBjYW4gcGFyc2UgdGhpcyBmaWxlIGlmIGl0IGlzIHZhbGlkIEpTT04gYW5kIGNvbnRhaW5zIHRoZSBgXCJAQGxvY2FsZVwiYCBwcm9wZXJ0eS5cbiAgICAgIHJldHVybiB7Y2FuUGFyc2U6IHRydWUsIGRpYWdub3N0aWNzLCBoaW50OiB0aGlzLnRyeVBhcnNlQXJiRm9ybWF0KGNvbnRlbnRzKX07XG4gICAgfSBjYXRjaCB7XG4gICAgICBkaWFnbm9zdGljcy53YXJuKCdGaWxlIGlzIG5vdCB2YWxpZCBKU09OLicpO1xuICAgICAgcmV0dXJuIHtjYW5QYXJzZTogZmFsc2UsIGRpYWdub3N0aWNzfTtcbiAgICB9XG4gIH1cblxuICBwYXJzZShfZmlsZVBhdGg6IHN0cmluZywgY29udGVudHM6IHN0cmluZywgYXJiOiBBcmJKc29uT2JqZWN0ID0gdGhpcy50cnlQYXJzZUFyYkZvcm1hdChjb250ZW50cykpOlxuICAgICAgUGFyc2VkVHJhbnNsYXRpb25CdW5kbGUge1xuICAgIGNvbnN0IGJ1bmRsZTogUGFyc2VkVHJhbnNsYXRpb25CdW5kbGUgPSB7XG4gICAgICBsb2NhbGU6IGFyYlsnQEBsb2NhbGUnXSxcbiAgICAgIHRyYW5zbGF0aW9uczoge30sXG4gICAgICBkaWFnbm9zdGljczogbmV3IERpYWdub3N0aWNzKClcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBtZXNzYWdlSWQgb2YgT2JqZWN0LmtleXMoYXJiKSkge1xuICAgICAgaWYgKG1lc3NhZ2VJZC5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgLy8gU2tpcCBtZXRhZGF0YSBrZXlzXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0TWVzc2FnZSA9IGFyYlttZXNzYWdlSWRdIGFzIHN0cmluZztcbiAgICAgIGJ1bmRsZS50cmFuc2xhdGlvbnNbbWVzc2FnZUlkXSA9IMm1cGFyc2VUcmFuc2xhdGlvbih0YXJnZXRNZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1bmRsZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5UGFyc2VBcmJGb3JtYXQoY29udGVudHM6IHN0cmluZyk6IEFyYkpzb25PYmplY3Qge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGNvbnRlbnRzKSBhcyBBcmJKc29uT2JqZWN0O1xuICAgIGlmICh0eXBlb2YganNvblsnQEBsb2NhbGUnXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBAQGxvY2FsZSBwcm9wZXJ0eS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGpzb247XG4gIH1cbn1cbiJdfQ==