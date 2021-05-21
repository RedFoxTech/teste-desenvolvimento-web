(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_parse_error", ["require", "exports", "tslib", "@angular/compiler"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationParseError = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var compiler_1 = require("@angular/compiler");
    /**
     * This error is thrown when there is a problem parsing a translation file.
     */
    var TranslationParseError = /** @class */ (function (_super) {
        tslib_1.__extends(TranslationParseError, _super);
        function TranslationParseError(span, msg, level) {
            if (level === void 0) { level = compiler_1.ParseErrorLevel.ERROR; }
            var _this = _super.call(this, contextualMessage(span, msg, level)) || this;
            _this.span = span;
            _this.msg = msg;
            _this.level = level;
            return _this;
        }
        return TranslationParseError;
    }(Error));
    exports.TranslationParseError = TranslationParseError;
    function contextualMessage(span, msg, level) {
        var ctx = span.start.getContext(100, 2);
        msg += "\nAt " + span.start + (span.details ? ", " + span.details : '') + ":\n";
        if (ctx) {
            msg += "..." + ctx.before + "[" + compiler_1.ParseErrorLevel[level] + " ->]" + ctx.after + "...\n";
        }
        return msg;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25fcGFyc2VfZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL3RyYW5zbGF0ZS90cmFuc2xhdGlvbl9maWxlcy90cmFuc2xhdGlvbl9wYXJzZXJzL3RyYW5zbGF0aW9uX3BhcnNlX2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCw4Q0FBbUU7SUFFbkU7O09BRUc7SUFDSDtRQUEyQyxpREFBSztRQUM5QywrQkFDVyxJQUFxQixFQUFTLEdBQVcsRUFDekMsS0FBOEM7WUFBOUMsc0JBQUEsRUFBQSxRQUF5QiwwQkFBZSxDQUFDLEtBQUs7WUFGekQsWUFHRSxrQkFBTSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQzNDO1lBSFUsVUFBSSxHQUFKLElBQUksQ0FBaUI7WUFBUyxTQUFHLEdBQUgsR0FBRyxDQUFRO1lBQ3pDLFdBQUssR0FBTCxLQUFLLENBQXlDOztRQUV6RCxDQUFDO1FBQ0gsNEJBQUM7SUFBRCxDQUFDLEFBTkQsQ0FBMkMsS0FBSyxHQU0vQztJQU5ZLHNEQUFxQjtJQVFsQyxTQUFTLGlCQUFpQixDQUFDLElBQXFCLEVBQUUsR0FBVyxFQUFFLEtBQXNCO1FBQ25GLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxHQUFHLElBQUksVUFBUSxJQUFJLENBQUMsS0FBSyxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQUssSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFLLENBQUM7UUFDekUsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLElBQUksUUFBTSxHQUFHLENBQUMsTUFBTSxTQUFJLDBCQUFlLENBQUMsS0FBSyxDQUFDLFlBQU8sR0FBRyxDQUFDLEtBQUssVUFBTyxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge1BhcnNlRXJyb3JMZXZlbCwgUGFyc2VTb3VyY2VTcGFufSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbi8qKlxuICogVGhpcyBlcnJvciBpcyB0aHJvd24gd2hlbiB0aGVyZSBpcyBhIHByb2JsZW0gcGFyc2luZyBhIHRyYW5zbGF0aW9uIGZpbGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvblBhcnNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHNwYW46IFBhcnNlU291cmNlU3BhbiwgcHVibGljIG1zZzogc3RyaW5nLFxuICAgICAgcHVibGljIGxldmVsOiBQYXJzZUVycm9yTGV2ZWwgPSBQYXJzZUVycm9yTGV2ZWwuRVJST1IpIHtcbiAgICBzdXBlcihjb250ZXh0dWFsTWVzc2FnZShzcGFuLCBtc2csIGxldmVsKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udGV4dHVhbE1lc3NhZ2Uoc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBtc2c6IHN0cmluZywgbGV2ZWw6IFBhcnNlRXJyb3JMZXZlbCk6IHN0cmluZyB7XG4gIGNvbnN0IGN0eCA9IHNwYW4uc3RhcnQuZ2V0Q29udGV4dCgxMDAsIDIpO1xuICBtc2cgKz0gYFxcbkF0ICR7c3Bhbi5zdGFydH0ke3NwYW4uZGV0YWlscyA/IGAsICR7c3Bhbi5kZXRhaWxzfWAgOiAnJ306XFxuYDtcbiAgaWYgKGN0eCkge1xuICAgIG1zZyArPSBgLi4uJHtjdHguYmVmb3JlfVske1BhcnNlRXJyb3JMZXZlbFtsZXZlbF19IC0+XSR7Y3R4LmFmdGVyfS4uLlxcbmA7XG4gIH1cbiAgcmV0dXJuIG1zZztcbn1cbiJdfQ==