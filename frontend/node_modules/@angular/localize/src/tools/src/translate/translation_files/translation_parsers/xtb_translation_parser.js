(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/xtb_translation_parser", ["require", "exports", "tslib", "@angular/compiler", "path", "@angular/localize/src/tools/src/diagnostics", "@angular/localize/src/tools/src/translate/translation_files/base_visitor", "@angular/localize/src/tools/src/translate/translation_files/translation_parsers/serialize_translation_message", "@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XtbTranslationParser = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var compiler_1 = require("@angular/compiler");
    var path_1 = require("path");
    var diagnostics_1 = require("@angular/localize/src/tools/src/diagnostics");
    var base_visitor_1 = require("@angular/localize/src/tools/src/translate/translation_files/base_visitor");
    var serialize_translation_message_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/serialize_translation_message");
    var translation_utils_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_utils");
    /**
     * A translation parser that can load XTB files.
     *
     * http://cldr.unicode.org/development/development-process/design-proposals/xmb
     *
     * @see XmbTranslationSerializer
     * @publicApi used by CLI
     */
    var XtbTranslationParser = /** @class */ (function () {
        function XtbTranslationParser() {
        }
        /**
         * @deprecated
         */
        XtbTranslationParser.prototype.canParse = function (filePath, contents) {
            var result = this.analyze(filePath, contents);
            return result.canParse && result.hint;
        };
        XtbTranslationParser.prototype.analyze = function (filePath, contents) {
            var extension = path_1.extname(filePath);
            if (extension !== '.xtb' && extension !== '.xmb') {
                var diagnostics = new diagnostics_1.Diagnostics();
                diagnostics.warn('Must have xtb or xmb extension.');
                return { canParse: false, diagnostics: diagnostics };
            }
            return translation_utils_1.canParseXml(filePath, contents, 'translationbundle', {});
        };
        XtbTranslationParser.prototype.parse = function (filePath, contents, hint) {
            if (hint) {
                return this.extractBundle(hint);
            }
            else {
                return this.extractBundleDeprecated(filePath, contents);
            }
        };
        XtbTranslationParser.prototype.extractBundle = function (_a) {
            var element = _a.element, errors = _a.errors;
            var langAttr = element.attrs.find(function (attr) { return attr.name === 'lang'; });
            var bundle = {
                locale: langAttr && langAttr.value,
                translations: {},
                diagnostics: new diagnostics_1.Diagnostics()
            };
            errors.forEach(function (e) { return translation_utils_1.addParseError(bundle.diagnostics, e); });
            var bundleVisitor = new XtbVisitor();
            compiler_1.visitAll(bundleVisitor, element.children, bundle);
            return bundle;
        };
        XtbTranslationParser.prototype.extractBundleDeprecated = function (filePath, contents) {
            var hint = this.canParse(filePath, contents);
            if (!hint) {
                throw new Error("Unable to parse \"" + filePath + "\" as XMB/XTB format.");
            }
            var bundle = this.extractBundle(hint);
            if (bundle.diagnostics.hasErrors) {
                var message = bundle.diagnostics.formatDiagnostics("Failed to parse \"" + filePath + "\" as XMB/XTB format");
                throw new Error(message);
            }
            return bundle;
        };
        return XtbTranslationParser;
    }());
    exports.XtbTranslationParser = XtbTranslationParser;
    var XtbVisitor = /** @class */ (function (_super) {
        tslib_1.__extends(XtbVisitor, _super);
        function XtbVisitor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        XtbVisitor.prototype.visitElement = function (element, bundle) {
            switch (element.name) {
                case 'translation':
                    // Error if no `id` attribute
                    var id = translation_utils_1.getAttribute(element, 'id');
                    if (id === undefined) {
                        translation_utils_1.addParseDiagnostic(bundle.diagnostics, element.sourceSpan, "Missing required \"id\" attribute on <translation> element.", compiler_1.ParseErrorLevel.ERROR);
                        return;
                    }
                    // Error if there is already a translation with the same id
                    if (bundle.translations[id] !== undefined) {
                        translation_utils_1.addParseDiagnostic(bundle.diagnostics, element.sourceSpan, "Duplicated translations for message \"" + id + "\"", compiler_1.ParseErrorLevel.ERROR);
                        return;
                    }
                    var _a = serialize_translation_message_1.serializeTranslationMessage(element, { inlineElements: [], placeholder: { elementName: 'ph', nameAttribute: 'name' } }), translation = _a.translation, parseErrors = _a.parseErrors, serializeErrors = _a.serializeErrors;
                    if (parseErrors.length) {
                        // We only want to warn (not error) if there were problems parsing the translation for
                        // XTB formatted files. See https://github.com/angular/angular/issues/14046.
                        bundle.diagnostics.warn(computeParseWarning(id, parseErrors));
                    }
                    else if (translation !== null) {
                        // Only store the translation if there were no parse errors
                        bundle.translations[id] = translation;
                    }
                    translation_utils_1.addErrorsToBundle(bundle, serializeErrors);
                    break;
                default:
                    translation_utils_1.addParseDiagnostic(bundle.diagnostics, element.sourceSpan, "Unexpected <" + element.name + "> tag.", compiler_1.ParseErrorLevel.ERROR);
            }
        };
        return XtbVisitor;
    }(base_visitor_1.BaseVisitor));
    function computeParseWarning(id, errors) {
        var msg = errors.map(function (e) { return e.toString(); }).join('\n');
        return "Could not parse message with id \"" + id + "\" - perhaps it has an unrecognised ICU format?\n" +
            msg;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHRiX3RyYW5zbGF0aW9uX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvdHJhbnNsYXRlL3RyYW5zbGF0aW9uX2ZpbGVzL3RyYW5zbGF0aW9uX3BhcnNlcnMveHRiX3RyYW5zbGF0aW9uX3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsOENBQWlGO0lBQ2pGLDZCQUE2QjtJQUU3QiwyRUFBaUQ7SUFDakQseUdBQTRDO0lBRTVDLCtKQUE0RTtJQUU1RSx1SUFBOEk7SUFHOUk7Ozs7Ozs7T0FPRztJQUNIO1FBQUE7UUF1REEsQ0FBQztRQXREQzs7V0FFRztRQUNILHVDQUFRLEdBQVIsVUFBUyxRQUFnQixFQUFFLFFBQWdCO1lBQ3pDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hDLENBQUM7UUFFRCxzQ0FBTyxHQUFQLFVBQVEsUUFBZ0IsRUFBRSxRQUFnQjtZQUN4QyxJQUFNLFNBQVMsR0FBRyxjQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBSSxTQUFTLEtBQUssTUFBTSxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7Z0JBQ2hELElBQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO2dCQUN0QyxXQUFXLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsYUFBQSxFQUFDLENBQUM7YUFDdkM7WUFDRCxPQUFPLCtCQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxF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O0lBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtFbGVtZW50LCBQYXJzZUVycm9yLCBQYXJzZUVycm9yTGV2ZWwsIHZpc2l0QWxsfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge2V4dG5hbWV9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQge0RpYWdub3N0aWNzfSBmcm9tICcuLi8uLi8uLi9kaWFnbm9zdGljcyc7XG5pbXBvcnQge0Jhc2VWaXNpdG9yfSBmcm9tICcuLi9iYXNlX3Zpc2l0b3InO1xuXG5pbXBvcnQge3NlcmlhbGl6ZVRyYW5zbGF0aW9uTWVzc2FnZX0gZnJvbSAnLi9zZXJpYWxpemVfdHJhbnNsYXRpb25fbWVzc2FnZSc7XG5pbXBvcnQge1BhcnNlQW5hbHlzaXMsIFBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlLCBUcmFuc2xhdGlvblBhcnNlcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9wYXJzZXInO1xuaW1wb3J0IHthZGRFcnJvcnNUb0J1bmRsZSwgYWRkUGFyc2VEaWFnbm9zdGljLCBhZGRQYXJzZUVycm9yLCBjYW5QYXJzZVhtbCwgZ2V0QXR0cmlidXRlLCBYbWxUcmFuc2xhdGlvblBhcnNlckhpbnR9IGZyb20gJy4vdHJhbnNsYXRpb25fdXRpbHMnO1xuXG5cbi8qKlxuICogQSB0cmFuc2xhdGlvbiBwYXJzZXIgdGhhdCBjYW4gbG9hZCBYVEIgZmlsZXMuXG4gKlxuICogaHR0cDovL2NsZHIudW5pY29kZS5vcmcvZGV2ZWxvcG1lbnQvZGV2ZWxvcG1lbnQtcHJvY2Vzcy9kZXNpZ24tcHJvcG9zYWxzL3htYlxuICpcbiAqIEBzZWUgWG1iVHJhbnNsYXRpb25TZXJpYWxpemVyXG4gKiBAcHVibGljQXBpIHVzZWQgYnkgQ0xJXG4gKi9cbmV4cG9ydCBjbGFzcyBYdGJUcmFuc2xhdGlvblBhcnNlciBpbXBsZW1lbnRzIFRyYW5zbGF0aW9uUGFyc2VyPFhtbFRyYW5zbGF0aW9uUGFyc2VySGludD4ge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGNhblBhcnNlKGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcpOiBYbWxUcmFuc2xhdGlvblBhcnNlckhpbnR8ZmFsc2Uge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYW5hbHl6ZShmaWxlUGF0aCwgY29udGVudHMpO1xuICAgIHJldHVybiByZXN1bHQuY2FuUGFyc2UgJiYgcmVzdWx0LmhpbnQ7XG4gIH1cblxuICBhbmFseXplKGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcpOiBQYXJzZUFuYWx5c2lzPFhtbFRyYW5zbGF0aW9uUGFyc2VySGludD4ge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dG5hbWUoZmlsZVBhdGgpO1xuICAgIGlmIChleHRlbnNpb24gIT09ICcueHRiJyAmJiBleHRlbnNpb24gIT09ICcueG1iJykge1xuICAgICAgY29uc3QgZGlhZ25vc3RpY3MgPSBuZXcgRGlhZ25vc3RpY3MoKTtcbiAgICAgIGRpYWdub3N0aWNzLndhcm4oJ011c3QgaGF2ZSB4dGIgb3IgeG1iIGV4dGVuc2lvbi4nKTtcbiAgICAgIHJldHVybiB7Y2FuUGFyc2U6IGZhbHNlLCBkaWFnbm9zdGljc307XG4gICAgfVxuICAgIHJldHVybiBjYW5QYXJzZVhtbChmaWxlUGF0aCwgY29udGVudHMsICd0cmFuc2xhdGlvbmJ1bmRsZScsIHt9KTtcbiAgfVxuXG4gIHBhcnNlKGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcsIGhpbnQ/OiBYbWxUcmFuc2xhdGlvblBhcnNlckhpbnQpOlxuICAgICAgUGFyc2VkVHJhbnNsYXRpb25CdW5kbGUge1xuICAgIGlmIChoaW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5leHRyYWN0QnVuZGxlKGhpbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5leHRyYWN0QnVuZGxlRGVwcmVjYXRlZChmaWxlUGF0aCwgY29udGVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdEJ1bmRsZSh7ZWxlbWVudCwgZXJyb3JzfTogWG1sVHJhbnNsYXRpb25QYXJzZXJIaW50KTogUGFyc2VkVHJhbnNsYXRpb25CdW5kbGUge1xuICAgIGNvbnN0IGxhbmdBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09ICdsYW5nJyk7XG4gICAgY29uc3QgYnVuZGxlOiBQYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZSA9IHtcbiAgICAgIGxvY2FsZTogbGFuZ0F0dHIgJiYgbGFuZ0F0dHIudmFsdWUsXG4gICAgICB0cmFuc2xhdGlvbnM6IHt9LFxuICAgICAgZGlhZ25vc3RpY3M6IG5ldyBEaWFnbm9zdGljcygpXG4gICAgfTtcbiAgICBlcnJvcnMuZm9yRWFjaChlID0+IGFkZFBhcnNlRXJyb3IoYnVuZGxlLmRpYWdub3N0aWNzLCBlKSk7XG5cbiAgICBjb25zdCBidW5kbGVWaXNpdG9yID0gbmV3IFh0YlZpc2l0b3IoKTtcbiAgICB2aXNpdEFsbChidW5kbGVWaXNpdG9yLCBlbGVtZW50LmNoaWxkcmVuLCBidW5kbGUpO1xuICAgIHJldHVybiBidW5kbGU7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RCdW5kbGVEZXByZWNhdGVkKGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBoaW50ID0gdGhpcy5jYW5QYXJzZShmaWxlUGF0aCwgY29udGVudHMpO1xuICAgIGlmICghaGludCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gcGFyc2UgXCIke2ZpbGVQYXRofVwiIGFzIFhNQi9YVEIgZm9ybWF0LmApO1xuICAgIH1cbiAgICBjb25zdCBidW5kbGUgPSB0aGlzLmV4dHJhY3RCdW5kbGUoaGludCk7XG4gICAgaWYgKGJ1bmRsZS5kaWFnbm9zdGljcy5oYXNFcnJvcnMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICAgIGJ1bmRsZS5kaWFnbm9zdGljcy5mb3JtYXREaWFnbm9zdGljcyhgRmFpbGVkIHRvIHBhcnNlIFwiJHtmaWxlUGF0aH1cIiBhcyBYTUIvWFRCIGZvcm1hdGApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gYnVuZGxlO1xuICB9XG59XG5cbmNsYXNzIFh0YlZpc2l0b3IgZXh0ZW5kcyBCYXNlVmlzaXRvciB7XG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBFbGVtZW50LCBidW5kbGU6IFBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlKTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSAndHJhbnNsYXRpb24nOlxuICAgICAgICAvLyBFcnJvciBpZiBubyBgaWRgIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCBpZCA9IGdldEF0dHJpYnV0ZShlbGVtZW50LCAnaWQnKTtcbiAgICAgICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhZGRQYXJzZURpYWdub3N0aWMoXG4gICAgICAgICAgICAgIGJ1bmRsZS5kaWFnbm9zdGljcywgZWxlbWVudC5zb3VyY2VTcGFuLFxuICAgICAgICAgICAgICBgTWlzc2luZyByZXF1aXJlZCBcImlkXCIgYXR0cmlidXRlIG9uIDx0cmFuc2xhdGlvbj4gZWxlbWVudC5gLCBQYXJzZUVycm9yTGV2ZWwuRVJST1IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVycm9yIGlmIHRoZXJlIGlzIGFscmVhZHkgYSB0cmFuc2xhdGlvbiB3aXRoIHRoZSBzYW1lIGlkXG4gICAgICAgIGlmIChidW5kbGUudHJhbnNsYXRpb25zW2lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYWRkUGFyc2VEaWFnbm9zdGljKFxuICAgICAgICAgICAgICBidW5kbGUuZGlhZ25vc3RpY3MsIGVsZW1lbnQuc291cmNlU3BhbiwgYER1cGxpY2F0ZWQgdHJhbnNsYXRpb25zIGZvciBtZXNzYWdlIFwiJHtpZH1cImAsXG4gICAgICAgICAgICAgIFBhcnNlRXJyb3JMZXZlbC5FUlJPUik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3RyYW5zbGF0aW9uLCBwYXJzZUVycm9ycywgc2VyaWFsaXplRXJyb3JzfSA9IHNlcmlhbGl6ZVRyYW5zbGF0aW9uTWVzc2FnZShcbiAgICAgICAgICAgIGVsZW1lbnQsIHtpbmxpbmVFbGVtZW50czogW10sIHBsYWNlaG9sZGVyOiB7ZWxlbWVudE5hbWU6ICdwaCcsIG5hbWVBdHRyaWJ1dGU6ICduYW1lJ319KTtcbiAgICAgICAgaWYgKHBhcnNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byB3YXJuIChub3QgZXJyb3IpIGlmIHRoZXJlIHdlcmUgcHJvYmxlbXMgcGFyc2luZyB0aGUgdHJhbnNsYXRpb24gZm9yXG4gICAgICAgICAgLy8gWFRCIGZvcm1hdHRlZCBmaWxlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0MDQ2LlxuICAgICAgICAgIGJ1bmRsZS5kaWFnbm9zdGljcy53YXJuKGNvbXB1dGVQYXJzZVdhcm5pbmcoaWQsIHBhcnNlRXJyb3JzKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBPbmx5IHN0b3JlIHRoZSB0cmFuc2xhdGlvbiBpZiB0aGVyZSB3ZXJlIG5vIHBhcnNlIGVycm9yc1xuICAgICAgICAgIGJ1bmRsZS50cmFuc2xhdGlvbnNbaWRdID0gdHJhbnNsYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgYWRkRXJyb3JzVG9CdW5kbGUoYnVuZGxlLCBzZXJpYWxpemVFcnJvcnMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWRkUGFyc2VEaWFnbm9zdGljKFxuICAgICAgICAgICAgYnVuZGxlLmRpYWdub3N0aWNzLCBlbGVtZW50LnNvdXJjZVNwYW4sIGBVbmV4cGVjdGVkIDwke2VsZW1lbnQubmFtZX0+IHRhZy5gLFxuICAgICAgICAgICAgUGFyc2VFcnJvckxldmVsLkVSUk9SKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZVBhcnNlV2FybmluZyhpZDogc3RyaW5nLCBlcnJvcnM6IFBhcnNlRXJyb3JbXSk6IHN0cmluZyB7XG4gIGNvbnN0IG1zZyA9IGVycm9ycy5tYXAoZSA9PiBlLnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpO1xuICByZXR1cm4gYENvdWxkIG5vdCBwYXJzZSBtZXNzYWdlIHdpdGggaWQgXCIke2lkfVwiIC0gcGVyaGFwcyBpdCBoYXMgYW4gdW5yZWNvZ25pc2VkIElDVSBmb3JtYXQ/XFxuYCArXG4gICAgICBtc2c7XG59XG4iXX0=