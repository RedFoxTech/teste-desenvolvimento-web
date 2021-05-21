(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/translation_loader", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationLoader = void 0;
    var tslib_1 = require("tslib");
    /**
     * Use this class to load a collection of translation files from disk.
     */
    var TranslationLoader = /** @class */ (function () {
        function TranslationLoader(fs, translationParsers, duplicateTranslation, 
        /** @deprecated */ diagnostics) {
            this.fs = fs;
            this.translationParsers = translationParsers;
            this.duplicateTranslation = duplicateTranslation;
            this.diagnostics = diagnostics;
        }
        /**
         * Load and parse the translation files into a collection of `TranslationBundles`.
         *
         * @param translationFilePaths An array, per locale, of absolute paths to translation files.
         *
         * For each locale to be translated, there is an element in `translationFilePaths`. Each element
         * is an array of absolute paths to translation files for that locale.
         * If the array contains more than one translation file, then the translations are merged.
         * If allowed by the `duplicateTranslation` property, when more than one translation has the same
         * message id, the message from the earlier translation file in the array is used.
         * For example, if the files are `[app.xlf, lib-1.xlf, lib-2.xlif]` then a message that appears in
         * `app.xlf` will override the same message in `lib-1.xlf` or `lib-2.xlf`.
         *
         * @param translationFileLocales An array of locales for each of the translation files.
         *
         * If there is a locale provided in `translationFileLocales` then this is used rather than a
         * locale extracted from the file itself.
         * If there is neither a provided locale nor a locale parsed from the file, then an error is
         * thrown.
         * If there are both a provided locale and a locale parsed from the file, and they are not the
         * same, then a warning is reported.
         */
        TranslationLoader.prototype.loadBundles = function (translationFilePaths, translationFileLocales) {
            var _this = this;
            return translationFilePaths.map(function (filePaths, index) {
                var providedLocale = translationFileLocales[index];
                return _this.mergeBundles(filePaths, providedLocale);
            });
        };
        /**
         * Load all the translations from the file at the given `filePath`.
         */
        TranslationLoader.prototype.loadBundle = function (filePath, providedLocale) {
            var e_1, _a, e_2, _b;
            var fileContents = this.fs.readFile(filePath);
            var unusedParsers = new Map();
            try {
                for (var _c = tslib_1.__values(this.translationParsers), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var translationParser = _d.value;
                    var result = translationParser.analyze(filePath, fileContents);
                    if (!result.canParse) {
                        unusedParsers.set(translationParser, result);
                        continue;
                    }
                    var _e = translationParser.parse(filePath, fileContents, result.hint), parsedLocale = _e.locale, translations = _e.translations, diagnostics = _e.diagnostics;
                    if (diagnostics.hasErrors) {
                        throw new Error(diagnostics.formatDiagnostics("The translation file \"" + filePath + "\" could not be parsed."));
                    }
                    var locale = providedLocale || parsedLocale;
                    if (locale === undefined) {
                        throw new Error("The translation file \"" + filePath + "\" does not contain a target locale and no explicit locale was provided for this file.");
                    }
                    if (parsedLocale !== undefined && providedLocale !== undefined &&
                        parsedLocale !== providedLocale) {
                        diagnostics.warn("The provided locale \"" + providedLocale + "\" does not match the target locale \"" + parsedLocale + "\" found in the translation file \"" + filePath + "\".");
                    }
                    // If we were passed a diagnostics object then copy the messages over to it.
                    if (this.diagnostics) {
                        this.diagnostics.merge(diagnostics);
                    }
                    return { locale: locale, translations: translations, diagnostics: diagnostics };
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var diagnosticsMessages = [];
            try {
                for (var _f = tslib_1.__values(unusedParsers.entries()), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var _h = tslib_1.__read(_g.value, 2), parser = _h[0], result = _h[1];
                    diagnosticsMessages.push(result.diagnostics.formatDiagnostics("\n" + parser.constructor.name + " cannot parse translation file."));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            throw new Error("There is no \"TranslationParser\" that can parse this translation file: " + filePath + "." +
                diagnosticsMessages.join('\n'));
        };
        /**
         * There is more than one `filePath` for this locale, so load each as a bundle and then merge
         * them all together.
         */
        TranslationLoader.prototype.mergeBundles = function (filePaths, providedLocale) {
            var _this = this;
            var bundles = filePaths.map(function (filePath) { return _this.loadBundle(filePath, providedLocale); });
            var bundle = bundles[0];
            var _loop_1 = function (i) {
                var nextBundle = bundles[i];
                if (nextBundle.locale !== bundle.locale) {
                    if (this_1.diagnostics) {
                        var previousFiles = filePaths.slice(0, i).map(function (f) { return "\"" + f + "\""; }).join(', ');
                        this_1.diagnostics.warn("When merging multiple translation files, the target locale \"" + nextBundle.locale + "\" found in \"" + filePaths[i] + "\" does not match the target locale \"" + bundle.locale + "\" found in earlier files [" + previousFiles + "].");
                    }
                }
                Object.keys(nextBundle.translations).forEach(function (messageId) {
                    var _a;
                    if (bundle.translations[messageId] !== undefined) {
                        (_a = _this.diagnostics) === null || _a === void 0 ? void 0 : _a.add(_this.duplicateTranslation, "Duplicate translations for message \"" + messageId + "\" when merging \"" + filePaths[i] + "\".");
                    }
                    else {
                        bundle.translations[messageId] = nextBundle.translations[messageId];
                    }
                });
            };
            var this_1 = this;
            for (var i = 1; i < bundles.length; i++) {
                _loop_1(i);
            }
            return bundle;
        };
        return TranslationLoader;
    }());
    exports.TranslationLoader = TranslationLoader;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25fbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbG9jYWxpemUvc3JjL3Rvb2xzL3NyYy90cmFuc2xhdGUvdHJhbnNsYXRpb25fZmlsZXMvdHJhbnNsYXRpb25fbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFhQTs7T0FFRztJQUNIO1FBQ0UsMkJBQ1ksRUFBc0IsRUFBVSxrQkFBNEMsRUFDNUUsb0JBQWdEO1FBQ3hELGtCQUFrQixDQUFTLFdBQXlCO1lBRjVDLE9BQUUsR0FBRixFQUFFLENBQW9CO1lBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwQjtZQUM1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO1lBQzdCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQUcsQ0FBQztRQUU1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBcUJHO1FBQ0gsdUNBQVcsR0FBWCxVQUNJLG9CQUF3QyxFQUN4QyxzQkFBNEM7WUFGaEQsaUJBT0M7WUFKQyxPQUFPLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxVQUFDLFNBQVMsRUFBRSxLQUFLO2dCQUMvQyxJQUFNLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNLLHNDQUFVLEdBQWxCLFVBQW1CLFFBQXdCLEVBQUUsY0FBZ0M7O1lBRTNFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELElBQU0sYUFBYSxHQUFHLElBQUksR0FBRyxFQUE4QyxDQUFDOztnQkFDNUUsS0FBZ0MsSUFBQSxLQUFBLGlCQUFBLElBQUks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Q0FBQyxJQUFJLE9BQUEsT0FBSSxDQUFDLE9BQUcsRUFBUixDQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFFLE9BQUssV0FBVyxDQUFDLElBQUksQ0FBQyxrRUFDbEIsVUFBVSxDQUFDLE1BQU0sc0JBQWUsU0FBUyxDQUFDLENBQUMsQ0FBQyw4Q0FDNUMsTUFBTSxDQUFDLE1BQU0sbUNBQTZCLGFBQWEsT0FBSSxDQUFDLENBQUM7cUJBQ2xFO2lCQUNGO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7O29CQUNwRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxFQUFFO3dCQUNoRCxNQUFBLEtBQUksQ0FBQyxXQUFXLDBDQUFFLEdBQUcsQ0FDakIsS0FBSSxDQUFDLG9CQUFvQixFQUN6QiwwQ0FBdUMsU0FBUywwQkFBbUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFJLEVBQUU7cUJBQzFGO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDckU7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7OztZQWxCTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQTlCLENBQUM7YUFtQlQ7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQUFDLEFBdkhELElBdUhDO0lBdkhZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgUmVhZG9ubHlGaWxlU3lzdGVtfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7RGlhZ25vc3RpY0hhbmRsaW5nU3RyYXRlZ3ksIERpYWdub3N0aWNzfSBmcm9tICcuLi8uLi9kaWFnbm9zdGljcyc7XG5pbXBvcnQge1RyYW5zbGF0aW9uQnVuZGxlfSBmcm9tICcuLi90cmFuc2xhdG9yJztcblxuaW1wb3J0IHtQYXJzZUFuYWx5c2lzLCBUcmFuc2xhdGlvblBhcnNlcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9wYXJzZXJzL3RyYW5zbGF0aW9uX3BhcnNlcic7XG5cbi8qKlxuICogVXNlIHRoaXMgY2xhc3MgdG8gbG9hZCBhIGNvbGxlY3Rpb24gb2YgdHJhbnNsYXRpb24gZmlsZXMgZnJvbSBkaXNrLlxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25Mb2FkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgZnM6IFJlYWRvbmx5RmlsZVN5c3RlbSwgcHJpdmF0ZSB0cmFuc2xhdGlvblBhcnNlcnM6IFRyYW5zbGF0aW9uUGFyc2VyPGFueT5bXSxcbiAgICAgIHByaXZhdGUgZHVwbGljYXRlVHJhbnNsYXRpb246IERpYWdub3N0aWNIYW5kbGluZ1N0cmF0ZWd5LFxuICAgICAgLyoqIEBkZXByZWNhdGVkICovIHByaXZhdGUgZGlhZ25vc3RpY3M/OiBEaWFnbm9zdGljcykge31cblxuICAvKipcbiAgICogTG9hZCBhbmQgcGFyc2UgdGhlIHRyYW5zbGF0aW9uIGZpbGVzIGludG8gYSBjb2xsZWN0aW9uIG9mIGBUcmFuc2xhdGlvbkJ1bmRsZXNgLlxuICAgKlxuICAgKiBAcGFyYW0gdHJhbnNsYXRpb25GaWxlUGF0aHMgQW4gYXJyYXksIHBlciBsb2NhbGUsIG9mIGFic29sdXRlIHBhdGhzIHRvIHRyYW5zbGF0aW9uIGZpbGVzLlxuICAgKlxuICAgKiBGb3IgZWFjaCBsb2NhbGUgdG8gYmUgdHJhbnNsYXRlZCwgdGhlcmUgaXMgYW4gZWxlbWVudCBpbiBgdHJhbnNsYXRpb25GaWxlUGF0aHNgLiBFYWNoIGVsZW1lbnRcbiAgICogaXMgYW4gYXJyYXkgb2YgYWJzb2x1dGUgcGF0aHMgdG8gdHJhbnNsYXRpb24gZmlsZXMgZm9yIHRoYXQgbG9jYWxlLlxuICAgKiBJZiB0aGUgYXJyYXkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSB0cmFuc2xhdGlvbiBmaWxlLCB0aGVuIHRoZSB0cmFuc2xhdGlvbnMgYXJlIG1lcmdlZC5cbiAgICogSWYgYWxsb3dlZCBieSB0aGUgYGR1cGxpY2F0ZVRyYW5zbGF0aW9uYCBwcm9wZXJ0eSwgd2hlbiBtb3JlIHRoYW4gb25lIHRyYW5zbGF0aW9uIGhhcyB0aGUgc2FtZVxuICAgKiBtZXNzYWdlIGlkLCB0aGUgbWVzc2FnZSBmcm9tIHRoZSBlYXJsaWVyIHRyYW5zbGF0aW9uIGZpbGUgaW4gdGhlIGFycmF5IGlzIHVzZWQuXG4gICAqIEZvciBleGFtcGxlLCBpZiB0aGUgZmlsZXMgYXJlIGBbYXBwLnhsZiwgbGliLTEueGxmLCBsaWItMi54bGlmXWAgdGhlbiBhIG1lc3NhZ2UgdGhhdCBhcHBlYXJzIGluXG4gICAqIGBhcHAueGxmYCB3aWxsIG92ZXJyaWRlIHRoZSBzYW1lIG1lc3NhZ2UgaW4gYGxpYi0xLnhsZmAgb3IgYGxpYi0yLnhsZmAuXG4gICAqXG4gICAqIEBwYXJhbSB0cmFuc2xhdGlvbkZpbGVMb2NhbGVzIEFuIGFycmF5IG9mIGxvY2FsZXMgZm9yIGVhY2ggb2YgdGhlIHRyYW5zbGF0aW9uIGZpbGVzLlxuICAgKlxuICAgKiBJZiB0aGVyZSBpcyBhIGxvY2FsZSBwcm92aWRlZCBpbiBgdHJhbnNsYXRpb25GaWxlTG9jYWxlc2AgdGhlbiB0aGlzIGlzIHVzZWQgcmF0aGVyIHRoYW4gYVxuICAgKiBsb2NhbGUgZXh0cmFjdGVkIGZyb20gdGhlIGZpbGUgaXRzZWxmLlxuICAgKiBJZiB0aGVyZSBpcyBuZWl0aGVyIGEgcHJvdmlkZWQgbG9jYWxlIG5vciBhIGxvY2FsZSBwYXJzZWQgZnJvbSB0aGUgZmlsZSwgdGhlbiBhbiBlcnJvciBpc1xuICAgKiB0aHJvd24uXG4gICAqIElmIHRoZXJlIGFyZSBib3RoIGEgcHJvdmlkZWQgbG9jYWxlIGFuZCBhIGxvY2FsZSBwYXJzZWQgZnJvbSB0aGUgZmlsZSwgYW5kIHRoZXkgYXJlIG5vdCB0aGVcbiAgICogc2FtZSwgdGhlbiBhIHdhcm5pbmcgaXMgcmVwb3J0ZWQuXG4gICAqL1xuICBsb2FkQnVuZGxlcyhcbiAgICAgIHRyYW5zbGF0aW9uRmlsZVBhdGhzOiBBYnNvbHV0ZUZzUGF0aFtdW10sXG4gICAgICB0cmFuc2xhdGlvbkZpbGVMb2NhbGVzOiAoc3RyaW5nfHVuZGVmaW5lZClbXSk6IFRyYW5zbGF0aW9uQnVuZGxlW10ge1xuICAgIHJldHVybiB0cmFuc2xhdGlvbkZpbGVQYXRocy5tYXAoKGZpbGVQYXRocywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVkTG9jYWxlID0gdHJhbnNsYXRpb25GaWxlTG9jYWxlc1tpbmRleF07XG4gICAgICByZXR1cm4gdGhpcy5tZXJnZUJ1bmRsZXMoZmlsZVBhdGhzLCBwcm92aWRlZExvY2FsZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBhbGwgdGhlIHRyYW5zbGF0aW9ucyBmcm9tIHRoZSBmaWxlIGF0IHRoZSBnaXZlbiBgZmlsZVBhdGhgLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkQnVuZGxlKGZpbGVQYXRoOiBBYnNvbHV0ZUZzUGF0aCwgcHJvdmlkZWRMb2NhbGU6IHN0cmluZ3x1bmRlZmluZWQpOlxuICAgICAgVHJhbnNsYXRpb25CdW5kbGUge1xuICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IHRoaXMuZnMucmVhZEZpbGUoZmlsZVBhdGgpO1xuICAgIGNvbnN0IHVudXNlZFBhcnNlcnMgPSBuZXcgTWFwPFRyYW5zbGF0aW9uUGFyc2VyPGFueT4sIFBhcnNlQW5hbHlzaXM8YW55Pj4oKTtcbiAgICBmb3IgKGNvbnN0IHRyYW5zbGF0aW9uUGFyc2VyIG9mIHRoaXMudHJhbnNsYXRpb25QYXJzZXJzKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0cmFuc2xhdGlvblBhcnNlci5hbmFseXplKGZpbGVQYXRoLCBmaWxlQ29udGVudHMpO1xuICAgICAgaWYgKCFyZXN1bHQuY2FuUGFyc2UpIHtcbiAgICAgICAgdW51c2VkUGFyc2Vycy5zZXQodHJhbnNsYXRpb25QYXJzZXIsIHJlc3VsdCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7bG9jYWxlOiBwYXJzZWRMb2NhbGUsIHRyYW5zbGF0aW9ucywgZGlhZ25vc3RpY3N9ID1cbiAgICAgICAgICB0cmFuc2xhdGlvblBhcnNlci5wYXJzZShmaWxlUGF0aCwgZmlsZUNvbnRlbnRzLCByZXN1bHQuaGludCk7XG4gICAgICBpZiAoZGlhZ25vc3RpY3MuaGFzRXJyb3JzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihkaWFnbm9zdGljcy5mb3JtYXREaWFnbm9zdGljcyhcbiAgICAgICAgICAgIGBUaGUgdHJhbnNsYXRpb24gZmlsZSBcIiR7ZmlsZVBhdGh9XCIgY291bGQgbm90IGJlIHBhcnNlZC5gKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvY2FsZSA9IHByb3ZpZGVkTG9jYWxlIHx8IHBhcnNlZExvY2FsZTtcbiAgICAgIGlmIChsb2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0cmFuc2xhdGlvbiBmaWxlIFwiJHtcbiAgICAgICAgICAgIGZpbGVQYXRofVwiIGRvZXMgbm90IGNvbnRhaW4gYSB0YXJnZXQgbG9jYWxlIGFuZCBubyBleHBsaWNpdCBsb2NhbGUgd2FzIHByb3ZpZGVkIGZvciB0aGlzIGZpbGUuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJzZWRMb2NhbGUgIT09IHVuZGVmaW5lZCAmJiBwcm92aWRlZExvY2FsZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgcGFyc2VkTG9jYWxlICE9PSBwcm92aWRlZExvY2FsZSkge1xuICAgICAgICBkaWFnbm9zdGljcy53YXJuKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBsb2NhbGUgXCIke3Byb3ZpZGVkTG9jYWxlfVwiIGRvZXMgbm90IG1hdGNoIHRoZSB0YXJnZXQgbG9jYWxlIFwiJHtcbiAgICAgICAgICAgICAgICBwYXJzZWRMb2NhbGV9XCIgZm91bmQgaW4gdGhlIHRyYW5zbGF0aW9uIGZpbGUgXCIke2ZpbGVQYXRofVwiLmApO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSB3ZXJlIHBhc3NlZCBhIGRpYWdub3N0aWNzIG9iamVjdCB0aGVuIGNvcHkgdGhlIG1lc3NhZ2VzIG92ZXIgdG8gaXQuXG4gICAgICBpZiAodGhpcy5kaWFnbm9zdGljcykge1xuICAgICAgICB0aGlzLmRpYWdub3N0aWNzLm1lcmdlKGRpYWdub3N0aWNzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtsb2NhbGUsIHRyYW5zbGF0aW9ucywgZGlhZ25vc3RpY3N9O1xuICAgIH1cblxuICAgIGNvbnN0IGRpYWdub3N0aWNzTWVzc2FnZXM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBbcGFyc2VyLCByZXN1bHRdIG9mIHVudXNlZFBhcnNlcnMuZW50cmllcygpKSB7XG4gICAgICBkaWFnbm9zdGljc01lc3NhZ2VzLnB1c2gocmVzdWx0LmRpYWdub3N0aWNzLmZvcm1hdERpYWdub3N0aWNzKFxuICAgICAgICAgIGBcXG4ke3BhcnNlci5jb25zdHJ1Y3Rvci5uYW1lfSBjYW5ub3QgcGFyc2UgdHJhbnNsYXRpb24gZmlsZS5gKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoZXJlIGlzIG5vIFwiVHJhbnNsYXRpb25QYXJzZXJcIiB0aGF0IGNhbiBwYXJzZSB0aGlzIHRyYW5zbGF0aW9uIGZpbGU6ICR7ZmlsZVBhdGh9LmAgK1xuICAgICAgICBkaWFnbm9zdGljc01lc3NhZ2VzLmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGVyZSBpcyBtb3JlIHRoYW4gb25lIGBmaWxlUGF0aGAgZm9yIHRoaXMgbG9jYWxlLCBzbyBsb2FkIGVhY2ggYXMgYSBidW5kbGUgYW5kIHRoZW4gbWVyZ2VcbiAgICogdGhlbSBhbGwgdG9nZXRoZXIuXG4gICAqL1xuICBwcml2YXRlIG1lcmdlQnVuZGxlcyhmaWxlUGF0aHM6IEFic29sdXRlRnNQYXRoW10sIHByb3ZpZGVkTG9jYWxlOiBzdHJpbmd8dW5kZWZpbmVkKTpcbiAgICAgIFRyYW5zbGF0aW9uQnVuZGxlIHtcbiAgICBjb25zdCBidW5kbGVzID0gZmlsZVBhdGhzLm1hcChmaWxlUGF0aCA9PiB0aGlzLmxvYWRCdW5kbGUoZmlsZVBhdGgsIHByb3ZpZGVkTG9jYWxlKSk7XG4gICAgY29uc3QgYnVuZGxlID0gYnVuZGxlc1swXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGJ1bmRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5leHRCdW5kbGUgPSBidW5kbGVzW2ldO1xuICAgICAgaWYgKG5leHRCdW5kbGUubG9jYWxlICE9PSBidW5kbGUubG9jYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmRpYWdub3N0aWNzKSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNGaWxlcyA9IGZpbGVQYXRocy5zbGljZSgwLCBpKS5tYXAoZiA9PiBgXCIke2Z9XCJgKS5qb2luKCcsICcpO1xuICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3Mud2FybihgV2hlbiBtZXJnaW5nIG11bHRpcGxlIHRyYW5zbGF0aW9uIGZpbGVzLCB0aGUgdGFyZ2V0IGxvY2FsZSBcIiR7XG4gICAgICAgICAgICAgIG5leHRCdW5kbGUubG9jYWxlfVwiIGZvdW5kIGluIFwiJHtmaWxlUGF0aHNbaV19XCIgZG9lcyBub3QgbWF0Y2ggdGhlIHRhcmdldCBsb2NhbGUgXCIke1xuICAgICAgICAgICAgICBidW5kbGUubG9jYWxlfVwiIGZvdW5kIGluIGVhcmxpZXIgZmlsZXMgWyR7cHJldmlvdXNGaWxlc31dLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhuZXh0QnVuZGxlLnRyYW5zbGF0aW9ucykuZm9yRWFjaChtZXNzYWdlSWQgPT4ge1xuICAgICAgICBpZiAoYnVuZGxlLnRyYW5zbGF0aW9uc1ttZXNzYWdlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmRpYWdub3N0aWNzPy5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuZHVwbGljYXRlVHJhbnNsYXRpb24sXG4gICAgICAgICAgICAgIGBEdXBsaWNhdGUgdHJhbnNsYXRpb25zIGZvciBtZXNzYWdlIFwiJHttZXNzYWdlSWR9XCIgd2hlbiBtZXJnaW5nIFwiJHtmaWxlUGF0aHNbaV19XCIuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVuZGxlLnRyYW5zbGF0aW9uc1ttZXNzYWdlSWRdID0gbmV4dEJ1bmRsZS50cmFuc2xhdGlvbnNbbWVzc2FnZUlkXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBidW5kbGU7XG4gIH1cbn1cbiJdfQ==