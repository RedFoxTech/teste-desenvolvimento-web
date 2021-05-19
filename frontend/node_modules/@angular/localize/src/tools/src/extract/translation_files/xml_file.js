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
        define("@angular/localize/src/tools/src/extract/translation_files/xml_file", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XmlFile = void 0;
    var tslib_1 = require("tslib");
    var XmlFile = /** @class */ (function () {
        function XmlFile() {
            this.output = '<?xml version="1.0" encoding="UTF-8" ?>\n';
            this.indent = '';
            this.elements = [];
            this.preservingWhitespace = false;
        }
        XmlFile.prototype.toString = function () {
            return this.output;
        };
        XmlFile.prototype.startTag = function (name, attributes, _a) {
            var e_1, _b;
            if (attributes === void 0) { attributes = {}; }
            var _c = _a === void 0 ? {} : _a, _d = _c.selfClosing, selfClosing = _d === void 0 ? false : _d, preserveWhitespace = _c.preserveWhitespace;
            if (!this.preservingWhitespace) {
                this.output += this.indent;
            }
            this.output += "<" + name;
            try {
                for (var _e = tslib_1.__values(Object.entries(attributes)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var _g = tslib_1.__read(_f.value, 2), attrName = _g[0], attrValue = _g[1];
                    if (attrValue) {
                        this.output += " " + attrName + "=\"" + escapeXml(attrValue) + "\"";
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (selfClosing) {
                this.output += '/>';
            }
            else {
                this.output += '>';
                this.elements.push(name);
                this.incIndent();
            }
            if (preserveWhitespace !== undefined) {
                this.preservingWhitespace = preserveWhitespace;
            }
            if (!this.preservingWhitespace) {
                this.output += "\n";
            }
            return this;
        };
        XmlFile.prototype.endTag = function (name, _a) {
            var _b = _a === void 0 ? {} : _a, preserveWhitespace = _b.preserveWhitespace;
            var expectedTag = this.elements.pop();
            if (expectedTag !== name) {
                throw new Error("Unexpected closing tag: \"" + name + "\", expected: \"" + expectedTag + "\"");
            }
            this.decIndent();
            if (!this.preservingWhitespace) {
                this.output += this.indent;
            }
            this.output += "</" + name + ">";
            if (preserveWhitespace !== undefined) {
                this.preservingWhitespace = preserveWhitespace;
            }
            if (!this.preservingWhitespace) {
                this.output += "\n";
            }
            return this;
        };
        XmlFile.prototype.text = function (str) {
            this.output += escapeXml(str);
            return this;
        };
        XmlFile.prototype.rawText = function (str) {
            this.output += str;
            return this;
        };
        XmlFile.prototype.incIndent = function () {
            this.indent = this.indent + '  ';
        };
        XmlFile.prototype.decIndent = function () {
            this.indent = this.indent.slice(0, -2);
        };
        return XmlFile;
    }());
    exports.XmlFile = XmlFile;
    var _ESCAPED_CHARS = [
        [/&/g, '&amp;'],
        [/"/g, '&quot;'],
        [/'/g, '&apos;'],
        [/</g, '&lt;'],
        [/>/g, '&gt;'],
    ];
    function escapeXml(text) {
        return _ESCAPED_CHARS.reduce(function (text, entry) { return text.replace(entry[0], entry[1]); }, text);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2V4dHJhY3QvdHJhbnNsYXRpb25fZmlsZXMveG1sX2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7OztJQU9IO1FBQUE7WUFDVSxXQUFNLEdBQUcsMkNBQTJDLENBQUM7WUFDckQsV0FBTSxHQUFHLEVBQUUsQ0FBQztZQUNaLGFBQVEsR0FBYSxFQUFFLENBQUM7WUFDeEIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBMkV2QyxDQUFDO1FBMUVDLDBCQUFRLEdBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQUVELDBCQUFRLEdBQVIsVUFDSSxJQUFZLEVBQUUsVUFBaUQsRUFDL0QsRUFBdUQ7O1lBRHpDLDJCQUFBLEVBQUEsZUFBaUQ7Z0JBQy9ELHFCQUFxRCxFQUFFLEtBQUEsRUFBdEQsbUJBQW1CLEVBQW5CLFdBQVcsbUJBQUcsS0FBSyxLQUFBLEVBQUUsa0JBQWtCLHdCQUFBO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM1QjtZQUVELElBQUksQ0FBQyxNQUFNLElBQUksTUFBSSxJQUFNLENBQUM7O2dCQUUxQixLQUFvQyxJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBckQsSUFBQSxLQUFBLDJCQUFxQixFQUFwQixRQUFRLFFBQUEsRUFBRSxTQUFTLFFBQUE7b0JBQzdCLElBQUksU0FBUyxFQUFFO3dCQUNiLElBQUksQ0FBQyxNQUFNLElBQUksTUFBSSxRQUFRLFdBQUssU0FBUyxDQUFDLFNBQVMsQ0FB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LENBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIHNlbGZDbG9zaW5nPzogYm9vbGVhbjtcbiAgcHJlc2VydmVXaGl0ZXNwYWNlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFhtbEZpbGUge1xuICBwcml2YXRlIG91dHB1dCA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiID8+XFxuJztcbiAgcHJpdmF0ZSBpbmRlbnQgPSAnJztcbiAgcHJpdmF0ZSBlbGVtZW50czogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwcmVzZXJ2aW5nV2hpdGVzcGFjZSA9IGZhbHNlO1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQ7XG4gIH1cblxuICBzdGFydFRhZyhcbiAgICAgIG5hbWU6IHN0cmluZywgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nfHVuZGVmaW5lZD4gPSB7fSxcbiAgICAgIHtzZWxmQ2xvc2luZyA9IGZhbHNlLCBwcmVzZXJ2ZVdoaXRlc3BhY2V9OiBPcHRpb25zID0ge30pOiB0aGlzIHtcbiAgICBpZiAoIXRoaXMucHJlc2VydmluZ1doaXRlc3BhY2UpIHtcbiAgICAgIHRoaXMub3V0cHV0ICs9IHRoaXMuaW5kZW50O1xuICAgIH1cblxuICAgIHRoaXMub3V0cHV0ICs9IGA8JHtuYW1lfWA7XG5cbiAgICBmb3IgKGNvbnN0IFthdHRyTmFtZSwgYXR0clZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgaWYgKGF0dHJWYWx1ZSkge1xuICAgICAgICB0aGlzLm91dHB1dCArPSBgICR7YXR0ck5hbWV9PVwiJHtlc2NhcGVYbWwoYXR0clZhbHVlKX1cImA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlbGZDbG9zaW5nKSB7XG4gICAgICB0aGlzLm91dHB1dCArPSAnLz4nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dHB1dCArPSAnPic7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmFtZSk7XG4gICAgICB0aGlzLmluY0luZGVudCgpO1xuICAgIH1cblxuICAgIGlmIChwcmVzZXJ2ZVdoaXRlc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5wcmVzZXJ2aW5nV2hpdGVzcGFjZSA9IHByZXNlcnZlV2hpdGVzcGFjZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByZXNlcnZpbmdXaGl0ZXNwYWNlKSB7XG4gICAgICB0aGlzLm91dHB1dCArPSBgXFxuYDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmRUYWcobmFtZTogc3RyaW5nLCB7cHJlc2VydmVXaGl0ZXNwYWNlfTogT3B0aW9ucyA9IHt9KTogdGhpcyB7XG4gICAgY29uc3QgZXhwZWN0ZWRUYWcgPSB0aGlzLmVsZW1lbnRzLnBvcCgpO1xuICAgIGlmIChleHBlY3RlZFRhZyAhPT0gbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGNsb3NpbmcgdGFnOiBcIiR7bmFtZX1cIiwgZXhwZWN0ZWQ6IFwiJHtleHBlY3RlZFRhZ31cImApO1xuICAgIH1cblxuICAgIHRoaXMuZGVjSW5kZW50KCk7XG5cbiAgICBpZiAoIXRoaXMucHJlc2VydmluZ1doaXRlc3BhY2UpIHtcbiAgICAgIHRoaXMub3V0cHV0ICs9IHRoaXMuaW5kZW50O1xuICAgIH1cbiAgICB0aGlzLm91dHB1dCArPSBgPC8ke25hbWV9PmA7XG5cbiAgICBpZiAocHJlc2VydmVXaGl0ZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucHJlc2VydmluZ1doaXRlc3BhY2UgPSBwcmVzZXJ2ZVdoaXRlc3BhY2U7XG4gICAgfVxuICAgIGlmICghdGhpcy5wcmVzZXJ2aW5nV2hpdGVzcGFjZSkge1xuICAgICAgdGhpcy5vdXRwdXQgKz0gYFxcbmA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGV4dChzdHI6IHN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMub3V0cHV0ICs9IGVzY2FwZVhtbChzdHIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmF3VGV4dChzdHI6IHN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMub3V0cHV0ICs9IHN0cjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgaW5jSW5kZW50KCkge1xuICAgIHRoaXMuaW5kZW50ID0gdGhpcy5pbmRlbnQgKyAnICAnO1xuICB9XG4gIHByaXZhdGUgZGVjSW5kZW50KCkge1xuICAgIHRoaXMuaW5kZW50ID0gdGhpcy5pbmRlbnQuc2xpY2UoMCwgLTIpO1xuICB9XG59XG5cbmNvbnN0IF9FU0NBUEVEX0NIQVJTOiBbUmVnRXhwLCBzdHJpbmddW10gPSBbXG4gIFsvJi9nLCAnJmFtcDsnXSxcbiAgWy9cIi9nLCAnJnF1b3Q7J10sXG4gIFsvJy9nLCAnJmFwb3M7J10sXG4gIFsvPC9nLCAnJmx0OyddLFxuICBbLz4vZywgJyZndDsnXSxcbl07XG5cbmZ1bmN0aW9uIGVzY2FwZVhtbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gX0VTQ0FQRURfQ0hBUlMucmVkdWNlKFxuICAgICAgKHRleHQ6IHN0cmluZywgZW50cnk6IFtSZWdFeHAsIHN0cmluZ10pID0+IHRleHQucmVwbGFjZShlbnRyeVswXSwgZW50cnlbMV0pLCB0ZXh0KTtcbn0iXX0=