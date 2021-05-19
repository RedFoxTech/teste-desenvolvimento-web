(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/source_files/es5_translate_plugin", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/localize/src/tools/src/source_file_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeEs5TranslatePlugin = void 0;
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
    function makeEs5TranslatePlugin(diagnostics, translations, _a, fs) {
        var _b = _a === void 0 ? {} : _a, _c = _b.missingTranslation, missingTranslation = _c === void 0 ? 'error' : _c, _d = _b.localizeName, localizeName = _d === void 0 ? '$localize' : _d;
        if (fs === void 0) { fs = file_system_1.getFileSystem(); }
        return {
            visitor: {
                CallExpression: function (callPath) {
                    try {
                        var calleePath = callPath.get('callee');
                        if (source_file_utils_1.isLocalize(calleePath, localizeName)) {
                            var _a = tslib_1.__read(source_file_utils_1.unwrapMessagePartsFromLocalizeCall(callPath, fs), 1), messageParts = _a[0];
                            var _b = tslib_1.__read(source_file_utils_1.unwrapSubstitutionsFromLocalizeCall(callPath, fs), 1), expressions = _b[0];
                            var translated = source_file_utils_1.translate(diagnostics, translations, messageParts, expressions, missingTranslation);
                            callPath.replaceWith(source_file_utils_1.buildLocalizeReplacement(translated[0], translated[1]));
                        }
                    }
                    catch (e) {
                        if (source_file_utils_1.isBabelParseError(e)) {
                            diagnostics.error(source_file_utils_1.buildCodeFrameError(fs, callPath, e));
                        }
                        else {
                            throw e;
                        }
                    }
                }
            }
        };
    }
    exports.makeEs5TranslatePlugin = makeEs5TranslatePlugin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXM1X3RyYW5zbGF0ZV9wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL3RyYW5zbGF0ZS9zb3VyY2VfZmlsZXMvZXM1X3RyYW5zbGF0ZV9wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJFQUE0RjtJQU01Rix1RkFBaU87SUFFak87Ozs7O09BS0c7SUFDSCxTQUFnQixzQkFBc0IsQ0FDbEMsV0FBd0IsRUFBRSxZQUFnRCxFQUMxRSxFQUF1RixFQUN2RixFQUFzQztZQUR0QyxxQkFBcUYsRUFBRSxLQUFBLEVBQXRGLDBCQUE0QixFQUE1QixrQkFBa0IsbUJBQUcsT0FBTyxLQUFBLEVBQUUsb0JBQTBCLEVBQTFCLFlBQVksbUJBQUcsV0FBVyxLQUFBO1FBQ3pELG1CQUFBLEVBQUEsS0FBdUIsMkJBQWEsRUFBRTtRQUN4QyxPQUFPO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBZCxVQUFlLFFBQWtDO29CQUMvQyxJQUFJO3dCQUNGLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzFDLElBQUksOEJBQVUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLEVBQUU7NEJBQ2xDLElBQUEsS0FBQSxlQUFpQixzREFBa0MsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUEsRUFBaEUsWUFBWSxRQUFvRCxDQUFDOzRCQUNsRSxJQUFBLEtBQUEsZUFBZ0IsdURBQW1DLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFBLEVBQWhFLFdBQVcsUUFBcUQsQ0FBQzs0QkFDeEUsSUFBTSxVQUFVLEdBQ1osNkJBQVMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs0QkFDeEYsUUFBUSxDQUFDLFdBQVcsQ0FBQyw0Q0FBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDOUU7cUJBQ0Y7b0JBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ1YsSUFBSSxxQ0FBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDeEIsV0FBVyxDQUFDLEtBQUssQ0FBQyx1Q0FBbUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3pEOzZCQUFNOzRCQUNMLE1BQU0sQ0FBQyxDQUFDO3lCQUNUO3FCQUNGO2dCQUNILENBQUM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBMUJELHdEQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtnZXRGaWxlU3lzdGVtLCBQYXRoTWFuaXB1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7ybVQYXJzZWRUcmFuc2xhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuaW1wb3J0IHtOb2RlUGF0aCwgUGx1Z2luT2JqfSBmcm9tICdAYmFiZWwvY29yZSc7XG5pbXBvcnQge0NhbGxFeHByZXNzaW9ufSBmcm9tICdAYmFiZWwvdHlwZXMnO1xuXG5pbXBvcnQge0RpYWdub3N0aWNzfSBmcm9tICcuLi8uLi9kaWFnbm9zdGljcyc7XG5pbXBvcnQge2J1aWxkQ29kZUZyYW1lRXJyb3IsIGJ1aWxkTG9jYWxpemVSZXBsYWNlbWVudCwgaXNCYWJlbFBhcnNlRXJyb3IsIGlzTG9jYWxpemUsIHRyYW5zbGF0ZSwgVHJhbnNsYXRlUGx1Z2luT3B0aW9ucywgdW53cmFwTWVzc2FnZVBhcnRzRnJvbUxvY2FsaXplQ2FsbCwgdW53cmFwU3Vic3RpdHV0aW9uc0Zyb21Mb2NhbGl6ZUNhbGx9IGZyb20gJy4uLy4uL3NvdXJjZV9maWxlX3V0aWxzJztcblxuLyoqXG4gKiBDcmVhdGUgYSBCYWJlbCBwbHVnaW4gdGhhdCBjYW4gYmUgdXNlZCB0byBkbyBjb21waWxlLXRpbWUgdHJhbnNsYXRpb24gb2YgYCRsb2NhbGl6ZWAgdGFnZ2VkXG4gKiBtZXNzYWdlcy5cbiAqXG4gKiBAcHVibGljQXBpIHVzZWQgYnkgQ0xJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXM1VHJhbnNsYXRlUGx1Z2luKFxuICAgIGRpYWdub3N0aWNzOiBEaWFnbm9zdGljcywgdHJhbnNsYXRpb25zOiBSZWNvcmQ8c3RyaW5nLCDJtVBhcnNlZFRyYW5zbGF0aW9uPixcbiAgICB7bWlzc2luZ1RyYW5zbGF0aW9uID0gJ2Vycm9yJywgbG9jYWxpemVOYW1lID0gJyRsb2NhbGl6ZSd9OiBUcmFuc2xhdGVQbHVnaW5PcHRpb25zID0ge30sXG4gICAgZnM6IFBhdGhNYW5pcHVsYXRpb24gPSBnZXRGaWxlU3lzdGVtKCkpOiBQbHVnaW5PYmoge1xuICByZXR1cm4ge1xuICAgIHZpc2l0b3I6IHtcbiAgICAgIENhbGxFeHByZXNzaW9uKGNhbGxQYXRoOiBOb2RlUGF0aDxDYWxsRXhwcmVzc2lvbj4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBjYWxsZWVQYXRoID0gY2FsbFBhdGguZ2V0KCdjYWxsZWUnKTtcbiAgICAgICAgICBpZiAoaXNMb2NhbGl6ZShjYWxsZWVQYXRoLCBsb2NhbGl6ZU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBbbWVzc2FnZVBhcnRzXSA9IHVud3JhcE1lc3NhZ2VQYXJ0c0Zyb21Mb2NhbGl6ZUNhbGwoY2FsbFBhdGgsIGZzKTtcbiAgICAgICAgICAgIGNvbnN0IFtleHByZXNzaW9uc10gPSB1bndyYXBTdWJzdGl0dXRpb25zRnJvbUxvY2FsaXplQ2FsbChjYWxsUGF0aCwgZnMpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKGRpYWdub3N0aWNzLCB0cmFuc2xhdGlvbnMsIG1lc3NhZ2VQYXJ0cywgZXhwcmVzc2lvbnMsIG1pc3NpbmdUcmFuc2xhdGlvbik7XG4gICAgICAgICAgICBjYWxsUGF0aC5yZXBsYWNlV2l0aChidWlsZExvY2FsaXplUmVwbGFjZW1lbnQodHJhbnNsYXRlZFswXSwgdHJhbnNsYXRlZFsxXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChpc0JhYmVsUGFyc2VFcnJvcihlKSkge1xuICAgICAgICAgICAgZGlhZ25vc3RpY3MuZXJyb3IoYnVpbGRDb2RlRnJhbWVFcnJvcihmcywgY2FsbFBhdGgsIGUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXX0=