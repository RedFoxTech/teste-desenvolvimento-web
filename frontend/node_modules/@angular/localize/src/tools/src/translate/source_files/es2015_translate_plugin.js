(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/source_files/es2015_translate_plugin", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/localize/src/tools/src/source_file_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeEs2015TranslatePlugin = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var source_file_utils_1 = require("@angular/localize/src/tools/src/source_file_utils");
    /**
     * Create a Babel plugin that can be used to do compile-time translation of `$localize` tagged
     * messages.
     *
     * @publicApi used by CLI
     */
    function makeEs2015TranslatePlugin(diagnostics, translations, _a, fs) {
        var _b = _a === void 0 ? {} : _a, _c = _b.missingTranslation, missingTranslation = _c === void 0 ? 'error' : _c, _d = _b.localizeName, localizeName = _d === void 0 ? '$localize' : _d;
        if (fs === void 0) { fs = file_system_1.getFileSystem(); }
        return {
            visitor: {
                TaggedTemplateExpression: function (path) {
                    try {
                        var tag = path.get('tag');
                        if (source_file_utils_1.isLocalize(tag, localizeName)) {
                            var _a = tslib_1.__read(source_file_utils_1.unwrapMessagePartsFromTemplateLiteral(path.get('quasi').get('quasis'), fs), 1), messageParts = _a[0];
                            var translated = source_file_utils_1.translate(diagnostics, translations, messageParts, path.node.quasi.expressions, missingTranslation);
                            path.replaceWith(source_file_utils_1.buildLocalizeReplacement(translated[0], translated[1]));
                        }
                    }
                    catch (e) {
                        if (source_file_utils_1.isBabelParseError(e)) {
                            // If we get a BabelParseError here then something went wrong with Babel itself
                            // since there must be something wrong with the structure of the AST generated
                            // by Babel parsing a TaggedTemplateExpression.
                            throw source_file_utils_1.buildCodeFrameError(fs, path, e);
                        }
                        else {
                            throw e;
                        }
                    }
                }
            }
        };
    }
    exports.makeEs2015TranslatePlugin = makeEs2015TranslatePlugin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMyMDE1X3RyYW5zbGF0ZV9wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL3RyYW5zbGF0ZS9zb3VyY2VfZmlsZXMvZXMyMDE1X3RyYW5zbGF0ZV9wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJFQUE0RjtJQU01Rix1RkFBK0w7SUFFL0w7Ozs7O09BS0c7SUFDSCxTQUFnQix5QkFBeUIsQ0FDckMsV0FBd0IsRUFBRSxZQUFnRCxFQUMxRSxFQUF1RixFQUN2RixFQUFzQztZQUR0QyxxQkFBcUYsRUFBRSxLQUFBLEVBQXRGLDBCQUE0QixFQUE1QixrQkFBa0IsbUJBQUcsT0FBTyxLQUFBLEVBQUUsb0JBQTBCLEVBQTFCLFlBQVksbUJBQUcsV0FBVyxLQUFBO1FBQ3pELG1CQUFBLEVBQUEsS0FBdUIsMkJBQWEsRUFBRTtRQUN4QyxPQUFPO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLHdCQUF3QixFQUF4QixVQUF5QixJQUF3QztvQkFDL0QsSUFBSTt3QkFDRixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM1QixJQUFJLDhCQUFVLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFOzRCQUMzQixJQUFBLEtBQUEsZUFDRix5REFBcUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBQSxFQUR2RSxZQUFZLFFBQzJELENBQUM7NEJBQy9FLElBQU0sVUFBVSxHQUFHLDZCQUFTLENBQ3hCLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFDcEUsa0JBQWtCLENBQUMsQ0FBQzs0QkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0Q0FBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDMUU7cUJBQ0Y7b0JBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ1YsSUFBSSxxQ0FBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDeEIsK0VBQStFOzRCQUMvRSw4RUFBOEU7NEJBQzlFLCtDQUErQzs0QkFDL0MsTUFBTSx1Q0FBbUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUN4Qzs2QkFBTTs0QkFDTCxNQUFNLENBQUMsQ0FBQzt5QkFDVDtxQkFDRjtnQkFDSCxDQUFDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQTlCRCw4REE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Z2V0RmlsZVN5c3RlbSwgUGF0aE1hbmlwdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge8m1UGFyc2VkVHJhbnNsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2xvY2FsaXplJztcbmltcG9ydCB7Tm9kZVBhdGgsIFBsdWdpbk9ian0gZnJvbSAnQGJhYmVsL2NvcmUnO1xuaW1wb3J0IHtUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb259IGZyb20gJ0BiYWJlbC90eXBlcyc7XG5cbmltcG9ydCB7RGlhZ25vc3RpY3N9IGZyb20gJy4uLy4uL2RpYWdub3N0aWNzJztcbmltcG9ydCB7YnVpbGRDb2RlRnJhbWVFcnJvciwgYnVpbGRMb2NhbGl6ZVJlcGxhY2VtZW50LCBpc0JhYmVsUGFyc2VFcnJvciwgaXNMb2NhbGl6ZSwgdHJhbnNsYXRlLCBUcmFuc2xhdGVQbHVnaW5PcHRpb25zLCB1bndyYXBNZXNzYWdlUGFydHNGcm9tVGVtcGxhdGVMaXRlcmFsfSBmcm9tICcuLi8uLi9zb3VyY2VfZmlsZV91dGlscyc7XG5cbi8qKlxuICogQ3JlYXRlIGEgQmFiZWwgcGx1Z2luIHRoYXQgY2FuIGJlIHVzZWQgdG8gZG8gY29tcGlsZS10aW1lIHRyYW5zbGF0aW9uIG9mIGAkbG9jYWxpemVgIHRhZ2dlZFxuICogbWVzc2FnZXMuXG4gKlxuICogQHB1YmxpY0FwaSB1c2VkIGJ5IENMSVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVzMjAxNVRyYW5zbGF0ZVBsdWdpbihcbiAgICBkaWFnbm9zdGljczogRGlhZ25vc3RpY3MsIHRyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgybVQYXJzZWRUcmFuc2xhdGlvbj4sXG4gICAge21pc3NpbmdUcmFuc2xhdGlvbiA9ICdlcnJvcicsIGxvY2FsaXplTmFtZSA9ICckbG9jYWxpemUnfTogVHJhbnNsYXRlUGx1Z2luT3B0aW9ucyA9IHt9LFxuICAgIGZzOiBQYXRoTWFuaXB1bGF0aW9uID0gZ2V0RmlsZVN5c3RlbSgpKTogUGx1Z2luT2JqIHtcbiAgcmV0dXJuIHtcbiAgICB2aXNpdG9yOiB7XG4gICAgICBUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb24ocGF0aDogTm9kZVBhdGg8VGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uPikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHRhZyA9IHBhdGguZ2V0KCd0YWcnKTtcbiAgICAgICAgICBpZiAoaXNMb2NhbGl6ZSh0YWcsIGxvY2FsaXplTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IFttZXNzYWdlUGFydHNdID1cbiAgICAgICAgICAgICAgICB1bndyYXBNZXNzYWdlUGFydHNGcm9tVGVtcGxhdGVMaXRlcmFsKHBhdGguZ2V0KCdxdWFzaScpLmdldCgncXVhc2lzJyksIGZzKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWQgPSB0cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgZGlhZ25vc3RpY3MsIHRyYW5zbGF0aW9ucywgbWVzc2FnZVBhcnRzLCBwYXRoLm5vZGUucXVhc2kuZXhwcmVzc2lvbnMsXG4gICAgICAgICAgICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgIHBhdGgucmVwbGFjZVdpdGgoYnVpbGRMb2NhbGl6ZVJlcGxhY2VtZW50KHRyYW5zbGF0ZWRbMF0sIHRyYW5zbGF0ZWRbMV0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoaXNCYWJlbFBhcnNlRXJyb3IoZSkpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGdldCBhIEJhYmVsUGFyc2VFcnJvciBoZXJlIHRoZW4gc29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBCYWJlbCBpdHNlbGZcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZXJlIG11c3QgYmUgc29tZXRoaW5nIHdyb25nIHdpdGggdGhlIHN0cnVjdHVyZSBvZiB0aGUgQVNUIGdlbmVyYXRlZFxuICAgICAgICAgICAgLy8gYnkgQmFiZWwgcGFyc2luZyBhIFRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvbi5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ29kZUZyYW1lRXJyb3IoZnMsIHBhdGgsIGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==