(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translator", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Translator = void 0;
    var tslib_1 = require("tslib");
    /**
     * Translate each file (e.g. source file or static asset) using the given `TranslationHandler`s.
     * The file will be translated by the first handler that returns true for `canTranslate()`.
     */
    var Translator = /** @class */ (function () {
        function Translator(fs, resourceHandlers, diagnostics) {
            this.fs = fs;
            this.resourceHandlers = resourceHandlers;
            this.diagnostics = diagnostics;
        }
        Translator.prototype.translateFiles = function (inputPaths, rootPath, outputPathFn, translations, sourceLocale) {
            var _this = this;
            inputPaths.forEach(function (inputPath) {
                var e_1, _a;
                var absInputPath = _this.fs.resolve(rootPath, inputPath);
                var contents = _this.fs.readFileBuffer(absInputPath);
                var relativePath = _this.fs.relative(rootPath, absInputPath);
                try {
                    for (var _b = tslib_1.__values(_this.resourceHandlers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var resourceHandler = _c.value;
                        if (resourceHandler.canTranslate(relativePath, contents)) {
                            return resourceHandler.translate(_this.diagnostics, rootPath, relativePath, contents, outputPathFn, translations, sourceLocale);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.diagnostics.error("Unable to handle resource file: " + inputPath);
            });
        };
        return Translator;
    }());
    exports.Translator = Translator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvdHJhbnNsYXRlL3RyYW5zbGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQTREQTs7O09BR0c7SUFDSDtRQUNFLG9CQUNZLEVBQXNCLEVBQVUsZ0JBQXNDLEVBQ3RFLFdBQXdCO1lBRHhCLE9BQUUsR0FBRixFQUFFLENBQW9CO1lBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtZQUN0RSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFHLENBQUM7UUFFeEMsbUNBQWMsR0FBZCxVQUNJLFVBQXlCLEVBQUUsUUFBd0IsRUFBRSxZQUEwQixFQUMvRSxZQUFpQyxFQUFFLFlBQXFCO1lBRjVELGlCQWdCQztZQWJDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTOztnQkFDMUIsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUMxRCxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdEQsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDOztvQkFDOUQsS0FBOEIsSUFBQSxLQUFBLGlCQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxnQkFBQSw0QkFBRTt3QkFBaEQsSUFBTSxlQUFlLFdBQUE7d0JBQ3hCLElBQUksZUFBZSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLEVBQUU7NEJBQ3hELE9BQU8sZUFBZSxDQUFDLFNBQVMsQ0FDNUIsS0FBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUM5RSxZQUFZLENBQUMsQ0FBQzt5QkFDbkI7cUJBQ0Y7Ozs7Ozs7OztnQkFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxxQ0FBbUMsU0FBVyxDQUFDLENBQUM7WUFDekUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQUFDLEFBdEJELElBc0JDO0lBdEJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0Fic29sdXRlRnNQYXRoLCBQYXRoU2VnbWVudCwgUmVhZG9ubHlGaWxlU3lzdGVtfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7ybVNZXNzYWdlSWQsIMm1UGFyc2VkVHJhbnNsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2xvY2FsaXplJztcblxuaW1wb3J0IHtEaWFnbm9zdGljc30gZnJvbSAnLi4vZGlhZ25vc3RpY3MnO1xuXG5pbXBvcnQge091dHB1dFBhdGhGbn0gZnJvbSAnLi9vdXRwdXRfcGF0aCc7XG5cbi8qKlxuICogQW4gb2JqZWN0IHRoYXQgaG9sZHMgaW5mb3JtYXRpb24gdG8gYmUgdXNlZCB0byB0cmFuc2xhdGUgZmlsZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25CdW5kbGUge1xuICBsb2NhbGU6IHN0cmluZztcbiAgdHJhbnNsYXRpb25zOiBSZWNvcmQ8ybVNZXNzYWdlSWQsIMm1UGFyc2VkVHJhbnNsYXRpb24+O1xuICBkaWFnbm9zdGljcz86IERpYWdub3N0aWNzO1xufVxuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBwcm92aWRlIGEgY2xhc3MgdGhhdCBjYW4gaGFuZGxlIHRyYW5zbGF0aW9uIGZvciB0aGUgZ2l2ZW4gcmVzb3VyY2UgaW5cbiAqIGFuIGFwcHJvcHJpYXRlIG1hbm5lci5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgc291cmNlIGNvZGUgZmlsZXMgd2lsbCBuZWVkIHRvIGJlIHRyYW5zZm9ybWVkIGlmIHRoZXkgY29udGFpbiBgJGxvY2FsaXplYCB0YWdnZWRcbiAqIHRlbXBsYXRlIHN0cmluZ3MsIHdoaWxlIG1vc3Qgc3RhdGljIGFzc2V0cyB3aWxsIGp1c3QgbmVlZCB0byBiZSBjb3BpZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gZmlsZSBjYW4gYmUgdHJhbnNsYXRlZCBieSB0aGlzIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwYXJhbSByZWxhdGl2ZUZpbGVQYXRoIEEgcmVsYXRpdmUgcGF0aCBmcm9tIHRoZSBzb3VyY2VSb290IHRvIHRoZSByZXNvdXJjZSBmaWxlIHRvIGhhbmRsZS5cbiAgICogQHBhcmFtIGNvbnRlbnRzIFRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSB0byBoYW5kbGUuXG4gICAqL1xuICBjYW5UcmFuc2xhdGUocmVsYXRpdmVGaWxlUGF0aDogUGF0aFNlZ21lbnR8QWJzb2x1dGVGc1BhdGgsIGNvbnRlbnRzOiBVaW50OEFycmF5KTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHJhbnNsYXRlIHRoZSBmaWxlIGF0IGByZWxhdGl2ZUZpbGVQYXRoYCBjb250YWluaW5nIGBjb250ZW50c2AsIHVzaW5nIHRoZSBnaXZlbiBgdHJhbnNsYXRpb25zYCxcbiAgICogYW5kIHdyaXRlIHRoZSB0cmFuc2xhdGVkIGNvbnRlbnQgdG8gdGhlIHBhdGggY29tcHV0ZWQgYnkgY2FsbGluZyBgb3V0cHV0UGF0aEZuKClgLlxuICAgKlxuICAgKiBAcGFyYW0gZGlhZ25vc3RpY3MgQW4gb2JqZWN0IGZvciBjb2xsZWN0aW5nIHRyYW5zbGF0aW9uIGRpYWdub3N0aWMgbWVzc2FnZXMuXG4gICAqIEBwYXJhbSBzb3VyY2VSb290IEFuIGFic29sdXRlIHBhdGggdG8gdGhlIHJvb3Qgb2YgdGhlIGZpbGVzIGJlaW5nIHRyYW5zbGF0ZWQuXG4gICAqIEBwYXJhbSByZWxhdGl2ZUZpbGVQYXRoIEEgcmVsYXRpdmUgcGF0aCBmcm9tIHRoZSBzb3VyY2VSb290IHRvIHRoZSBmaWxlIHRvIHRyYW5zbGF0ZS5cbiAgICogQHBhcmFtIGNvbnRlbnRzIFRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSB0byB0cmFuc2xhdGUuXG4gICAqIEBwYXJhbSBvdXRwdXRQYXRoRm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYWJzb2x1dGUgcGF0aCB3aGVyZSB0aGUgb3V0cHV0IGZpbGUgc2hvdWxkIGJlXG4gICAqIHdyaXR0ZW4uXG4gICAqIEBwYXJhbSB0cmFuc2xhdGlvbnMgQSBjb2xsZWN0aW9uIG9mIHRyYW5zbGF0aW9ucyB0byBhcHBseSB0byB0aGlzIGZpbGUuXG4gICAqIEBwYXJhbSBzb3VyY2VMb2NhbGUgVGhlIGxvY2FsZSBvZiB0aGUgb3JpZ2luYWwgYXBwbGljYXRpb24gc291cmNlLiBJZiBwcm92aWRlZCB0aGVuIGFuXG4gICAqIGFkZGl0aW9uYWwgY29weSBvZiB0aGUgYXBwbGljYXRpb24gaXMgY3JlYXRlZCB1bmRlciB0aGlzIGxvY2FsZSBqdXN0IHdpdGggdGhlIGAkbG9jYWxpemVgIGNhbGxzXG4gICAqIHN0cmlwcGVkIG91dC5cbiAgICovXG4gIHRyYW5zbGF0ZShcbiAgICAgIGRpYWdub3N0aWNzOiBEaWFnbm9zdGljcywgc291cmNlUm9vdDogQWJzb2x1dGVGc1BhdGgsXG4gICAgICByZWxhdGl2ZUZpbGVQYXRoOiBQYXRoU2VnbWVudHxBYnNvbHV0ZUZzUGF0aCwgY29udGVudHM6IFVpbnQ4QXJyYXksXG4gICAgICBvdXRwdXRQYXRoRm46IE91dHB1dFBhdGhGbiwgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZVtdLCBzb3VyY2VMb2NhbGU/OiBzdHJpbmcpOiB2b2lkO1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSBlYWNoIGZpbGUgKGUuZy4gc291cmNlIGZpbGUgb3Igc3RhdGljIGFzc2V0KSB1c2luZyB0aGUgZ2l2ZW4gYFRyYW5zbGF0aW9uSGFuZGxlcmBzLlxuICogVGhlIGZpbGUgd2lsbCBiZSB0cmFuc2xhdGVkIGJ5IHRoZSBmaXJzdCBoYW5kbGVyIHRoYXQgcmV0dXJucyB0cnVlIGZvciBgY2FuVHJhbnNsYXRlKClgLlxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBmczogUmVhZG9ubHlGaWxlU3lzdGVtLCBwcml2YXRlIHJlc291cmNlSGFuZGxlcnM6IFRyYW5zbGF0aW9uSGFuZGxlcltdLFxuICAgICAgcHJpdmF0ZSBkaWFnbm9zdGljczogRGlhZ25vc3RpY3MpIHt9XG5cbiAgdHJhbnNsYXRlRmlsZXMoXG4gICAgICBpbnB1dFBhdGhzOiBQYXRoU2VnbWVudFtdLCByb290UGF0aDogQWJzb2x1dGVGc1BhdGgsIG91dHB1dFBhdGhGbjogT3V0cHV0UGF0aEZuLFxuICAgICAgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZVtdLCBzb3VyY2VMb2NhbGU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpbnB1dFBhdGhzLmZvckVhY2goaW5wdXRQYXRoID0+IHtcbiAgICAgIGNvbnN0IGFic0lucHV0UGF0aCA9IHRoaXMuZnMucmVzb2x2ZShyb290UGF0aCwgaW5wdXRQYXRoKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRzID0gdGhpcy5mcy5yZWFkRmlsZUJ1ZmZlcihhYnNJbnB1dFBhdGgpO1xuICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gdGhpcy5mcy5yZWxhdGl2ZShyb290UGF0aCwgYWJzSW5wdXRQYXRoKTtcbiAgICAgIGZvciAoY29uc3QgcmVzb3VyY2VIYW5kbGVyIG9mIHRoaXMucmVzb3VyY2VIYW5kbGVycykge1xuICAgICAgICBpZiAocmVzb3VyY2VIYW5kbGVyLmNhblRyYW5zbGF0ZShyZWxhdGl2ZVBhdGgsIGNvbnRlbnRzKSkge1xuICAgICAgICAgIHJldHVybiByZXNvdXJjZUhhbmRsZXIudHJhbnNsYXRlKFxuICAgICAgICAgICAgICB0aGlzLmRpYWdub3N0aWNzLCByb290UGF0aCwgcmVsYXRpdmVQYXRoLCBjb250ZW50cywgb3V0cHV0UGF0aEZuLCB0cmFuc2xhdGlvbnMsXG4gICAgICAgICAgICAgIHNvdXJjZUxvY2FsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MuZXJyb3IoYFVuYWJsZSB0byBoYW5kbGUgcmVzb3VyY2UgZmlsZTogJHtpbnB1dFBhdGh9YCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==