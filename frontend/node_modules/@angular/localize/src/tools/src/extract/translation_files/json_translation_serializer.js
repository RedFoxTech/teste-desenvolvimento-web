(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/translation_files/json_translation_serializer", ["require", "exports", "tslib", "@angular/localize/src/tools/src/extract/translation_files/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SimpleJsonTranslationSerializer = void 0;
    var tslib_1 = require("tslib");
    var utils_1 = require("@angular/localize/src/tools/src/extract/translation_files/utils");
    /**
     * This is a semi-public bespoke serialization format that is used for testing and sometimes as a
     * format for storing translations that will be inlined at runtime.
     *
     * @see SimpleJsonTranslationParser
     */
    var SimpleJsonTranslationSerializer = /** @class */ (function () {
        function SimpleJsonTranslationSerializer(sourceLocale) {
            this.sourceLocale = sourceLocale;
        }
        SimpleJsonTranslationSerializer.prototype.serialize = function (messages) {
            var e_1, _a;
            var fileObj = { locale: this.sourceLocale, translations: {} };
            try {
                for (var _b = tslib_1.__values(utils_1.consolidateMessages(messages, function (message) { return message.id; })), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib_1.__read(_c.value, 1), message = _d[0];
                    fileObj.translations[message.id] = message.text;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return JSON.stringify(fileObj, null, 2);
        };
        return SimpleJsonTranslationSerializer;
    }());
    exports.SimpleJsonTranslationSerializer = SimpleJsonTranslationSerializer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbl90cmFuc2xhdGlvbl9zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbG9jYWxpemUvc3JjL3Rvb2xzL3NyYy9leHRyYWN0L3RyYW5zbGF0aW9uX2ZpbGVzL2pzb25fdHJhbnNsYXRpb25fc2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBU0EseUZBQTRDO0lBUTVDOzs7OztPQUtHO0lBQ0g7UUFDRSx5Q0FBb0IsWUFBb0I7WUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFBRyxDQUFDO1FBQzVDLG1EQUFTLEdBQVQsVUFBVSxRQUEwQjs7WUFDbEMsSUFBTSxPQUFPLEdBQThCLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBQyxDQUFDOztnQkFDekYsS0FBd0IsSUFBQSxLQUFBLGlCQUFBLDJCQUFtQixDQUFDLFFBQVEsRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQW5FLElBQUEsS0FBQSwyQkFBUyxFQUFSLE9BQU8sUUFBQTtvQkFDakIsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztpQkFDakQ7Ozs7Ozs7OztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDSCxzQ0FBQztJQUFELENBQUMsQUFURCxJQVNDO0lBVFksMEVBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge8m1TWVzc2FnZUlkLCDJtVBhcnNlZE1lc3NhZ2UsIMm1U291cmNlTWVzc2FnZX0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuaW1wb3J0IHtUcmFuc2xhdGlvblNlcmlhbGl6ZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fc2VyaWFsaXplcic7XG5pbXBvcnQge2NvbnNvbGlkYXRlTWVzc2FnZXN9IGZyb20gJy4vdXRpbHMnO1xuXG5cbmludGVyZmFjZSBTaW1wbGVKc29uVHJhbnNsYXRpb25GaWxlIHtcbiAgbG9jYWxlOiBzdHJpbmc7XG4gIHRyYW5zbGF0aW9uczogUmVjb3JkPMm1TWVzc2FnZUlkLCDJtVNvdXJjZU1lc3NhZ2U+O1xufVxuXG4vKipcbiAqIFRoaXMgaXMgYSBzZW1pLXB1YmxpYyBiZXNwb2tlIHNlcmlhbGl6YXRpb24gZm9ybWF0IHRoYXQgaXMgdXNlZCBmb3IgdGVzdGluZyBhbmQgc29tZXRpbWVzIGFzIGFcbiAqIGZvcm1hdCBmb3Igc3RvcmluZyB0cmFuc2xhdGlvbnMgdGhhdCB3aWxsIGJlIGlubGluZWQgYXQgcnVudGltZS5cbiAqXG4gKiBAc2VlIFNpbXBsZUpzb25UcmFuc2xhdGlvblBhcnNlclxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlSnNvblRyYW5zbGF0aW9uU2VyaWFsaXplciBpbXBsZW1lbnRzIFRyYW5zbGF0aW9uU2VyaWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlTG9jYWxlOiBzdHJpbmcpIHt9XG4gIHNlcmlhbGl6ZShtZXNzYWdlczogybVQYXJzZWRNZXNzYWdlW10pOiBzdHJpbmcge1xuICAgIGNvbnN0IGZpbGVPYmo6IFNpbXBsZUpzb25UcmFuc2xhdGlvbkZpbGUgPSB7bG9jYWxlOiB0aGlzLnNvdXJjZUxvY2FsZSwgdHJhbnNsYXRpb25zOiB7fX07XG4gICAgZm9yIChjb25zdCBbbWVzc2FnZV0gb2YgY29uc29saWRhdGVNZXNzYWdlcyhtZXNzYWdlcywgbWVzc2FnZSA9PiBtZXNzYWdlLmlkKSkge1xuICAgICAgZmlsZU9iai50cmFuc2xhdGlvbnNbbWVzc2FnZS5pZF0gPSBtZXNzYWdlLnRleHQ7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmaWxlT2JqLCBudWxsLCAyKTtcbiAgfVxufVxuIl19