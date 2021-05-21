(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/asset_files/asset_translation_handler", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssetTranslationHandler = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    /**
     * Translate an asset file by simply copying it to the appropriate translation output paths.
     */
    var AssetTranslationHandler = /** @class */ (function () {
        function AssetTranslationHandler(fs) {
            this.fs = fs;
        }
        AssetTranslationHandler.prototype.canTranslate = function (_relativeFilePath, _contents) {
            return true;
        };
        AssetTranslationHandler.prototype.translate = function (diagnostics, _sourceRoot, relativeFilePath, contents, outputPathFn, translations, sourceLocale) {
            var e_1, _a;
            try {
                for (var translations_1 = tslib_1.__values(translations), translations_1_1 = translations_1.next(); !translations_1_1.done; translations_1_1 = translations_1.next()) {
                    var translation = translations_1_1.value;
                    this.writeAssetFile(diagnostics, outputPathFn, translation.locale, relativeFilePath, contents);
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
                this.writeAssetFile(diagnostics, outputPathFn, sourceLocale, relativeFilePath, contents);
            }
        };
        AssetTranslationHandler.prototype.writeAssetFile = function (diagnostics, outputPathFn, locale, relativeFilePath, contents) {
            try {
                var outputPath = file_system_1.absoluteFrom(outputPathFn(locale, relativeFilePath));
                this.fs.ensureDir(this.fs.dirname(outputPath));
                this.fs.writeFile(outputPath, contents);
            }
            catch (e) {
                diagnostics.error(e.message);
            }
        };
        return AssetTranslationHandler;
    }());
    exports.AssetTranslationHandler = AssetTranslationHandler;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRfdHJhbnNsYXRpb25faGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvdHJhbnNsYXRlL2Fzc2V0X2ZpbGVzL2Fzc2V0X3RyYW5zbGF0aW9uX2hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJFQUFrSDtJQU1sSDs7T0FFRztJQUNIO1FBQ0UsaUNBQW9CLEVBQWM7WUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQUcsQ0FBQztRQUV0Qyw4Q0FBWSxHQUFaLFVBQWEsaUJBQTZDLEVBQUUsU0FBcUI7WUFDL0UsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsMkNBQVMsR0FBVCxVQUNJLFdBQXdCLEVBQUUsV0FBMkIsRUFDckQsZ0JBQTRDLEVBQUUsUUFBb0IsRUFDbEUsWUFBMEIsRUFBRSxZQUFpQyxFQUFFLFlBQXFCOzs7Z0JBQ3RGLEtBQTBCLElBQUEsaUJBQUEsaUJBQUEsWUFBWSxDQUFBLDBDQUFBLG9FQUFFO29CQUFuQyxJQUFNLFdBQVcseUJBQUE7b0JBQ3BCLElBQUksQ0FBQyxjQUFjLENBQ2YsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUNoRjs7Ozs7Ozs7O1lBQ0QsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzFGO1FBQ0gsQ0FBQztRQUVPLGdEQUFjLEdBQXRCLFVBQ0ksV0FBd0IsRUFBRSxZQUEwQixFQUFFLE1BQWMsRUFDcEUsZ0JBQTRDLEVBQUUsUUFBb0I7WUFDcEUsSUFBSTtnQkFDRixJQUFNLFVBQVUsR0FBRywwQkFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDekM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUM7UUFDSCw4QkFBQztJQUFELENBQUMsQUEvQkQsSUErQkM7SUEvQlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2Fic29sdXRlRnJvbSwgQWJzb2x1dGVGc1BhdGgsIEZpbGVTeXN0ZW0sIFBhdGhTZWdtZW50fSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcblxuaW1wb3J0IHtEaWFnbm9zdGljc30gZnJvbSAnLi4vLi4vZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHtPdXRwdXRQYXRoRm59IGZyb20gJy4uL291dHB1dF9wYXRoJztcbmltcG9ydCB7VHJhbnNsYXRpb25CdW5kbGUsIFRyYW5zbGF0aW9uSGFuZGxlcn0gZnJvbSAnLi4vdHJhbnNsYXRvcic7XG5cbi8qKlxuICogVHJhbnNsYXRlIGFuIGFzc2V0IGZpbGUgYnkgc2ltcGx5IGNvcHlpbmcgaXQgdG8gdGhlIGFwcHJvcHJpYXRlIHRyYW5zbGF0aW9uIG91dHB1dCBwYXRocy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzc2V0VHJhbnNsYXRpb25IYW5kbGVyIGltcGxlbWVudHMgVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmczogRmlsZVN5c3RlbSkge31cblxuICBjYW5UcmFuc2xhdGUoX3JlbGF0aXZlRmlsZVBhdGg6IFBhdGhTZWdtZW50fEFic29sdXRlRnNQYXRoLCBfY29udGVudHM6IFVpbnQ4QXJyYXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHRyYW5zbGF0ZShcbiAgICAgIGRpYWdub3N0aWNzOiBEaWFnbm9zdGljcywgX3NvdXJjZVJvb3Q6IEFic29sdXRlRnNQYXRoLFxuICAgICAgcmVsYXRpdmVGaWxlUGF0aDogUGF0aFNlZ21lbnR8QWJzb2x1dGVGc1BhdGgsIGNvbnRlbnRzOiBVaW50OEFycmF5LFxuICAgICAgb3V0cHV0UGF0aEZuOiBPdXRwdXRQYXRoRm4sIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGVbXSwgc291cmNlTG9jYWxlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCB0cmFuc2xhdGlvbiBvZiB0cmFuc2xhdGlvbnMpIHtcbiAgICAgIHRoaXMud3JpdGVBc3NldEZpbGUoXG4gICAgICAgICAgZGlhZ25vc3RpY3MsIG91dHB1dFBhdGhGbiwgdHJhbnNsYXRpb24ubG9jYWxlLCByZWxhdGl2ZUZpbGVQYXRoLCBjb250ZW50cyk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VMb2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53cml0ZUFzc2V0RmlsZShkaWFnbm9zdGljcywgb3V0cHV0UGF0aEZuLCBzb3VyY2VMb2NhbGUsIHJlbGF0aXZlRmlsZVBhdGgsIGNvbnRlbnRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdyaXRlQXNzZXRGaWxlKFxuICAgICAgZGlhZ25vc3RpY3M6IERpYWdub3N0aWNzLCBvdXRwdXRQYXRoRm46IE91dHB1dFBhdGhGbiwgbG9jYWxlOiBzdHJpbmcsXG4gICAgICByZWxhdGl2ZUZpbGVQYXRoOiBQYXRoU2VnbWVudHxBYnNvbHV0ZUZzUGF0aCwgY29udGVudHM6IFVpbnQ4QXJyYXkpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3V0cHV0UGF0aCA9IGFic29sdXRlRnJvbShvdXRwdXRQYXRoRm4obG9jYWxlLCByZWxhdGl2ZUZpbGVQYXRoKSk7XG4gICAgICB0aGlzLmZzLmVuc3VyZURpcih0aGlzLmZzLmRpcm5hbWUob3V0cHV0UGF0aCkpO1xuICAgICAgdGhpcy5mcy53cml0ZUZpbGUob3V0cHV0UGF0aCwgY29udGVudHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRpYWdub3N0aWNzLmVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG4iXX0=