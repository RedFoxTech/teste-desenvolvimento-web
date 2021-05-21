/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/translation_files/format_options", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseFormatOptions = exports.validateOptions = void 0;
    /**
     * Check that the given `options` are allowed based on the given `validOptions`.
     * @param name The name of the serializer that is receiving the options.
     * @param validOptions An array of valid options and their allowed values.
     * @param options The options to be validated.
     */
    function validateOptions(name, validOptions, options) {
        var validOptionsMap = new Map(validOptions);
        for (var option in options) {
            if (!validOptionsMap.has(option)) {
                throw new Error("Invalid format option for " + name + ": \"" + option + "\".\n" +
                    ("Allowed options are " + JSON.stringify(Array.from(validOptionsMap.keys())) + "."));
            }
            var validOptionValues = validOptionsMap.get(option);
            var optionValue = options[option];
            if (!validOptionValues.includes(optionValue)) {
                throw new Error("Invalid format option value for " + name + ": \"" + option + "\".\n" +
                    ("Allowed option values are " + JSON.stringify(validOptionValues) + " but received \"" + optionValue + "\"."));
            }
        }
    }
    exports.validateOptions = validateOptions;
    /**
     * Parse the given `optionString` into a collection of `FormatOptions`.
     * @param optionString The string to parse.
     */
    function parseFormatOptions(optionString) {
        if (optionString === void 0) { optionString = '{}'; }
        return JSON.parse(optionString);
    }
    exports.parseFormatOptions = parseFormatOptions;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0X29wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2V4dHJhY3QvdHJhbnNsYXRpb25fZmlsZXMvZm9ybWF0X29wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBTUg7Ozs7O09BS0c7SUFDSCxTQUFnQixlQUFlLENBQUMsSUFBWSxFQUFFLFlBQTBCLEVBQUUsT0FBc0I7UUFDOUYsSUFBTSxlQUFlLEdBQUcsSUFBSSxHQUFHLENBQWlDLFlBQVksQ0FBQyxDQUFDO1FBQzlFLEtBQUssSUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLElBQUksS0FBSyxDQUNYLCtCQUE2QixJQUFJLFlBQU0sTUFBTSxVQUFNO3FCQUNuRCx5QkFBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQUcsQ0FBQSxDQUFDLENBQUM7YUFDbkY7WUFDRCxJQUFNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUM7WUFDdkQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzVDLE1BQU0sSUFBSSxLQUFLLENBQ1gscUNBQW1DLElBQUksWUFBTSxNQUFNLFVBQU07cUJBQ3pELCtCQUE2QixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLHdCQUMxRCxXQUFXLFFBQUksQ0FBQSxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7SUFqQkQsMENBaUJDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsWUFBMkI7UUFBM0IsNkJBQUEsRUFBQSxtQkFBMkI7UUFDNUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBa0IsQ0FBQztJQUNuRCxDQUFDO0lBRkQsZ0RBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHR5cGUgRm9ybWF0T3B0aW9ucyA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5leHBvcnQgdHlwZSBWYWxpZE9wdGlvbiA9IFtrZXk6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXV07XG5leHBvcnQgdHlwZSBWYWxpZE9wdGlvbnMgPSBWYWxpZE9wdGlvbltdO1xuXG4vKipcbiAqIENoZWNrIHRoYXQgdGhlIGdpdmVuIGBvcHRpb25zYCBhcmUgYWxsb3dlZCBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHZhbGlkT3B0aW9uc2AuXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VyaWFsaXplciB0aGF0IGlzIHJlY2VpdmluZyB0aGUgb3B0aW9ucy5cbiAqIEBwYXJhbSB2YWxpZE9wdGlvbnMgQW4gYXJyYXkgb2YgdmFsaWQgb3B0aW9ucyBhbmQgdGhlaXIgYWxsb3dlZCB2YWx1ZXMuXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byBiZSB2YWxpZGF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU9wdGlvbnMobmFtZTogc3RyaW5nLCB2YWxpZE9wdGlvbnM6IFZhbGlkT3B0aW9ucywgb3B0aW9uczogRm9ybWF0T3B0aW9ucykge1xuICBjb25zdCB2YWxpZE9wdGlvbnNNYXAgPSBuZXcgTWFwPFZhbGlkT3B0aW9uWzBdLCBWYWxpZE9wdGlvblsxXT4odmFsaWRPcHRpb25zKTtcbiAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgIGlmICghdmFsaWRPcHRpb25zTWFwLmhhcyhvcHRpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgZm9ybWF0IG9wdGlvbiBmb3IgJHtuYW1lfTogXCIke29wdGlvbn1cIi5cXG5gICtcbiAgICAgICAgICBgQWxsb3dlZCBvcHRpb25zIGFyZSAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odmFsaWRPcHRpb25zTWFwLmtleXMoKSkpfS5gKTtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRPcHRpb25WYWx1ZXMgPSB2YWxpZE9wdGlvbnNNYXAuZ2V0KG9wdGlvbikhO1xuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25dO1xuICAgIGlmICghdmFsaWRPcHRpb25WYWx1ZXMuaW5jbHVkZXMob3B0aW9uVmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgZm9ybWF0IG9wdGlvbiB2YWx1ZSBmb3IgJHtuYW1lfTogXCIke29wdGlvbn1cIi5cXG5gICtcbiAgICAgICAgICBgQWxsb3dlZCBvcHRpb24gdmFsdWVzIGFyZSAke0pTT04uc3RyaW5naWZ5KHZhbGlkT3B0aW9uVmFsdWVzKX0gYnV0IHJlY2VpdmVkIFwiJHtcbiAgICAgICAgICAgICAgb3B0aW9uVmFsdWV9XCIuYCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBvcHRpb25TdHJpbmdgIGludG8gYSBjb2xsZWN0aW9uIG9mIGBGb3JtYXRPcHRpb25zYC5cbiAqIEBwYXJhbSBvcHRpb25TdHJpbmcgVGhlIHN0cmluZyB0byBwYXJzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRm9ybWF0T3B0aW9ucyhvcHRpb25TdHJpbmc6IHN0cmluZyA9ICd7fScpOiBGb3JtYXRPcHRpb25zIHtcbiAgcmV0dXJuIEpTT04ucGFyc2Uob3B0aW9uU3RyaW5nKSBhcyBGb3JtYXRPcHRpb25zO1xufVxuIl19