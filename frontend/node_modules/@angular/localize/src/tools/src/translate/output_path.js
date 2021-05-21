(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/output_path", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOutputPathFn = void 0;
    var tslib_1 = require("tslib");
    /**
     * Create a function that will compute the absolute path to where a translated file should be
     * written.
     *
     * The special `{{LOCALE}}` marker will be replaced with the locale code of the current translation.
     * @param outputFolder An absolute path to the folder containing this set of translations.
     */
    function getOutputPathFn(fs, outputFolder) {
        var _a = tslib_1.__read(outputFolder.split('{{LOCALE}}'), 2), pre = _a[0], post = _a[1];
        return post === undefined ? function (_locale, relativePath) { return fs.join(pre, relativePath); } :
            function (locale, relativePath) { return fs.join(pre + locale + post, relativePath); };
    }
    exports.getOutputPathFn = getOutputPathFn;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0X3BhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL3RyYW5zbGF0ZS9vdXRwdXRfcGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBaUJBOzs7Ozs7T0FNRztJQUNILFNBQWdCLGVBQWUsQ0FBQyxFQUFvQixFQUFFLFlBQTRCO1FBQzFFLElBQUEsS0FBQSxlQUFjLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUEsRUFBN0MsR0FBRyxRQUFBLEVBQUUsSUFBSSxRQUFvQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBQyxPQUFPLEVBQUUsWUFBWSxJQUFLLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztZQUN2RCxVQUFDLE1BQU0sRUFBRSxZQUFZLElBQUssT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUExQyxDQUEwQyxDQUFDO0lBQ25HLENBQUM7SUFKRCwwQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgUGF0aE1hbmlwdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIGFuIGFic29sdXRlIHBhdGggdG8gd2hlcmUgYSBmaWxlIGlzIHRvIGJlIHdyaXR0ZW4sIGdpdmVuIGEgbG9jYWxlIGFuZFxuICogYSByZWxhdGl2ZSBwYXRoLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE91dHB1dFBhdGhGbiB7XG4gIChsb2NhbGU6IHN0cmluZywgcmVsYXRpdmVQYXRoOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNvbXB1dGUgdGhlIGFic29sdXRlIHBhdGggdG8gd2hlcmUgYSB0cmFuc2xhdGVkIGZpbGUgc2hvdWxkIGJlXG4gKiB3cml0dGVuLlxuICpcbiAqIFRoZSBzcGVjaWFsIGB7e0xPQ0FMRX19YCBtYXJrZXIgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBsb2NhbGUgY29kZSBvZiB0aGUgY3VycmVudCB0cmFuc2xhdGlvbi5cbiAqIEBwYXJhbSBvdXRwdXRGb2xkZXIgQW4gYWJzb2x1dGUgcGF0aCB0byB0aGUgZm9sZGVyIGNvbnRhaW5pbmcgdGhpcyBzZXQgb2YgdHJhbnNsYXRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0cHV0UGF0aEZuKGZzOiBQYXRoTWFuaXB1bGF0aW9uLCBvdXRwdXRGb2xkZXI6IEFic29sdXRlRnNQYXRoKTogT3V0cHV0UGF0aEZuIHtcbiAgY29uc3QgW3ByZSwgcG9zdF0gPSBvdXRwdXRGb2xkZXIuc3BsaXQoJ3t7TE9DQUxFfX0nKTtcbiAgcmV0dXJuIHBvc3QgPT09IHVuZGVmaW5lZCA/IChfbG9jYWxlLCByZWxhdGl2ZVBhdGgpID0+IGZzLmpvaW4ocHJlLCByZWxhdGl2ZVBhdGgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2NhbGUsIHJlbGF0aXZlUGF0aCkgPT4gZnMuam9pbihwcmUgKyBsb2NhbGUgKyBwb3N0LCByZWxhdGl2ZVBhdGgpO1xufVxuIl19