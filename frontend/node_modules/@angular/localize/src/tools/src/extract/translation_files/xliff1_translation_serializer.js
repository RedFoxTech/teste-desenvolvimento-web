(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/translation_files/xliff1_translation_serializer", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/localize/src/tools/src/extract/translation_files/format_options", "@angular/localize/src/tools/src/extract/translation_files/icu_parsing", "@angular/localize/src/tools/src/extract/translation_files/utils", "@angular/localize/src/tools/src/extract/translation_files/xml_file"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Xliff1TranslationSerializer = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var format_options_1 = require("@angular/localize/src/tools/src/extract/translation_files/format_options");
    var icu_parsing_1 = require("@angular/localize/src/tools/src/extract/translation_files/icu_parsing");
    var utils_1 = require("@angular/localize/src/tools/src/extract/translation_files/utils");
    var xml_file_1 = require("@angular/localize/src/tools/src/extract/translation_files/xml_file");
    /** This is the number of characters that a legacy Xliff 1.2 message id has. */
    var LEGACY_XLIFF_MESSAGE_LENGTH = 40;
    /**
     * A translation serializer that can write XLIFF 1.2 formatted files.
     *
     * https://docs.oasis-open.org/xliff/v1.2/os/xliff-core.html
     * https://docs.oasis-open.org/xliff/v1.2/xliff-profile-html/xliff-profile-html-1.2.html
     *
     * @see Xliff1TranslationParser
     * @publicApi used by CLI
     */
    var Xliff1TranslationSerializer = /** @class */ (function () {
        function Xliff1TranslationSerializer(sourceLocale, basePath, useLegacyIds, formatOptions, fs) {
            if (formatOptions === void 0) { formatOptions = {}; }
            if (fs === void 0) { fs = file_system_1.getFileSystem(); }
            this.sourceLocale = sourceLocale;
            this.basePath = basePath;
            this.useLegacyIds = useLegacyIds;
            this.formatOptions = formatOptions;
            this.fs = fs;
            format_options_1.validateOptions('Xliff1TranslationSerializer', [['xml:space', ['preserve']]], formatOptions);
        }
        Xliff1TranslationSerializer.prototype.serialize = function (messages) {
            var e_1, _a, e_2, _b;
            var _this = this;
            var messageGroups = utils_1.consolidateMessages(messages, function (message) { return _this.getMessageId(message); });
            var xml = new xml_file_1.XmlFile();
            xml.startTag('xliff', { 'version': '1.2', 'xmlns': 'urn:oasis:names:tc:xliff:document:1.2' });
            // NOTE: the `original` property is set to the legacy `ng2.template` value for backward
            // compatibility.
            // We could compute the file from the `message.location` property, but there could
            // be multiple values for this in the collection of `messages`. In that case we would probably
            // need to change the serializer to output a new `<file>` element for each collection of
            // messages that come from a particular original file, and the translation file parsers may not
            // be able to cope with this.
            xml.startTag('file', tslib_1.__assign({ 'source-language': this.sourceLocale, 'datatype': 'plaintext', 'original': 'ng2.template' }, this.formatOptions));
            xml.startTag('body');
            try {
                for (var messageGroups_1 = tslib_1.__values(messageGroups), messageGroups_1_1 = messageGroups_1.next(); !messageGroups_1_1.done; messageGroups_1_1 = messageGroups_1.next()) {
                    var duplicateMessages = messageGroups_1_1.value;
                    var message = duplicateMessages[0];
                    var id = this.getMessageId(message);
                    xml.startTag('trans-unit', { id: id, datatype: 'html' });
                    xml.startTag('source', {}, { preserveWhitespace: true });
                    this.serializeMessage(xml, message);
                    xml.endTag('source', { preserveWhitespace: false });
                    try {
                        // Write all the locations
                        for (var _c = (e_2 = void 0, tslib_1.__values(duplicateMessages.filter(utils_1.hasLocation))), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var location = _d.value.location;
                            this.serializeLocation(xml, location);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (message.description) {
                        this.serializeNote(xml, 'description', message.description);
                    }
                    if (message.meaning) {
                        this.serializeNote(xml, 'meaning', message.meaning);
                    }
                    xml.endTag('trans-unit');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (messageGroups_1_1 && !messageGroups_1_1.done && (_a = messageGroups_1.return)) _a.call(messageGroups_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            xml.endTag('body');
            xml.endTag('file');
            xml.endTag('xliff');
            return xml.toString();
        };
        Xliff1TranslationSerializer.prototype.serializeMessage = function (xml, message) {
            var _a;
            var length = message.messageParts.length - 1;
            for (var i = 0; i < length; i++) {
                this.serializeTextPart(xml, message.messageParts[i]);
                var location = (_a = message.substitutionLocations) === null || _a === void 0 ? void 0 : _a[message.placeholderNames[i]];
                this.serializePlaceholder(xml, message.placeholderNames[i], location === null || location === void 0 ? void 0 : location.text);
            }
            this.serializeTextPart(xml, message.messageParts[length]);
        };
        Xliff1TranslationSerializer.prototype.serializeTextPart = function (xml, text) {
            var pieces = icu_parsing_1.extractIcuPlaceholders(text);
            var length = pieces.length - 1;
            for (var i = 0; i < length; i += 2) {
                xml.text(pieces[i]);
                this.serializePlaceholder(xml, pieces[i + 1], undefined);
            }
            xml.text(pieces[length]);
        };
        Xliff1TranslationSerializer.prototype.serializePlaceholder = function (xml, id, text) {
            var attrs = { id: id };
            var ctype = getCtypeForPlaceholder(id);
            if (ctype !== null) {
                attrs.ctype = ctype;
            }
            if (text !== undefined) {
                attrs['equiv-text'] = text;
            }
            xml.startTag('x', attrs, { selfClosing: true });
        };
        Xliff1TranslationSerializer.prototype.serializeNote = function (xml, name, value) {
            xml.startTag('note', { priority: '1', from: name }, { preserveWhitespace: true });
            xml.text(value);
            xml.endTag('note', { preserveWhitespace: false });
        };
        Xliff1TranslationSerializer.prototype.serializeLocation = function (xml, location) {
            xml.startTag('context-group', { purpose: 'location' });
            this.renderContext(xml, 'sourcefile', this.fs.relative(this.basePath, location.file));
            var endLineString = location.end !== undefined && location.end.line !== location.start.line ?
                "," + (location.end.line + 1) :
                '';
            this.renderContext(xml, 'linenumber', "" + (location.start.line + 1) + endLineString);
            xml.endTag('context-group');
        };
        Xliff1TranslationSerializer.prototype.renderContext = function (xml, type, value) {
            xml.startTag('context', { 'context-type': type }, { preserveWhitespace: true });
            xml.text(value);
            xml.endTag('context', { preserveWhitespace: false });
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
         * An Xliff 1.2 legacy message id is a hex encoded SHA-1 string, which is 40 characters long. See
         * https://csrc.nist.gov/csrc/media/publications/fips/180/4/final/documents/fips180-4-draft-aug2014.pdf
         */
        Xliff1TranslationSerializer.prototype.getMessageId = function (message) {
            return message.customId ||
                this.useLegacyIds && message.legacyIds !== undefined &&
                    message.legacyIds.find(function (id) { return id.length === LEGACY_XLIFF_MESSAGE_LENGTH; }) ||
                message.id;
        };
        return Xliff1TranslationSerializer;
    }());
    exports.Xliff1TranslationSerializer = Xliff1TranslationSerializer;
    /**
     * Compute the value of the `ctype` attribute from the `placeholder` name.
     *
     * The placeholder can take the following forms:
     *
     * - `START_BOLD_TEXT`/`END_BOLD_TEXT`
     * - `TAG_<ELEMENT_NAME>`
     * - `START_TAG_<ELEMENT_NAME>`
     * - `CLOSE_TAG_<ELEMENT_NAME>`
     *
     * In these cases the element name of the tag is extracted from the placeholder name and returned as
     * `x-<element_name>`.
     *
     * Line breaks and images are special cases.
     */
    function getCtypeForPlaceholder(placeholder) {
        var tag = placeholder.replace(/^(START_|CLOSE_)/, '');
        switch (tag) {
            case 'LINE_BREAK':
                return 'lb';
            case 'TAG_IMG':
                return 'image';
            default:
                var element = tag.startsWith('TAG_') ?
                    tag.replace(/^TAG_(.+)/, function (_, tagName) { return tagName.toLowerCase(); }) :
                    TAG_MAP[tag];
                if (element === undefined) {
                    return null;
                }
                return "x-" + element;
        }
    }
    var TAG_MAP = {
        'LINK': 'a',
        'BOLD_TEXT': 'b',
        'EMPHASISED_TEXT': 'em',
        'HEADING_LEVEL1': 'h1',
        'HEADING_LEVEL2': 'h2',
        'HEADING_LEVEL3': 'h3',
        'HEADING_LEVEL4': 'h4',
        'HEADING_LEVEL5': 'h5',
        'HEADING_LEVEL6': 'h6',
        'HORIZONTAL_RULE': 'hr',
        'ITALIC_TEXT': 'i',
        'LIST_ITEM': 'li',
        'MEDIA_LINK': 'link',
        'ORDERED_LIST': 'ol',
        'PARAGRAPH': 'p',
        'QUOTATION': 'q',
        'STRIKETHROUGH_TEXT': 's',
        'SMALL_TEXT': 'small',
        'SUBSTRIPT': 'sub',
        'SUPERSCRIPT': 'sup',
        'TABLE_BODY': 'tbody',
        'TABLE_CELL': 'td',
        'TABLE_FOOTER': 'tfoot',
        'TABLE_HEADER_CELL': 'th',
        'TABLE_HEADER': 'thead',
        'TABLE_ROW': 'tr',
        'MONOSPACED_TEXT': 'tt',
        'UNDERLINED_TEXT': 'u',
        'UNORDERED_LIST': 'ul',
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxpZmYxX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2V4dHJhY3QvdHJhbnNsYXRpb25fZmlsZXMveGxpZmYxX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJFQUE0RztJQUc1RywyR0FBZ0U7SUFDaEUscUdBQXFEO0lBRXJELHlGQUF5RDtJQUN6RCwrRkFBbUM7SUFFbkMsK0VBQStFO0lBQy9FLElBQU0sMkJBQTJCLEdBQUcsRUFBRSxDQUFDO0lBRXZDOzs7Ozs7OztPQVFHO0lBQ0g7UUFDRSxxQ0FDWSxZQUFvQixFQUFVLFFBQXdCLEVBQVUsWUFBcUIsRUFDckYsYUFBaUMsRUFBVSxFQUFzQztZQUFqRiw4QkFBQSxFQUFBLGtCQUFpQztZQUFVLG1CQUFBLEVBQUEsS0FBdUIsMkJBQWEsRUFBRTtZQURqRixpQkFBWSxHQUFaLFlBQVksQ0FBUTtZQUFVLGFBQVEsR0FBUixRQUFRLENBQWdCO1lBQVUsaUJBQVksR0FBWixZQUFZLENBQVM7WUFDckYsa0JBQWEsR0FBYixhQUFhLENBQW9CO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBb0M7WUFDM0YsZ0NBQWUsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQy9GLENBQUM7UUFFRCwrQ0FBUyxHQUFULFVBQVUsUUFBMEI7O1lBQXBDLGlCQTRDQztZQTNDQyxJQUFNLGFBQWEsR0FBRywyQkFBbUIsQ0FBQyxRQUFRLEVBQUUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUExQixDQUEwQixDQUFDLENB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LElBQUk7UUFDbEIsY0FBYyxFQUFFLE9BQU87UUFDdkIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixjQUFjLEVBQUUsT0FBTztRQUN2QixXQUFXLEVBQUUsSUFBSTtRQUNqQixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLGlCQUFpQixFQUFFLEdBQUc7UUFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtLQUN2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0Fic29sdXRlRnNQYXRoLCBnZXRGaWxlU3lzdGVtLCBQYXRoTWFuaXB1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7ybVQYXJzZWRNZXNzYWdlLCDJtVNvdXJjZUxvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9sb2NhbGl6ZSc7XG5cbmltcG9ydCB7Rm9ybWF0T3B0aW9ucywgdmFsaWRhdGVPcHRpb25zfSBmcm9tICcuL2Zvcm1hdF9vcHRpb25zJztcbmltcG9ydCB7ZXh0cmFjdEljdVBsYWNlaG9sZGVyc30gZnJvbSAnLi9pY3VfcGFyc2luZyc7XG5pbXBvcnQge1RyYW5zbGF0aW9uU2VyaWFsaXplcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9zZXJpYWxpemVyJztcbmltcG9ydCB7Y29uc29saWRhdGVNZXNzYWdlcywgaGFzTG9jYXRpb259IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtYbWxGaWxlfSBmcm9tICcuL3htbF9maWxlJztcblxuLyoqIFRoaXMgaXMgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgYSBsZWdhY3kgWGxpZmYgMS4yIG1lc3NhZ2UgaWQgaGFzLiAqL1xuY29uc3QgTEVHQUNZX1hMSUZGX01FU1NBR0VfTEVOR1RIID0gNDA7XG5cbi8qKlxuICogQSB0cmFuc2xhdGlvbiBzZXJpYWxpemVyIHRoYXQgY2FuIHdyaXRlIFhMSUZGIDEuMiBmb3JtYXR0ZWQgZmlsZXMuXG4gKlxuICogaHR0cHM6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL3hsaWZmL3YxLjIvb3MveGxpZmYtY29yZS5odG1sXG4gKiBodHRwczovL2RvY3Mub2FzaXMtb3Blbi5vcmcveGxpZmYvdjEuMi94bGlmZi1wcm9maWxlLWh0bWwveGxpZmYtcHJvZmlsZS1odG1sLTEuMi5odG1sXG4gKlxuICogQHNlZSBYbGlmZjFUcmFuc2xhdGlvblBhcnNlclxuICogQHB1YmxpY0FwaSB1c2VkIGJ5IENMSVxuICovXG5leHBvcnQgY2xhc3MgWGxpZmYxVHJhbnNsYXRpb25TZXJpYWxpemVyIGltcGxlbWVudHMgVHJhbnNsYXRpb25TZXJpYWxpemVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHNvdXJjZUxvY2FsZTogc3RyaW5nLCBwcml2YXRlIGJhc2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCwgcHJpdmF0ZSB1c2VMZWdhY3lJZHM6IGJvb2xlYW4sXG4gICAgICBwcml2YXRlIGZvcm1hdE9wdGlvbnM6IEZvcm1hdE9wdGlvbnMgPSB7fSwgcHJpdmF0ZSBmczogUGF0aE1hbmlwdWxhdGlvbiA9IGdldEZpbGVTeXN0ZW0oKSkge1xuICAgIHZhbGlkYXRlT3B0aW9ucygnWGxpZmYxVHJhbnNsYXRpb25TZXJpYWxpemVyJywgW1sneG1sOnNwYWNlJywgWydwcmVzZXJ2ZSddXV0sIGZvcm1hdE9wdGlvbnMpO1xuICB9XG5cbiAgc2VyaWFsaXplKG1lc3NhZ2VzOiDJtVBhcnNlZE1lc3NhZ2VbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgbWVzc2FnZUdyb3VwcyA9IGNvbnNvbGlkYXRlTWVzc2FnZXMobWVzc2FnZXMsIG1lc3NhZ2UgPT4gdGhpcy5nZXRNZXNzYWdlSWQobWVzc2FnZSkpO1xuICAgIGNvbnN0IHhtbCA9IG5ldyBYbWxGaWxlKCk7XG4gICAgeG1sLnN0YXJ0VGFnKCd4bGlmZicsIHsndmVyc2lvbic6ICcxLjInLCAneG1sbnMnOiAndXJuOm9hc2lzOm5hbWVzOnRjOnhsaWZmOmRvY3VtZW50OjEuMid9KTtcbiAgICAvLyBOT1RFOiB0aGUgYG9yaWdpbmFsYCBwcm9wZXJ0eSBpcyBzZXQgdG8gdGhlIGxlZ2FjeSBgbmcyLnRlbXBsYXRlYCB2YWx1ZSBmb3IgYmFja3dhcmRcbiAgICAvLyBjb21wYXRpYmlsaXR5LlxuICAgIC8vIFdlIGNvdWxkIGNvbXB1dGUgdGhlIGZpbGUgZnJvbSB0aGUgYG1lc3NhZ2UubG9jYXRpb25gIHByb3BlcnR5LCBidXQgdGhlcmUgY291bGRcbiAgICAvLyBiZSBtdWx0aXBsZSB2YWx1ZXMgZm9yIHRoaXMgaW4gdGhlIGNvbGxlY3Rpb24gb2YgYG1lc3NhZ2VzYC4gSW4gdGhhdCBjYXNlIHdlIHdvdWxkIHByb2JhYmx5XG4gICAgLy8gbmVlZCB0byBjaGFuZ2UgdGhlIHNlcmlhbGl6ZXIgdG8gb3V0cHV0IGEgbmV3IGA8ZmlsZT5gIGVsZW1lbnQgZm9yIGVhY2ggY29sbGVjdGlvbiBvZlxuICAgIC8vIG1lc3NhZ2VzIHRoYXQgY29tZSBmcm9tIGEgcGFydGljdWxhciBvcmlnaW5hbCBmaWxlLCBhbmQgdGhlIHRyYW5zbGF0aW9uIGZpbGUgcGFyc2VycyBtYXkgbm90XG4gICAgLy8gYmUgYWJsZSB0byBjb3BlIHdpdGggdGhpcy5cbiAgICB4bWwuc3RhcnRUYWcoJ2ZpbGUnLCB7XG4gICAgICAnc291cmNlLWxhbmd1YWdlJzogdGhpcy5zb3VyY2VMb2NhbGUsXG4gICAgICAnZGF0YXR5cGUnOiAncGxhaW50ZXh0JyxcbiAgICAgICdvcmlnaW5hbCc6ICduZzIudGVtcGxhdGUnLFxuICAgICAgLi4udGhpcy5mb3JtYXRPcHRpb25zLFxuICAgIH0pO1xuICAgIHhtbC5zdGFydFRhZygnYm9keScpO1xuICAgIGZvciAoY29uc3QgZHVwbGljYXRlTWVzc2FnZXMgb2YgbWVzc2FnZUdyb3Vwcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGR1cGxpY2F0ZU1lc3NhZ2VzWzBdO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldE1lc3NhZ2VJZChtZXNzYWdlKTtcblxuICAgICAgeG1sLnN0YXJ0VGFnKCd0cmFucy11bml0Jywge2lkLCBkYXRhdHlwZTogJ2h0bWwnfSk7XG4gICAgICB4bWwuc3RhcnRUYWcoJ3NvdXJjZScsIHt9LCB7cHJlc2VydmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gICAgICB0aGlzLnNlcmlhbGl6ZU1lc3NhZ2UoeG1sLCBtZXNzYWdlKTtcbiAgICAgIHhtbC5lbmRUYWcoJ3NvdXJjZScsIHtwcmVzZXJ2ZVdoaXRlc3BhY2U6IGZhbHNlfSk7XG5cbiAgICAgIC8vIFdyaXRlIGFsbCB0aGUgbG9jYXRpb25zXG4gICAgICBmb3IgKGNvbnN0IHtsb2NhdGlvbn0gb2YgZHVwbGljYXRlTWVzc2FnZXMuZmlsdGVyKGhhc0xvY2F0aW9uKSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZUxvY2F0aW9uKHhtbCwgbG9jYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZU5vdGUoeG1sLCAnZGVzY3JpcHRpb24nLCBtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLm1lYW5pbmcpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVOb3RlKHhtbCwgJ21lYW5pbmcnLCBtZXNzYWdlLm1lYW5pbmcpO1xuICAgICAgfVxuICAgICAgeG1sLmVuZFRhZygndHJhbnMtdW5pdCcpO1xuICAgIH1cbiAgICB4bWwuZW5kVGFnKCdib2R5Jyk7XG4gICAgeG1sLmVuZFRhZygnZmlsZScpO1xuICAgIHhtbC5lbmRUYWcoJ3hsaWZmJyk7XG4gICAgcmV0dXJuIHhtbC50b1N0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVNZXNzYWdlKHhtbDogWG1sRmlsZSwgbWVzc2FnZTogybVQYXJzZWRNZXNzYWdlKTogdm9pZCB7XG4gICAgY29uc3QgbGVuZ3RoID0gbWVzc2FnZS5tZXNzYWdlUGFydHMubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZVRleHRQYXJ0KHhtbCwgbWVzc2FnZS5tZXNzYWdlUGFydHNbaV0pO1xuICAgICAgY29uc3QgbG9jYXRpb24gPSBtZXNzYWdlLnN1YnN0aXR1dGlvbkxvY2F0aW9ucz8uW21lc3NhZ2UucGxhY2Vob2xkZXJOYW1lc1tpXV07XG4gICAgICB0aGlzLnNlcmlhbGl6ZVBsYWNlaG9sZGVyKHhtbCwgbWVzc2FnZS5wbGFjZWhvbGRlck5hbWVzW2ldLCBsb2NhdGlvbj8udGV4dCk7XG4gICAgfVxuICAgIHRoaXMuc2VyaWFsaXplVGV4dFBhcnQoeG1sLCBtZXNzYWdlLm1lc3NhZ2VQYXJ0c1tsZW5ndGhdKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplVGV4dFBhcnQoeG1sOiBYbWxGaWxlLCB0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwaWVjZXMgPSBleHRyYWN0SWN1UGxhY2Vob2xkZXJzKHRleHQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBpZWNlcy5sZW5ndGggLSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHhtbC50ZXh0KHBpZWNlc1tpXSk7XG4gICAgICB0aGlzLnNlcmlhbGl6ZVBsYWNlaG9sZGVyKHhtbCwgcGllY2VzW2kgKyAxXSwgdW5kZWZpbmVkKTtcbiAgICB9XG4gICAgeG1sLnRleHQocGllY2VzW2xlbmd0aF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVQbGFjZWhvbGRlcih4bWw6IFhtbEZpbGUsIGlkOiBzdHJpbmcsIHRleHQ6IHN0cmluZ3x1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBjb25zdCBhdHRyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtpZH07XG4gICAgY29uc3QgY3R5cGUgPSBnZXRDdHlwZUZvclBsYWNlaG9sZGVyKGlkKTtcbiAgICBpZiAoY3R5cGUgIT09IG51bGwpIHtcbiAgICAgIGF0dHJzLmN0eXBlID0gY3R5cGU7XG4gICAgfVxuICAgIGlmICh0ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF0dHJzWydlcXVpdi10ZXh0J10gPSB0ZXh0O1xuICAgIH1cbiAgICB4bWwuc3RhcnRUYWcoJ3gnLCBhdHRycywge3NlbGZDbG9zaW5nOiB0cnVlfSk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU5vdGUoeG1sOiBYbWxGaWxlLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB4bWwuc3RhcnRUYWcoJ25vdGUnLCB7cHJpb3JpdHk6ICcxJywgZnJvbTogbmFtZX0sIHtwcmVzZXJ2ZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgICB4bWwudGV4dCh2YWx1ZSk7XG4gICAgeG1sLmVuZFRhZygnbm90ZScsIHtwcmVzZXJ2ZVdoaXRlc3BhY2U6IGZhbHNlfSk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZUxvY2F0aW9uKHhtbDogWG1sRmlsZSwgbG9jYXRpb246IMm1U291cmNlTG9jYXRpb24pOiB2b2lkIHtcbiAgICB4bWwuc3RhcnRUYWcoJ2NvbnRleHQtZ3JvdXAnLCB7cHVycG9zZTogJ2xvY2F0aW9uJ30pO1xuICAgIHRoaXMucmVuZGVyQ29udGV4dCh4bWwsICdzb3VyY2VmaWxlJywgdGhpcy5mcy5yZWxhdGl2ZSh0aGlzLmJhc2VQYXRoLCBsb2NhdGlvbi5maWxlKSk7XG4gICAgY29uc3QgZW5kTGluZVN0cmluZyA9IGxvY2F0aW9uLmVuZCAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLmVuZC5saW5lICE9PSBsb2NhdGlvbi5zdGFydC5saW5lID9cbiAgICAgICAgYCwke2xvY2F0aW9uLmVuZC5saW5lICsgMX1gIDpcbiAgICAgICAgJyc7XG4gICAgdGhpcy5yZW5kZXJDb250ZXh0KHhtbCwgJ2xpbmVudW1iZXInLCBgJHtsb2NhdGlvbi5zdGFydC5saW5lICsgMX0ke2VuZExpbmVTdHJpbmd9YCk7XG4gICAgeG1sLmVuZFRhZygnY29udGV4dC1ncm91cCcpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDb250ZXh0KHhtbDogWG1sRmlsZSwgdHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgeG1sLnN0YXJ0VGFnKCdjb250ZXh0Jywgeydjb250ZXh0LXR5cGUnOiB0eXBlfSwge3ByZXNlcnZlV2hpdGVzcGFjZTogdHJ1ZX0pO1xuICAgIHhtbC50ZXh0KHZhbHVlKTtcbiAgICB4bWwuZW5kVGFnKCdjb250ZXh0Jywge3ByZXNlcnZlV2hpdGVzcGFjZTogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGlkIGZvciB0aGUgZ2l2ZW4gYG1lc3NhZ2VgLlxuICAgKlxuICAgKiBJZiB0aGVyZSB3YXMgYSBjdXN0b20gaWQgcHJvdmlkZWQsIHVzZSB0aGF0LlxuICAgKlxuICAgKiBJZiB3ZSBoYXZlIHJlcXVlc3RlZCBsZWdhY3kgbWVzc2FnZSBpZHMsIHRoZW4gdHJ5IHRvIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgaWRcbiAgICogZnJvbSB0aGUgbGlzdCBvZiBsZWdhY3kgaWRzIHRoYXQgd2VyZSBleHRyYWN0ZWQuXG4gICAqXG4gICAqIE90aGVyd2lzZSByZXR1cm4gdGhlIGNhbm9uaWNhbCBtZXNzYWdlIGlkLlxuICAgKlxuICAgKiBBbiBYbGlmZiAxLjIgbGVnYWN5IG1lc3NhZ2UgaWQgaXMgYSBoZXggZW5jb2RlZCBTSEEtMSBzdHJpbmcsIHdoaWNoIGlzIDQwIGNoYXJhY3RlcnMgbG9uZy4gU2VlXG4gICAqIGh0dHBzOi8vY3NyYy5uaXN0Lmdvdi9jc3JjL21lZGlhL3B1YmxpY2F0aW9ucy9maXBzLzE4MC80L2ZpbmFsL2RvY3VtZW50cy9maXBzMTgwLTQtZHJhZnQtYXVnMjAxNC5wZGZcbiAgICovXG4gIHByaXZhdGUgZ2V0TWVzc2FnZUlkKG1lc3NhZ2U6IMm1UGFyc2VkTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1lc3NhZ2UuY3VzdG9tSWQgfHxcbiAgICAgICAgdGhpcy51c2VMZWdhY3lJZHMgJiYgbWVzc2FnZS5sZWdhY3lJZHMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBtZXNzYWdlLmxlZ2FjeUlkcy5maW5kKGlkID0+IGlkLmxlbmd0aCA9PT0gTEVHQUNZX1hMSUZGX01FU1NBR0VfTEVOR1RIKSB8fFxuICAgICAgICBtZXNzYWdlLmlkO1xuICB9XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgdmFsdWUgb2YgdGhlIGBjdHlwZWAgYXR0cmlidXRlIGZyb20gdGhlIGBwbGFjZWhvbGRlcmAgbmFtZS5cbiAqXG4gKiBUaGUgcGxhY2Vob2xkZXIgY2FuIHRha2UgdGhlIGZvbGxvd2luZyBmb3JtczpcbiAqXG4gKiAtIGBTVEFSVF9CT0xEX1RFWFRgL2BFTkRfQk9MRF9URVhUYFxuICogLSBgVEFHXzxFTEVNRU5UX05BTUU+YFxuICogLSBgU1RBUlRfVEFHXzxFTEVNRU5UX05BTUU+YFxuICogLSBgQ0xPU0VfVEFHXzxFTEVNRU5UX05BTUU+YFxuICpcbiAqIEluIHRoZXNlIGNhc2VzIHRoZSBlbGVtZW50IG5hbWUgb2YgdGhlIHRhZyBpcyBleHRyYWN0ZWQgZnJvbSB0aGUgcGxhY2Vob2xkZXIgbmFtZSBhbmQgcmV0dXJuZWQgYXNcbiAqIGB4LTxlbGVtZW50X25hbWU+YC5cbiAqXG4gKiBMaW5lIGJyZWFrcyBhbmQgaW1hZ2VzIGFyZSBzcGVjaWFsIGNhc2VzLlxuICovXG5mdW5jdGlvbiBnZXRDdHlwZUZvclBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gIGNvbnN0IHRhZyA9IHBsYWNlaG9sZGVyLnJlcGxhY2UoL14oU1RBUlRffENMT1NFXykvLCAnJyk7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSAnTElORV9CUkVBSyc6XG4gICAgICByZXR1cm4gJ2xiJztcbiAgICBjYXNlICdUQUdfSU1HJzpcbiAgICAgIHJldHVybiAnaW1hZ2UnO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGFnLnN0YXJ0c1dpdGgoJ1RBR18nKSA/XG4gICAgICAgICAgdGFnLnJlcGxhY2UoL15UQUdfKC4rKS8sIChfLCB0YWdOYW1lOiBzdHJpbmcpID0+IHRhZ05hbWUudG9Mb3dlckNhc2UoKSkgOlxuICAgICAgICAgIFRBR19NQVBbdGFnXTtcbiAgICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gYHgtJHtlbGVtZW50fWA7XG4gIH1cbn1cblxuY29uc3QgVEFHX01BUDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJ0xJTksnOiAnYScsXG4gICdCT0xEX1RFWFQnOiAnYicsXG4gICdFTVBIQVNJU0VEX1RFWFQnOiAnZW0nLFxuICAnSEVBRElOR19MRVZFTDEnOiAnaDEnLFxuICAnSEVBRElOR19MRVZFTDInOiAnaDInLFxuICAnSEVBRElOR19MRVZFTDMnOiAnaDMnLFxuICAnSEVBRElOR19MRVZFTDQnOiAnaDQnLFxuICAnSEVBRElOR19MRVZFTDUnOiAnaDUnLFxuICAnSEVBRElOR19MRVZFTDYnOiAnaDYnLFxuICAnSE9SSVpPTlRBTF9SVUxFJzogJ2hyJyxcbiAgJ0lUQUxJQ19URVhUJzogJ2knLFxuICAnTElTVF9JVEVNJzogJ2xpJyxcbiAgJ01FRElBX0xJTksnOiAnbGluaycsXG4gICdPUkRFUkVEX0xJU1QnOiAnb2wnLFxuICAnUEFSQUdSQVBIJzogJ3AnLFxuICAnUVVPVEFUSU9OJzogJ3EnLFxuICAnU1RSSUtFVEhST1VHSF9URVhUJzogJ3MnLFxuICAnU01BTExfVEVYVCc6ICdzbWFsbCcsXG4gICdTVUJTVFJJUFQnOiAnc3ViJyxcbiAgJ1NVUEVSU0NSSVBUJzogJ3N1cCcsXG4gICdUQUJMRV9CT0RZJzogJ3Rib2R5JyxcbiAgJ1RBQkxFX0NFTEwnOiAndGQnLFxuICAnVEFCTEVfRk9PVEVSJzogJ3Rmb290JyxcbiAgJ1RBQkxFX0hFQURFUl9DRUxMJzogJ3RoJyxcbiAgJ1RBQkxFX0hFQURFUic6ICd0aGVhZCcsXG4gICdUQUJMRV9ST1cnOiAndHInLFxuICAnTU9OT1NQQUNFRF9URVhUJzogJ3R0JyxcbiAgJ1VOREVSTElORURfVEVYVCc6ICd1JyxcbiAgJ1VOT1JERVJFRF9MSVNUJzogJ3VsJyxcbn07XG4iXX0=