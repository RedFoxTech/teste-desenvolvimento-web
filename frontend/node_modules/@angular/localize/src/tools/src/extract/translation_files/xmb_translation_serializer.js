(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/translation_files/xmb_translation_serializer", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/localize/src/tools/src/extract/translation_files/icu_parsing", "@angular/localize/src/tools/src/extract/translation_files/utils", "@angular/localize/src/tools/src/extract/translation_files/xml_file"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XmbTranslationSerializer = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var icu_parsing_1 = require("@angular/localize/src/tools/src/extract/translation_files/icu_parsing");
    var utils_1 = require("@angular/localize/src/tools/src/extract/translation_files/utils");
    var xml_file_1 = require("@angular/localize/src/tools/src/extract/translation_files/xml_file");
    /**
     * A translation serializer that can write files in XMB format.
     *
     * http://cldr.unicode.org/development/development-process/design-proposals/xmb
     *
     * @see XmbTranslationParser
     * @publicApi used by CLI
     */
    var XmbTranslationSerializer = /** @class */ (function () {
        function XmbTranslationSerializer(basePath, useLegacyIds, fs) {
            if (fs === void 0) { fs = file_system_1.getFileSystem(); }
            this.basePath = basePath;
            this.useLegacyIds = useLegacyIds;
            this.fs = fs;
        }
        XmbTranslationSerializer.prototype.serialize = function (messages) {
            var e_1, _a;
            var _this = this;
            var messageGroups = utils_1.consolidateMessages(messages, function (message) { return _this.getMessageId(message); });
            var xml = new xml_file_1.XmlFile();
            xml.rawText("<!DOCTYPE messagebundle [\n" +
                "<!ELEMENT messagebundle (msg)*>\n" +
                "<!ATTLIST messagebundle class CDATA #IMPLIED>\n" +
                "\n" +
                "<!ELEMENT msg (#PCDATA|ph|source)*>\n" +
                "<!ATTLIST msg id CDATA #IMPLIED>\n" +
                "<!ATTLIST msg seq CDATA #IMPLIED>\n" +
                "<!ATTLIST msg name CDATA #IMPLIED>\n" +
                "<!ATTLIST msg desc CDATA #IMPLIED>\n" +
                "<!ATTLIST msg meaning CDATA #IMPLIED>\n" +
                "<!ATTLIST msg obsolete (obsolete) #IMPLIED>\n" +
                "<!ATTLIST msg xml:space (default|preserve) \"default\">\n" +
                "<!ATTLIST msg is_hidden CDATA #IMPLIED>\n" +
                "\n" +
                "<!ELEMENT source (#PCDATA)>\n" +
                "\n" +
                "<!ELEMENT ph (#PCDATA|ex)*>\n" +
                "<!ATTLIST ph name CDATA #REQUIRED>\n" +
                "\n" +
                "<!ELEMENT ex (#PCDATA)>\n" +
                "]>\n");
            xml.startTag('messagebundle');
            try {
                for (var messageGroups_1 = tslib_1.__values(messageGroups), messageGroups_1_1 = messageGroups_1.next(); !messageGroups_1_1.done; messageGroups_1_1 = messageGroups_1.next()) {
                    var duplicateMessages = messageGroups_1_1.value;
                    var message = duplicateMessages[0];
                    var id = this.getMessageId(message);
                    xml.startTag('msg', { id: id, desc: message.description, meaning: message.meaning }, { preserveWhitespace: true });
                    if (message.location) {
                        this.serializeLocation(xml, message.location);
                    }
                    this.serializeMessage(xml, message);
                    xml.endTag('msg', { preserveWhitespace: false });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (messageGroups_1_1 && !messageGroups_1_1.done && (_a = messageGroups_1.return)) _a.call(messageGroups_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            xml.endTag('messagebundle');
            return xml.toString();
        };
        XmbTranslationSerializer.prototype.serializeLocation = function (xml, location) {
            xml.startTag('source');
            var endLineString = location.end !== undefined && location.end.line !== location.start.line ?
                "," + (location.end.line + 1) :
                '';
            xml.text(this.fs.relative(this.basePath, location.file) + ":" + location.start.line + endLineString);
            xml.endTag('source');
        };
        XmbTranslationSerializer.prototype.serializeMessage = function (xml, message) {
            var length = message.messageParts.length - 1;
            for (var i = 0; i < length; i++) {
                this.serializeTextPart(xml, message.messageParts[i]);
                xml.startTag('ph', { name: message.placeholderNames[i] }, { selfClosing: true });
            }
            this.serializeTextPart(xml, message.messageParts[length]);
        };
        XmbTranslationSerializer.prototype.serializeTextPart = function (xml, text) {
            var pieces = icu_parsing_1.extractIcuPlaceholders(text);
            var length = pieces.length - 1;
            for (var i = 0; i < length; i += 2) {
                xml.text(pieces[i]);
                xml.startTag('ph', { name: pieces[i + 1] }, { selfClosing: true });
            }
            xml.text(pieces[length]);
        };
        /**
         * Get the id for the given `message`.
         *
         * If there was a custom id provided, use that.
         *
         * If we have requested legacy message ids, then try to return the appropriate id
         * from the list of legacy ids that were extracted.
         *
         * Otherwise return the canonical message id.
         *
         * An XMB legacy message id is a 64 bit number encoded as a decimal string, which will have
         * at most 20 digits, since 2^65-1 = 36,893,488,147,419,103,231. This digest is based on:
         * https://github.com/google/closure-compiler/blob/master/src/com/google/javascript/jscomp/GoogleJsMessageIdGenerator.java
         */
        XmbTranslationSerializer.prototype.getMessageId = function (message) {
            return message.customId ||
                this.useLegacyIds && message.legacyIds !== undefined &&
                    message.legacyIds.find(function (id) { return id.length <= 20 && !/[^0-9]/.test(id); }) ||
                message.id;
        };
        return XmbTranslationSerializer;
    }());
    exports.XmbTranslationSerializer = XmbTranslationSerializer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1iX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2V4dHJhY3QvdHJhbnNsYXRpb25fZmlsZXMveG1iX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJFQUE0RztJQUc1RyxxR0FBcUQ7SUFFckQseUZBQTRDO0lBQzVDLCtGQUFtQztJQUVuQzs7Ozs7OztPQU9HO0lBQ0g7UUFDRSxrQ0FDWSxRQUF3QixFQUFVLFlBQXFCLEVBQ3ZELEVBQXNDO1lBQXRDLG1CQUFBLEVBQUEsS0FBdUIsMkJBQWEsRUFBRTtZQUR0QyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtZQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFTO1lBQ3ZELE9BQUUsR0FBRixFQUFFLENBQW9DO1FBQUcsQ0FBQztRQUV0RCw0Q0FBUyxHQUFULFVBQVUsUUFBMEI7O1lBQXBDLGlCQXdDQztZQXZDQyxJQUFNLGFBQWEsR0FBRywyQkFBbUIsQ0FBQyxRQUFRLEVBQUUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7WUFDM0YsSUFBTSxHQUFHLEdBQUcsSUFBSSxrQkFBTyxFQUFFLENBQUM7WUFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FDUCw2QkFBNkI7Z0JBQzdCLG1DQUFtQztnQkFDbkMsaURBQWlEO2dCQUNqRCxJQUFJO2dCQUNKLHVDQUF1QztnQkFDdkMsb0NBQW9DO2dCQUNwQyxxQ0FBcUM7Z0JBQ3JDLHNDQUFzQztnQkFDdEMsc0NBQXNDO2dCQUN0Qyx5Q0FBeUM7Z0JBQ3pDLCtDQUErQztnQkFDL0MsMkRBQXlEO2dCQUN6RCwyQ0FBMkM7Z0JBQzNDLElBQUk7Z0JB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Q2xELElBQU0sTUFBTSxHQUFHLG9DQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDaEU7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRDs7Ozs7Ozs7Ozs7OztXQWFHO1FBQ0ssK0NBQVksR0FBcEIsVUFBcUIsT0FBdUI7WUFDMUMsT0FBTyxPQUFPLENBQUMsUUFBUTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVM7b0JBQ3BELE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDO2dCQUNuRSxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFDSCwrQkFBQztJQUFELENBQUMsQUFoR0QsSUFnR0M7SUFoR1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0Fic29sdXRlRnNQYXRoLCBnZXRGaWxlU3lzdGVtLCBQYXRoTWFuaXB1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7ybVQYXJzZWRNZXNzYWdlLCDJtVNvdXJjZUxvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9sb2NhbGl6ZSc7XG5cbmltcG9ydCB7ZXh0cmFjdEljdVBsYWNlaG9sZGVyc30gZnJvbSAnLi9pY3VfcGFyc2luZyc7XG5pbXBvcnQge1RyYW5zbGF0aW9uU2VyaWFsaXplcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9zZXJpYWxpemVyJztcbmltcG9ydCB7Y29uc29saWRhdGVNZXNzYWdlc30gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1htbEZpbGV9IGZyb20gJy4veG1sX2ZpbGUnO1xuXG4vKipcbiAqIEEgdHJhbnNsYXRpb24gc2VyaWFsaXplciB0aGF0IGNhbiB3cml0ZSBmaWxlcyBpbiBYTUIgZm9ybWF0LlxuICpcbiAqIGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL2RldmVsb3BtZW50L2RldmVsb3BtZW50LXByb2Nlc3MvZGVzaWduLXByb3Bvc2Fscy94bWJcbiAqXG4gKiBAc2VlIFhtYlRyYW5zbGF0aW9uUGFyc2VyXG4gKiBAcHVibGljQXBpIHVzZWQgYnkgQ0xJXG4gKi9cbmV4cG9ydCBjbGFzcyBYbWJUcmFuc2xhdGlvblNlcmlhbGl6ZXIgaW1wbGVtZW50cyBUcmFuc2xhdGlvblNlcmlhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoLCBwcml2YXRlIHVzZUxlZ2FjeUlkczogYm9vbGVhbixcbiAgICAgIHByaXZhdGUgZnM6IFBhdGhNYW5pcHVsYXRpb24gPSBnZXRGaWxlU3lzdGVtKCkpIHt9XG5cbiAgc2VyaWFsaXplKG1lc3NhZ2VzOiDJtVBhcnNlZE1lc3NhZ2VbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgbWVzc2FnZUdyb3VwcyA9IGNvbnNvbGlkYXRlTWVzc2FnZXMobWVzc2FnZXMsIG1lc3NhZ2UgPT4gdGhpcy5nZXRNZXNzYWdlSWQobWVzc2FnZSkpO1xuICAgIGNvbnN0IHhtbCA9IG5ldyBYbWxGaWxlKCk7XG4gICAgeG1sLnJhd1RleHQoXG4gICAgICAgIGA8IURPQ1RZUEUgbWVzc2FnZWJ1bmRsZSBbXFxuYCArXG4gICAgICAgIGA8IUVMRU1FTlQgbWVzc2FnZWJ1bmRsZSAobXNnKSo+XFxuYCArXG4gICAgICAgIGA8IUFUVExJU1QgbWVzc2FnZWJ1bmRsZSBjbGFzcyBDREFUQSAjSU1QTElFRD5cXG5gICtcbiAgICAgICAgYFxcbmAgK1xuICAgICAgICBgPCFFTEVNRU5UIG1zZyAoI1BDREFUQXxwaHxzb3VyY2UpKj5cXG5gICtcbiAgICAgICAgYDwhQVRUTElTVCBtc2cgaWQgQ0RBVEEgI0lNUExJRUQ+XFxuYCArXG4gICAgICAgIGA8IUFUVExJU1QgbXNnIHNlcSBDREFUQSAjSU1QTElFRD5cXG5gICtcbiAgICAgICAgYDwhQVRUTElTVCBtc2cgbmFtZSBDREFUQSAjSU1QTElFRD5cXG5gICtcbiAgICAgICAgYDwhQVRUTElTVCBtc2cgZGVzYyBDREFUQSAjSU1QTElFRD5cXG5gICtcbiAgICAgICAgYDwhQVRUTElTVCBtc2cgbWVhbmluZyBDREFUQSAjSU1QTElFRD5cXG5gICtcbiAgICAgICAgYDwhQVRUTElTVCBtc2cgb2Jzb2xldGUgKG9ic29sZXRlKSAjSU1QTElFRD5cXG5gICtcbiAgICAgICAgYDwhQVRUTElTVCBtc2cgeG1sOnNwYWNlIChkZWZhdWx0fHByZXNlcnZlKSBcImRlZmF1bHRcIj5cXG5gICtcbiAgICAgICAgYDwhQVRUTElTVCBtc2cgaXNfaGlkZGVuIENEQVRBICNJTVBMSUVEPlxcbmAgK1xuICAgICAgICBgXFxuYCArXG4gICAgICAgIGA8IUVMRU1FTlQgc291cmNlICgjUENEQVRBKT5cXG5gICtcbiAgICAgICAgYFxcbmAgK1xuICAgICAgICBgPCFFTEVNRU5UIHBoICgjUENEQVRBfGV4KSo+XFxuYCArXG4gICAgICAgIGA8IUFUVExJU1QgcGggbmFtZSBDREFUQSAjUkVRVUlSRUQ+XFxuYCArXG4gICAgICAgIGBcXG5gICtcbiAgICAgICAgYDwhRUxFTUVOVCBleCAoI1BDREFUQSk+XFxuYCArXG4gICAgICAgIGBdPlxcbmApO1xuICAgIHhtbC5zdGFydFRhZygnbWVzc2FnZWJ1bmRsZScpO1xuICAgIGZvciAoY29uc3QgZHVwbGljYXRlTWVzc2FnZXMgb2YgbWVzc2FnZUdyb3Vwcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGR1cGxpY2F0ZU1lc3NhZ2VzWzBdO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldE1lc3NhZ2VJZChtZXNzYWdlKTtcbiAgICAgIHhtbC5zdGFydFRhZyhcbiAgICAgICAgICAnbXNnJywge2lkLCBkZXNjOiBtZXNzYWdlLmRlc2NyaXB0aW9uLCBtZWFuaW5nOiBtZXNzYWdlLm1lYW5pbmd9LFxuICAgICAgICAgIHtwcmVzZXJ2ZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgICAgIGlmIChtZXNzYWdlLmxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplTG9jYXRpb24oeG1sLCBtZXNzYWdlLmxvY2F0aW9uKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VyaWFsaXplTWVzc2FnZSh4bWwsIG1lc3NhZ2UpO1xuICAgICAgeG1sLmVuZFRhZygnbXNnJywge3ByZXNlcnZlV2hpdGVzcGFjZTogZmFsc2V9KTtcbiAgICB9XG4gICAgeG1sLmVuZFRhZygnbWVzc2FnZWJ1bmRsZScpO1xuICAgIHJldHVybiB4bWwudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplTG9jYXRpb24oeG1sOiBYbWxGaWxlLCBsb2NhdGlvbjogybVTb3VyY2VMb2NhdGlvbik6IHZvaWQge1xuICAgIHhtbC5zdGFydFRhZygnc291cmNlJyk7XG4gICAgY29uc3QgZW5kTGluZVN0cmluZyA9IGxvY2F0aW9uLmVuZCAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLmVuZC5saW5lICE9PSBsb2NhdGlvbi5zdGFydC5saW5lID9cbiAgICAgICAgYCwke2xvY2F0aW9uLmVuZC5saW5lICsgMX1gIDpcbiAgICAgICAgJyc7XG4gICAgeG1sLnRleHQoXG4gICAgICAgIGAke3RoaXMuZnMucmVsYXRpdmUodGhpcy5iYXNlUGF0aCwgbG9jYXRpb24uZmlsZSl9OiR7bG9jYXRpb24uc3RhcnQubGluZX0ke2VuZExpbmVTdHJpbmd9YCk7XG4gICAgeG1sLmVuZFRhZygnc291cmNlJyk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU1lc3NhZ2UoeG1sOiBYbWxGaWxlLCBtZXNzYWdlOiDJtVBhcnNlZE1lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBsZW5ndGggPSBtZXNzYWdlLm1lc3NhZ2VQYXJ0cy5sZW5ndGggLSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplVGV4dFBhcnQoeG1sLCBtZXNzYWdlLm1lc3NhZ2VQYXJ0c1tpXSk7XG4gICAgICB4bWwuc3RhcnRUYWcoJ3BoJywge25hbWU6IG1lc3NhZ2UucGxhY2Vob2xkZXJOYW1lc1tpXX0sIHtzZWxmQ2xvc2luZzogdHJ1ZX0pO1xuICAgIH1cbiAgICB0aGlzLnNlcmlhbGl6ZVRleHRQYXJ0KHhtbCwgbWVzc2FnZS5tZXNzYWdlUGFydHNbbGVuZ3RoXSk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZVRleHRQYXJ0KHhtbDogWG1sRmlsZSwgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcGllY2VzID0gZXh0cmFjdEljdVBsYWNlaG9sZGVycyh0ZXh0KTtcbiAgICBjb25zdCBsZW5ndGggPSBwaWVjZXMubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAyKSB7XG4gICAgICB4bWwudGV4dChwaWVjZXNbaV0pO1xuICAgICAgeG1sLnN0YXJ0VGFnKCdwaCcsIHtuYW1lOiBwaWVjZXNbaSArIDFdfSwge3NlbGZDbG9zaW5nOiB0cnVlfSk7XG4gICAgfVxuICAgIHhtbC50ZXh0KHBpZWNlc1tsZW5ndGhdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGlkIGZvciB0aGUgZ2l2ZW4gYG1lc3NhZ2VgLlxuICAgKlxuICAgKiBJZiB0aGVyZSB3YXMgYSBjdXN0b20gaWQgcHJvdmlkZWQsIHVzZSB0aGF0LlxuICAgKlxuICAgKiBJZiB3ZSBoYXZlIHJlcXVlc3RlZCBsZWdhY3kgbWVzc2FnZSBpZHMsIHRoZW4gdHJ5IHRvIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgaWRcbiAgICogZnJvbSB0aGUgbGlzdCBvZiBsZWdhY3kgaWRzIHRoYXQgd2VyZSBleHRyYWN0ZWQuXG4gICAqXG4gICAqIE90aGVyd2lzZSByZXR1cm4gdGhlIGNhbm9uaWNhbCBtZXNzYWdlIGlkLlxuICAgKlxuICAgKiBBbiBYTUIgbGVnYWN5IG1lc3NhZ2UgaWQgaXMgYSA2NCBiaXQgbnVtYmVyIGVuY29kZWQgYXMgYSBkZWNpbWFsIHN0cmluZywgd2hpY2ggd2lsbCBoYXZlXG4gICAqIGF0IG1vc3QgMjAgZGlnaXRzLCBzaW5jZSAyXjY1LTEgPSAzNiw4OTMsNDg4LDE0Nyw0MTksMTAzLDIzMS4gVGhpcyBkaWdlc3QgaXMgYmFzZWQgb246XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9ibG9iL21hc3Rlci9zcmMvY29tL2dvb2dsZS9qYXZhc2NyaXB0L2pzY29tcC9Hb29nbGVKc01lc3NhZ2VJZEdlbmVyYXRvci5qYXZhXG4gICAqL1xuICBwcml2YXRlIGdldE1lc3NhZ2VJZChtZXNzYWdlOiDJtVBhcnNlZE1lc3NhZ2UpOiBzdHJpbmcge1xuICAgIHJldHVybiBtZXNzYWdlLmN1c3RvbUlkIHx8XG4gICAgICAgIHRoaXMudXNlTGVnYWN5SWRzICYmIG1lc3NhZ2UubGVnYWN5SWRzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgbWVzc2FnZS5sZWdhY3lJZHMuZmluZChpZCA9PiBpZC5sZW5ndGggPD0gMjAgJiYgIS9bXjAtOV0vLnRlc3QoaWQpKSB8fFxuICAgICAgICBtZXNzYWdlLmlkO1xuICB9XG59XG4iXX0=