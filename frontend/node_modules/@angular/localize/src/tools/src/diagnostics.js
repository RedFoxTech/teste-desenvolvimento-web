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
        define("@angular/localize/src/tools/src/diagnostics", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Diagnostics = void 0;
    var tslib_1 = require("tslib");
    /**
     * This class is used to collect and then report warnings and errors that occur during the execution
     * of the tools.
     *
     * @publicApi used by CLI
     */
    var Diagnostics = /** @class */ (function () {
        function Diagnostics() {
            this.messages = [];
        }
        Object.defineProperty(Diagnostics.prototype, "hasErrors", {
            get: function () {
                return this.messages.some(function (m) { return m.type === 'error'; });
            },
            enumerable: false,
            configurable: true
        });
        Diagnostics.prototype.add = function (type, message) {
            if (type !== 'ignore') {
                this.messages.push({ type: type, message: message });
            }
        };
        Diagnostics.prototype.warn = function (message) {
            this.messages.push({ type: 'warning', message: message });
        };
        Diagnostics.prototype.error = function (message) {
            this.messages.push({ type: 'error', message: message });
        };
        Diagnostics.prototype.merge = function (other) {
            var _a;
            (_a = this.messages).push.apply(_a, tslib_1.__spread(other.messages));
        };
        Diagnostics.prototype.formatDiagnostics = function (message) {
            var errors = this.messages.filter(function (d) { return d.type === 'error'; }).map(function (d) { return ' - ' + d.message; });
            var warnings = this.messages.filter(function (d) { return d.type === 'warning'; }).map(function (d) { return ' - ' + d.message; });
            if (errors.length) {
                message += '\nERRORS:\n' + errors.join('\n');
            }
            if (warnings.length) {
                message += '\nWARNINGS:\n' + warnings.join('\n');
            }
            return message;
        };
        return Diagnostics;
    }());
    exports.Diagnostics = Diagnostics;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2RpYWdub3N0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFPSDs7Ozs7T0FLRztJQUNIO1FBQUE7WUFDVyxhQUFRLEdBQWlELEVBQUUsQ0FBQztRQTZCdkUsQ0FBQztRQTVCQyxzQkFBSSxrQ0FBUztpQkFBYjtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUNyRCxDQUFDOzs7V0FBQTtRQUNELHlCQUFHLEdBQUgsVUFBSSxJQUFnQyxFQUFFLE9BQWU7WUFDbkQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUMsQ0FBQzthQUNyQztRQUNILENBQUM7UUFDRCwwQkFBSSxHQUFKLFVBQUssT0FBZTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCwyQkFBSyxHQUFMLFVBQU0sT0FBZTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCwyQkFBSyxHQUFMLFVBQU0sS0FBa0I7O1lBQ3RCLENBQUEsS0FBQSxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsSUFBSSw0QkFBSSxLQUFLLENBQUMsUUFBUSxHQUFFO1FBQ3hDLENBQUM7UUFDRCx1Q0FBaUIsR0FBakIsVUFBa0IsT0FBZTtZQUMvQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFsQixDQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUN6RixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFwQixDQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUM3RixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FBQyxBQTlCRCxJQThCQztJQTlCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEhvdyB0byBoYW5kbGUgcG90ZW50aWFsIGRpYWdub3N0aWNzLlxuICovXG5leHBvcnQgdHlwZSBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneSA9ICdlcnJvcid8J3dhcm5pbmcnfCdpZ25vcmUnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb2xsZWN0IGFuZCB0aGVuIHJlcG9ydCB3YXJuaW5ncyBhbmQgZXJyb3JzIHRoYXQgb2NjdXIgZHVyaW5nIHRoZSBleGVjdXRpb25cbiAqIG9mIHRoZSB0b29scy5cbiAqXG4gKiBAcHVibGljQXBpIHVzZWQgYnkgQ0xJXG4gKi9cbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljcyB7XG4gIHJlYWRvbmx5IG1lc3NhZ2VzOiB7dHlwZTogJ3dhcm5pbmcnfCdlcnJvcicsIG1lc3NhZ2U6IHN0cmluZ31bXSA9IFtdO1xuICBnZXQgaGFzRXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzLnNvbWUobSA9PiBtLnR5cGUgPT09ICdlcnJvcicpO1xuICB9XG4gIGFkZCh0eXBlOiBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGUgIT09ICdpZ25vcmUnKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe3R5cGUsIG1lc3NhZ2V9KTtcbiAgICB9XG4gIH1cbiAgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe3R5cGU6ICd3YXJuaW5nJywgbWVzc2FnZX0pO1xuICB9XG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZXMucHVzaCh7dHlwZTogJ2Vycm9yJywgbWVzc2FnZX0pO1xuICB9XG4gIG1lcmdlKG90aGVyOiBEaWFnbm9zdGljcykge1xuICAgIHRoaXMubWVzc2FnZXMucHVzaCguLi5vdGhlci5tZXNzYWdlcyk7XG4gIH1cbiAgZm9ybWF0RGlhZ25vc3RpY3MobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm1lc3NhZ2VzLmZpbHRlcihkID0+IGQudHlwZSA9PT0gJ2Vycm9yJykubWFwKGQgPT4gJyAtICcgKyBkLm1lc3NhZ2UpO1xuICAgIGNvbnN0IHdhcm5pbmdzID0gdGhpcy5tZXNzYWdlcy5maWx0ZXIoZCA9PiBkLnR5cGUgPT09ICd3YXJuaW5nJykubWFwKGQgPT4gJyAtICcgKyBkLm1lc3NhZ2UpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBtZXNzYWdlICs9ICdcXG5FUlJPUlM6XFxuJyArIGVycm9ycy5qb2luKCdcXG4nKTtcbiAgICB9XG4gICAgaWYgKHdhcm5pbmdzLmxlbmd0aCkge1xuICAgICAgbWVzc2FnZSArPSAnXFxuV0FSTklOR1M6XFxuJyArIHdhcm5pbmdzLmpvaW4oJ1xcbicpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxufVxuIl19