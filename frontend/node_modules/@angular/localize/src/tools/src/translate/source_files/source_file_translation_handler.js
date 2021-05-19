(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/source_files/source_file_translation_handler", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@babel/core", "@angular/localize/src/tools/src/translate/source_files/es2015_translate_plugin", "@angular/localize/src/tools/src/translate/source_files/es5_translate_plugin", "@angular/localize/src/tools/src/translate/source_files/locale_plugin"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SourceFileTranslationHandler = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var core_1 = require("@babel/core");
    var es2015_translate_plugin_1 = require("@angular/localize/src/tools/src/translate/source_files/es2015_translate_plugin");
    var es5_translate_plugin_1 = require("@angular/localize/src/tools/src/translate/source_files/es5_translate_plugin");
    var locale_plugin_1 = require("@angular/localize/src/tools/src/translate/source_files/locale_plugin");
    /**
     * Translate a file by inlining all messages tagged by `$localize` with the appropriate translated
     * message.
     */
    var SourceFileTranslationHandler = /** @class */ (function () {
        function SourceFileTranslationHandler(fs, translationOptions) {
            if (translationOptions === void 0) { translationOptions = {}; }
            this.fs = fs;
            this.translationOptions = translationOptions;
            this.sourceLocaleOptions = tslib_1.__assign(tslib_1.__assign({}, this.translationOptions), { missingTranslation: 'ignore' });
        }
        SourceFileTranslationHandler.prototype.canTranslate = function (relativeFilePath, _contents) {
            return this.fs.extname(relativeFilePath) === '.js';
        };
        SourceFileTranslationHandler.prototype.translate = function (diagnostics, sourceRoot, relativeFilePath, contents, outputPathFn, translations, sourceLocale) {
            var e_1, _a, e_2, _b;
            var sourceCode = Buffer.from(contents).toString('utf8');
            // A short-circuit check to avoid parsing the file into an AST if it does not contain any
            // `$localize` identifiers.
            if (!sourceCode.includes('$localize')) {
                try {
                    for (var translations_1 = tslib_1.__values(translations), translations_1_1 = translations_1.next(); !translations_1_1.done; translations_1_1 = translations_1.next()) {
                        var translation = translations_1_1.value;
                        this.writeSourceFile(diagnostics, outputPathFn, translation.locale, relativeFilePath, contents);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (translations_1_1 && !translations_1_1.done && (_a = translations_1.return)) _a.call(translations_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (sourceLocale !== undefined) {
                    this.writeSourceFile(diagnostics, outputPathFn, sourceLocale, relativeFilePath, contents);
                }
            }
            else {
                var ast = core_1.parseSync(sourceCode, { sourceRoot: sourceRoot, filename: relativeFilePath });
                if (!ast) {
                    diagnostics.error("Unable to parse source file: " + this.fs.join(sourceRoot, relativeFilePath));
                    return;
                }
                try {
                    // Output a translated copy of the file for each locale.
                    for (var translations_2 = tslib_1.__values(translations), translations_2_1 = translations_2.next(); !translations_2_1.done; translations_2_1 = translations_2.next()) {
                        var translationBundle = translations_2_1.value;
                        this.translateFile(diagnostics, ast, translationBundle, sourceRoot, relativeFilePath, outputPathFn, this.translationOptions);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (translations_2_1 && !translations_2_1.done && (_b = translations_2.return)) _b.call(translations_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                if (sourceLocale !== undefined) {
                    // Also output a copy of the file for the source locale.
                    // There will be no translations - by definition - so we "ignore" `missingTranslations`.
                    this.translateFile(diagnostics, ast, { locale: sourceLocale, translations: {} }, sourceRoot, relativeFilePath, outputPathFn, this.sourceLocaleOptions);
                }
            }
        };
        SourceFileTranslationHandler.prototype.translateFile = function (diagnostics, ast, translationBundle, sourceRoot, filename, outputPathFn, options) {
            var translated = core_1.transformFromAstSync(ast, undefined, {
                compact: true,
                generatorOpts: { minified: true },
                plugins: [
                    locale_plugin_1.makeLocalePlugin(translationBundle.locale),
                    es2015_translate_plugin_1.makeEs2015TranslatePlugin(diagnostics, translationBundle.translations, options, this.fs),
                    es5_translate_plugin_1.makeEs5TranslatePlugin(diagnostics, translationBundle.translations, options, this.fs),
                ],
                cwd: sourceRoot,
                filename: filename,
            });
            if (translated && translated.code) {
                this.writeSourceFile(diagnostics, outputPathFn, translationBundle.locale, filename, translated.code);
                var outputPath = file_system_1.absoluteFrom(outputPathFn(translationBundle.locale, filename));
                this.fs.ensureDir(this.fs.dirname(outputPath));
                this.fs.writeFile(outputPath, translated.code);
            }
            else {
                diagnostics.error("Unable to translate source file: " + this.fs.join(sourceRoot, filename));
                return;
            }
        };
        SourceFileTranslationHandler.prototype.writeSourceFile = function (diagnostics, outputPathFn, locale, relativeFilePath, contents) {
            try {
                var outputPath = file_system_1.absoluteFrom(outputPathFn(locale, relativeFilePath));
                this.fs.ensureDir(this.fs.dirname(outputPath));
                this.fs.writeFile(outputPath, contents);
            }
            catch (e) {
                diagnostics.error(e.message);
            }
        };
        return SourceFileTranslationHandler;
    }());
    exports.SourceFileTranslationHandler = SourceFileTranslationHandler;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX2ZpbGVfdHJhbnNsYXRpb25faGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvdHJhbnNsYXRlL3NvdXJjZV9maWxlcy9zb3VyY2VfZmlsZV90cmFuc2xhdGlvbl9oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwyRUFBa0g7SUFDbEgsb0NBQTREO0lBUTVELDBIQUFvRTtJQUNwRSxvSEFBOEQ7SUFDOUQsc0dBQWlEO0lBRWpEOzs7T0FHRztJQUNIO1FBR0Usc0NBQW9CLEVBQWMsRUFBVSxrQkFBK0M7WUFBL0MsbUNBQUEsRUFBQSx1QkFBK0M7WUFBdkUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtZQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBNkI7WUFGbkYsd0JBQW1CLHlDQUNNLElBQUksQ0FBQyxrQkFBa0IsS0FBRSxrQkFBa0IsRUFBRSxRQUFRLElBQUU7UUFDTSxDQUFDO1FBRS9GLG1EQUFZLEdBQVosVUFBYSxnQkFBNEMsRUFBRSxTQUFxQjtZQUM5RSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssS0FBSyxDQUFDO1FBQ3JELENBQUM7UUFFRCxnREFBUyxHQUFULFVBQ0ksV0FBd0IsRUFBRSxVQUEwQixFQUFFLGdCQUE2QixFQUNuRixRQUFvQixFQUFFLFlBQTBCLEVBQUUsWUFBaUMsRUFDbkYsWUFBcUI7O1lBQ3ZCLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFELHlGQUF5RjtZQUN6RiwyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7O29C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LFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsV0FBVyxDQUFDLEtBQUssQ0FBQyxzQ0FBb0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBRyxDQUFDLENBQUM7Z0JBQzVGLE9BQU87YUFDUjtRQUNILENBQUM7UUFFTyxzREFBZSxHQUF2QixVQUNJLFdBQXdCLEVBQUUsWUFBMEIsRUFBRSxNQUFjLEVBQ3BFLGdCQUE2QixFQUFFLFFBQTJCO1lBQzVELElBQUk7Z0JBQ0YsSUFBTSxVQUFVLEdBQUcsMEJBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3pDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUI7UUFDSCxDQUFDO1FBQ0gsbUNBQUM7SUFBRCxDQUFDLEFBckZELElBcUZDO0lBckZZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHthYnNvbHV0ZUZyb20sIEFic29sdXRlRnNQYXRoLCBGaWxlU3lzdGVtLCBQYXRoU2VnbWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge3BhcnNlU3luYywgdHJhbnNmb3JtRnJvbUFzdFN5bmN9IGZyb20gJ0BiYWJlbC9jb3JlJztcbmltcG9ydCB7RmlsZSwgUHJvZ3JhbX0gZnJvbSAnQGJhYmVsL3R5cGVzJztcblxuaW1wb3J0IHtEaWFnbm9zdGljc30gZnJvbSAnLi4vLi4vZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHtUcmFuc2xhdGVQbHVnaW5PcHRpb25zfSBmcm9tICcuLi8uLi9zb3VyY2VfZmlsZV91dGlscyc7XG5pbXBvcnQge091dHB1dFBhdGhGbn0gZnJvbSAnLi4vb3V0cHV0X3BhdGgnO1xuaW1wb3J0IHtUcmFuc2xhdGlvbkJ1bmRsZSwgVHJhbnNsYXRpb25IYW5kbGVyfSBmcm9tICcuLi90cmFuc2xhdG9yJztcblxuaW1wb3J0IHttYWtlRXMyMDE1VHJhbnNsYXRlUGx1Z2lufSBmcm9tICcuL2VzMjAxNV90cmFuc2xhdGVfcGx1Z2luJztcbmltcG9ydCB7bWFrZUVzNVRyYW5zbGF0ZVBsdWdpbn0gZnJvbSAnLi9lczVfdHJhbnNsYXRlX3BsdWdpbic7XG5pbXBvcnQge21ha2VMb2NhbGVQbHVnaW59IGZyb20gJy4vbG9jYWxlX3BsdWdpbic7XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgZmlsZSBieSBpbmxpbmluZyBhbGwgbWVzc2FnZXMgdGFnZ2VkIGJ5IGAkbG9jYWxpemVgIHdpdGggdGhlIGFwcHJvcHJpYXRlIHRyYW5zbGF0ZWRcbiAqIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBTb3VyY2VGaWxlVHJhbnNsYXRpb25IYW5kbGVyIGltcGxlbWVudHMgVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgcHJpdmF0ZSBzb3VyY2VMb2NhbGVPcHRpb25zOlxuICAgICAgVHJhbnNsYXRlUGx1Z2luT3B0aW9ucyA9IHsuLi50aGlzLnRyYW5zbGF0aW9uT3B0aW9ucywgbWlzc2luZ1RyYW5zbGF0aW9uOiAnaWdub3JlJ307XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZnM6IEZpbGVTeXN0ZW0sIHByaXZhdGUgdHJhbnNsYXRpb25PcHRpb25zOiBUcmFuc2xhdGVQbHVnaW5PcHRpb25zID0ge30pIHt9XG5cbiAgY2FuVHJhbnNsYXRlKHJlbGF0aXZlRmlsZVBhdGg6IFBhdGhTZWdtZW50fEFic29sdXRlRnNQYXRoLCBfY29udGVudHM6IFVpbnQ4QXJyYXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mcy5leHRuYW1lKHJlbGF0aXZlRmlsZVBhdGgpID09PSAnLmpzJztcbiAgfVxuXG4gIHRyYW5zbGF0ZShcbiAgICAgIGRpYWdub3N0aWNzOiBEaWFnbm9zdGljcywgc291cmNlUm9vdDogQWJzb2x1dGVGc1BhdGgsIHJlbGF0aXZlRmlsZVBhdGg6IFBhdGhTZWdtZW50LFxuICAgICAgY29udGVudHM6IFVpbnQ4QXJyYXksIG91dHB1dFBhdGhGbjogT3V0cHV0UGF0aEZuLCB0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uQnVuZGxlW10sXG4gICAgICBzb3VyY2VMb2NhbGU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBzb3VyY2VDb2RlID0gQnVmZmVyLmZyb20oY29udGVudHMpLnRvU3RyaW5nKCd1dGY4Jyk7XG4gICAgLy8gQSBzaG9ydC1jaXJjdWl0IGNoZWNrIHRvIGF2b2lkIHBhcnNpbmcgdGhlIGZpbGUgaW50byBhbiBBU1QgaWYgaXQgZG9lcyBub3QgY29udGFpbiBhbnlcbiAgICAvLyBgJGxvY2FsaXplYCBpZGVudGlmaWVycy5cbiAgICBpZiAoIXNvdXJjZUNvZGUuaW5jbHVkZXMoJyRsb2NhbGl6ZScpKSB7XG4gICAgICBmb3IgKGNvbnN0IHRyYW5zbGF0aW9uIG9mIHRyYW5zbGF0aW9ucykge1xuICAgICAgICB0aGlzLndyaXRlU291cmNlRmlsZShcbiAgICAgICAgICAgIGRpYWdub3N0aWNzLCBvdXRwdXRQYXRoRm4sIHRyYW5zbGF0aW9uLmxvY2FsZSwgcmVsYXRpdmVGaWxlUGF0aCwgY29udGVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHNvdXJjZUxvY2FsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud3JpdGVTb3VyY2VGaWxlKGRpYWdub3N0aWNzLCBvdXRwdXRQYXRoRm4sIHNvdXJjZUxvY2FsZSwgcmVsYXRpdmVGaWxlUGF0aCwgY29udGVudHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhc3QgPSBwYXJzZVN5bmMoc291cmNlQ29kZSwge3NvdXJjZVJvb3QsIGZpbGVuYW1lOiByZWxhdGl2ZUZpbGVQYXRofSk7XG4gICAgICBpZiAoIWFzdCkge1xuICAgICAgICBkaWFnbm9zdGljcy5lcnJvcihcbiAgICAgICAgICAgIGBVbmFibGUgdG8gcGFyc2Ugc291cmNlIGZpbGU6ICR7dGhpcy5mcy5qb2luKHNvdXJjZVJvb3QsIHJlbGF0aXZlRmlsZVBhdGgpfWApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBPdXRwdXQgYSB0cmFuc2xhdGVkIGNvcHkgb2YgdGhlIGZpbGUgZm9yIGVhY2ggbG9jYWxlLlxuICAgICAgZm9yIChjb25zdCB0cmFuc2xhdGlvbkJ1bmRsZSBvZiB0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVGaWxlKFxuICAgICAgICAgICAgZGlhZ25vc3RpY3MsIGFzdCwgdHJhbnNsYXRpb25CdW5kbGUsIHNvdXJjZVJvb3QsIHJlbGF0aXZlRmlsZVBhdGgsIG91dHB1dFBhdGhGbixcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25PcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3VyY2VMb2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBBbHNvIG91dHB1dCBhIGNvcHkgb2YgdGhlIGZpbGUgZm9yIHRoZSBzb3VyY2UgbG9jYWxlLlxuICAgICAgICAvLyBUaGVyZSB3aWxsIGJlIG5vIHRyYW5zbGF0aW9ucyAtIGJ5IGRlZmluaXRpb24gLSBzbyB3ZSBcImlnbm9yZVwiIGBtaXNzaW5nVHJhbnNsYXRpb25zYC5cbiAgICAgICAgdGhpcy50cmFuc2xhdGVGaWxlKFxuICAgICAgICAgICAgZGlhZ25vc3RpY3MsIGFzdCwge2xvY2FsZTogc291cmNlTG9jYWxlLCB0cmFuc2xhdGlvbnM6IHt9fSwgc291cmNlUm9vdCxcbiAgICAgICAgICAgIHJlbGF0aXZlRmlsZVBhdGgsIG91dHB1dFBhdGhGbiwgdGhpcy5zb3VyY2VMb2NhbGVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZUZpbGUoXG4gICAgICBkaWFnbm9zdGljczogRGlhZ25vc3RpY3MsIGFzdDogRmlsZXxQcm9ncmFtLCB0cmFuc2xhdGlvbkJ1bmRsZTogVHJhbnNsYXRpb25CdW5kbGUsXG4gICAgICBzb3VyY2VSb290OiBBYnNvbHV0ZUZzUGF0aCwgZmlsZW5hbWU6IFBhdGhTZWdtZW50LCBvdXRwdXRQYXRoRm46IE91dHB1dFBhdGhGbixcbiAgICAgIG9wdGlvbnM6IFRyYW5zbGF0ZVBsdWdpbk9wdGlvbnMpIHtcbiAgICBjb25zdCB0cmFuc2xhdGVkID0gdHJhbnNmb3JtRnJvbUFzdFN5bmMoYXN0LCB1bmRlZmluZWQsIHtcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBnZW5lcmF0b3JPcHRzOiB7bWluaWZpZWQ6IHRydWV9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBtYWtlTG9jYWxlUGx1Z2luKHRyYW5zbGF0aW9uQnVuZGxlLmxvY2FsZSksXG4gICAgICAgIG1ha2VFczIwMTVUcmFuc2xhdGVQbHVnaW4oZGlhZ25vc3RpY3MsIHRyYW5zbGF0aW9uQnVuZGxlLnRyYW5zbGF0aW9ucywgb3B0aW9ucywgdGhpcy5mcyksXG4gICAgICAgIG1ha2VFczVUcmFuc2xhdGVQbHVnaW4oZGlhZ25vc3RpY3MsIHRyYW5zbGF0aW9uQnVuZGxlLnRyYW5zbGF0aW9ucywgb3B0aW9ucywgdGhpcy5mcyksXG4gICAgICBdLFxuICAgICAgY3dkOiBzb3VyY2VSb290LFxuICAgICAgZmlsZW5hbWUsXG4gICAgfSk7XG4gICAgaWYgKHRyYW5zbGF0ZWQgJiYgdHJhbnNsYXRlZC5jb2RlKSB7XG4gICAgICB0aGlzLndyaXRlU291cmNlRmlsZShcbiAgICAgICAgICBkaWFnbm9zdGljcywgb3V0cHV0UGF0aEZuLCB0cmFuc2xhdGlvbkJ1bmRsZS5sb2NhbGUsIGZpbGVuYW1lLCB0cmFuc2xhdGVkLmNvZGUpO1xuICAgICAgY29uc3Qgb3V0cHV0UGF0aCA9IGFic29sdXRlRnJvbShvdXRwdXRQYXRoRm4odHJhbnNsYXRpb25CdW5kbGUubG9jYWxlLCBmaWxlbmFtZSkpO1xuICAgICAgdGhpcy5mcy5lbnN1cmVEaXIodGhpcy5mcy5kaXJuYW1lKG91dHB1dFBhdGgpKTtcbiAgICAgIHRoaXMuZnMud3JpdGVGaWxlKG91dHB1dFBhdGgsIHRyYW5zbGF0ZWQuY29kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpYWdub3N0aWNzLmVycm9yKGBVbmFibGUgdG8gdHJhbnNsYXRlIHNvdXJjZSBmaWxlOiAke3RoaXMuZnMuam9pbihzb3VyY2VSb290LCBmaWxlbmFtZSl9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZVNvdXJjZUZpbGUoXG4gICAgICBkaWFnbm9zdGljczogRGlhZ25vc3RpY3MsIG91dHB1dFBhdGhGbjogT3V0cHV0UGF0aEZuLCBsb2NhbGU6IHN0cmluZyxcbiAgICAgIHJlbGF0aXZlRmlsZVBhdGg6IFBhdGhTZWdtZW50LCBjb250ZW50czogc3RyaW5nfFVpbnQ4QXJyYXkpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3V0cHV0UGF0aCA9IGFic29sdXRlRnJvbShvdXRwdXRQYXRoRm4obG9jYWxlLCByZWxhdGl2ZUZpbGVQYXRoKSk7XG4gICAgICB0aGlzLmZzLmVuc3VyZURpcih0aGlzLmZzLmRpcm5hbWUob3V0cHV0UGF0aCkpO1xuICAgICAgdGhpcy5mcy53cml0ZUZpbGUob3V0cHV0UGF0aCwgY29udGVudHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRpYWdub3N0aWNzLmVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG4iXX0=