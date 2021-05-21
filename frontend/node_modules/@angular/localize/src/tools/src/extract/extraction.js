(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/extraction", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/sourcemaps", "@babel/core", "@angular/localize/src/tools/src/extract/source_files/es2015_extract_plugin", "@angular/localize/src/tools/src/extract/source_files/es5_extract_plugin"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageExtractor = void 0;
    var tslib_1 = require("tslib");
    var sourcemaps_1 = require("@angular/compiler-cli/src/ngtsc/sourcemaps");
    var core_1 = require("@babel/core");
    var es2015_extract_plugin_1 = require("@angular/localize/src/tools/src/extract/source_files/es2015_extract_plugin");
    var es5_extract_plugin_1 = require("@angular/localize/src/tools/src/extract/source_files/es5_extract_plugin");
    /**
     * Extracts parsed messages from file contents, by parsing the contents as JavaScript
     * and looking for occurrences of `$localize` in the source code.
     *
     * @publicApi used by CLI
     */
    var MessageExtractor = /** @class */ (function () {
        function MessageExtractor(fs, logger, _a) {
            var basePath = _a.basePath, _b = _a.useSourceMaps, useSourceMaps = _b === void 0 ? true : _b, _c = _a.localizeName, localizeName = _c === void 0 ? '$localize' : _c;
            this.fs = fs;
            this.logger = logger;
            this.basePath = basePath;
            this.useSourceMaps = useSourceMaps;
            this.localizeName = localizeName;
            this.loader = new sourcemaps_1.SourceFileLoader(this.fs, this.logger, { webpack: basePath });
        }
        MessageExtractor.prototype.extractMessages = function (filename) {
            var messages = [];
            var sourceCode = this.fs.readFile(this.fs.resolve(this.basePath, filename));
            if (sourceCode.includes(this.localizeName)) {
                // Only bother to parse the file if it contains a reference to `$localize`.
                core_1.transformSync(sourceCode, {
                    sourceRoot: this.basePath,
                    filename: filename,
                    plugins: [
                        es2015_extract_plugin_1.makeEs2015ExtractPlugin(this.fs, messages, this.localizeName),
                        es5_extract_plugin_1.makeEs5ExtractPlugin(this.fs, messages, this.localizeName),
                    ],
                    code: false,
                    ast: false
                });
                if (this.useSourceMaps && messages.length > 0) {
                    this.updateSourceLocations(filename, sourceCode, messages);
                }
            }
            return messages;
        };
        /**
         * Update the location of each message to point to the source-mapped original source location, if
         * available.
         */
        MessageExtractor.prototype.updateSourceLocations = function (filename, contents, messages) {
            var e_1, _a, e_2, _b;
            var _this = this;
            var sourceFile = this.loader.loadSourceFile(this.fs.resolve(this.basePath, filename), contents);
            if (sourceFile === null) {
                return;
            }
            try {
                for (var messages_1 = tslib_1.__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                    var message = messages_1_1.value;
                    if (message.location !== undefined) {
                        message.location = this.getOriginalLocation(sourceFile, message.location);
                        if (message.messagePartLocations) {
                            message.messagePartLocations = message.messagePartLocations.map(function (location) { return location && _this.getOriginalLocation(sourceFile, location); });
                        }
                        if (message.substitutionLocations) {
                            var placeholderNames = Object.keys(message.substitutionLocations);
                            try {
                                for (var placeholderNames_1 = (e_2 = void 0, tslib_1.__values(placeholderNames)), placeholderNames_1_1 = placeholderNames_1.next(); !placeholderNames_1_1.done; placeholderNames_1_1 = placeholderNames_1.next()) {
                                    var placeholderName = placeholderNames_1_1.value;
                                    var location = message.substitutionLocations[placeholderName];
                                    message.substitutionLocations[placeholderName] =
                                        location && this.getOriginalLocation(sourceFile, location);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (placeholderNames_1_1 && !placeholderNames_1_1.done && (_b = placeholderNames_1.return)) _b.call(placeholderNames_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * Find the original location using source-maps if available.
         *
         * @param sourceFile The generated `sourceFile` that contains the `location`.
         * @param location The location within the generated `sourceFile` that needs mapping.
         *
         * @returns A new location that refers to the original source location mapped from the given
         *     `location` in the generated `sourceFile`.
         */
        MessageExtractor.prototype.getOriginalLocation = function (sourceFile, location) {
            var originalStart = sourceFile.getOriginalLocation(location.start.line, location.start.column);
            if (originalStart === null) {
                return location;
            }
            var originalEnd = sourceFile.getOriginalLocation(location.end.line, location.end.column);
            var start = { line: originalStart.line, column: originalStart.column };
            // We check whether the files are the same, since the returned location can only have a single
            // `file` and it would not make sense to store the end position from a different source file.
            var end = (originalEnd !== null && originalEnd.file === originalStart.file) ?
                { line: originalEnd.line, column: originalEnd.column } :
                start;
            var originalSourceFile = sourceFile.sources.find(function (sf) { return (sf === null || sf === void 0 ? void 0 : sf.sourcePath) === originalStart.file; });
            var startPos = originalSourceFile.startOfLinePositions[start.line] + start.column;
            var endPos = originalSourceFile.startOfLinePositions[end.line] + end.column;
            var text = originalSourceFile.contents.substring(startPos, endPos).trim();
            return { file: originalStart.file, start: start, end: end, text: text };
        };
        return MessageExtractor;
    }());
    exports.MessageExtractor = MessageExtractor;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvZXh0cmFjdC9leHRyYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFTQSx5RUFBd0Y7SUFFeEYsb0NBQTBDO0lBRTFDLG9IQUE2RTtJQUM3RSw4R0FBdUU7SUFRdkU7Ozs7O09BS0c7SUFDSDtRQU1FLDBCQUNZLEVBQXNCLEVBQVUsTUFBYyxFQUN0RCxFQUErRTtnQkFBOUUsUUFBUSxjQUFBLEVBQUUscUJBQW9CLEVBQXBCLGFBQWEsbUJBQUcsSUFBSSxLQUFBLEVBQUUsb0JBQTBCLEVBQTFCLFlBQVksbUJBQUcsV0FBVyxLQUFBO1lBRG5ELE9BQUUsR0FBRixFQUFFLENBQW9CO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUV4RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksNkJBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDaEYsQ0FBQztRQUVELDBDQUFlLEdBQWYsVUFDSSxRQUFnQjtZQUVsQixJQUFNLFFBQVEsR0FBcUIsRUFBRSxDQUFDO1lBQ3RDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlB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QUEsRUFBQyxDQUFDO1FBQ3RELENBQUM7UUFDSCx1QkFBQztJQUFELENBQUMsQUFwR0QsSUFvR0M7SUFwR1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0Fic29sdXRlRnNQYXRoLCBSZWFkb25seUZpbGVTeXN0ZW19IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvbG9nZ2luZyc7XG5pbXBvcnQge1NvdXJjZUZpbGUsIFNvdXJjZUZpbGVMb2FkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2Mvc291cmNlbWFwcyc7XG5pbXBvcnQge8m1UGFyc2VkTWVzc2FnZSwgybVTb3VyY2VMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuaW1wb3J0IHt0cmFuc2Zvcm1TeW5jfSBmcm9tICdAYmFiZWwvY29yZSc7XG5cbmltcG9ydCB7bWFrZUVzMjAxNUV4dHJhY3RQbHVnaW59IGZyb20gJy4vc291cmNlX2ZpbGVzL2VzMjAxNV9leHRyYWN0X3BsdWdpbic7XG5pbXBvcnQge21ha2VFczVFeHRyYWN0UGx1Z2lufSBmcm9tICcuL3NvdXJjZV9maWxlcy9lczVfZXh0cmFjdF9wbHVnaW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJhY3Rpb25PcHRpb25zIHtcbiAgYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoO1xuICB1c2VTb3VyY2VNYXBzPzogYm9vbGVhbjtcbiAgbG9jYWxpemVOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIHBhcnNlZCBtZXNzYWdlcyBmcm9tIGZpbGUgY29udGVudHMsIGJ5IHBhcnNpbmcgdGhlIGNvbnRlbnRzIGFzIEphdmFTY3JpcHRcbiAqIGFuZCBsb29raW5nIGZvciBvY2N1cnJlbmNlcyBvZiBgJGxvY2FsaXplYCBpbiB0aGUgc291cmNlIGNvZGUuXG4gKlxuICogQHB1YmxpY0FwaSB1c2VkIGJ5IENMSVxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUV4dHJhY3RvciB7XG4gIHByaXZhdGUgYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoO1xuICBwcml2YXRlIHVzZVNvdXJjZU1hcHM6IGJvb2xlYW47XG4gIHByaXZhdGUgbG9jYWxpemVOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgbG9hZGVyOiBTb3VyY2VGaWxlTG9hZGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBmczogUmVhZG9ubHlGaWxlU3lzdGVtLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLFxuICAgICAge2Jhc2VQYXRoLCB1c2VTb3VyY2VNYXBzID0gdHJ1ZSwgbG9jYWxpemVOYW1lID0gJyRsb2NhbGl6ZSd9OiBFeHRyYWN0aW9uT3B0aW9ucykge1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICB0aGlzLnVzZVNvdXJjZU1hcHMgPSB1c2VTb3VyY2VNYXBzO1xuICAgIHRoaXMubG9jYWxpemVOYW1lID0gbG9jYWxpemVOYW1lO1xuICAgIHRoaXMubG9hZGVyID0gbmV3IFNvdXJjZUZpbGVMb2FkZXIodGhpcy5mcywgdGhpcy5sb2dnZXIsIHt3ZWJwYWNrOiBiYXNlUGF0aH0pO1xuICB9XG5cbiAgZXh0cmFjdE1lc3NhZ2VzKFxuICAgICAgZmlsZW5hbWU6IHN0cmluZyxcbiAgICAgICk6IMm1UGFyc2VkTWVzc2FnZVtdIHtcbiAgICBjb25zdCBtZXNzYWdlczogybVQYXJzZWRNZXNzYWdlW10gPSBbXTtcbiAgICBjb25zdCBzb3VyY2VDb2RlID0gdGhpcy5mcy5yZWFkRmlsZSh0aGlzLmZzLnJlc29sdmUodGhpcy5iYXNlUGF0aCwgZmlsZW5hbWUpKTtcbiAgICBpZiAoc291cmNlQ29kZS5pbmNsdWRlcyh0aGlzLmxvY2FsaXplTmFtZSkpIHtcbiAgICAgIC8vIE9ubHkgYm90aGVyIHRvIHBhcnNlIHRoZSBmaWxlIGlmIGl0IGNvbnRhaW5zIGEgcmVmZXJlbmNlIHRvIGAkbG9jYWxpemVgLlxuICAgICAgdHJhbnNmb3JtU3luYyhzb3VyY2VDb2RlLCB7XG4gICAgICAgIHNvdXJjZVJvb3Q6IHRoaXMuYmFzZVBhdGgsXG4gICAgICAgIGZpbGVuYW1lLFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgbWFrZUVzMjAxNUV4dHJhY3RQbHVnaW4odGhpcy5mcywgbWVzc2FnZXMsIHRoaXMubG9jYWxpemVOYW1lKSxcbiAgICAgICAgICBtYWtlRXM1RXh0cmFjdFBsdWdpbih0aGlzLmZzLCBtZXNzYWdlcywgdGhpcy5sb2NhbGl6ZU5hbWUpLFxuICAgICAgICBdLFxuICAgICAgICBjb2RlOiBmYWxzZSxcbiAgICAgICAgYXN0OiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy51c2VTb3VyY2VNYXBzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVTb3VyY2VMb2NhdGlvbnMoZmlsZW5hbWUsIHNvdXJjZUNvZGUsIG1lc3NhZ2VzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbG9jYXRpb24gb2YgZWFjaCBtZXNzYWdlIHRvIHBvaW50IHRvIHRoZSBzb3VyY2UtbWFwcGVkIG9yaWdpbmFsIHNvdXJjZSBsb2NhdGlvbiwgaWZcbiAgICogYXZhaWxhYmxlLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVTb3VyY2VMb2NhdGlvbnMoZmlsZW5hbWU6IHN0cmluZywgY29udGVudHM6IHN0cmluZywgbWVzc2FnZXM6IMm1UGFyc2VkTWVzc2FnZVtdKTpcbiAgICAgIHZvaWQge1xuICAgIGNvbnN0IHNvdXJjZUZpbGUgPVxuICAgICAgICB0aGlzLmxvYWRlci5sb2FkU291cmNlRmlsZSh0aGlzLmZzLnJlc29sdmUodGhpcy5iYXNlUGF0aCwgZmlsZW5hbWUpLCBjb250ZW50cyk7XG4gICAgaWYgKHNvdXJjZUZpbGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XG4gICAgICBpZiAobWVzc2FnZS5sb2NhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lc3NhZ2UubG9jYXRpb24gPSB0aGlzLmdldE9yaWdpbmFsTG9jYXRpb24oc291cmNlRmlsZSwgbWVzc2FnZS5sb2NhdGlvbik7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZVBhcnRMb2NhdGlvbnMpIHtcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VQYXJ0TG9jYXRpb25zID0gbWVzc2FnZS5tZXNzYWdlUGFydExvY2F0aW9ucy5tYXAoXG4gICAgICAgICAgICAgIGxvY2F0aW9uID0+IGxvY2F0aW9uICYmIHRoaXMuZ2V0T3JpZ2luYWxMb2NhdGlvbihzb3VyY2VGaWxlLCBsb2NhdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lc3NhZ2Uuc3Vic3RpdHV0aW9uTG9jYXRpb25zKSB7XG4gICAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJOYW1lcyA9IE9iamVjdC5rZXlzKG1lc3NhZ2Uuc3Vic3RpdHV0aW9uTG9jYXRpb25zKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHBsYWNlaG9sZGVyTmFtZSBvZiBwbGFjZWhvbGRlck5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IG1lc3NhZ2Uuc3Vic3RpdHV0aW9uTG9jYXRpb25zW3BsYWNlaG9sZGVyTmFtZV07XG4gICAgICAgICAgICBtZXNzYWdlLnN1YnN0aXR1dGlvbkxvY2F0aW9uc1twbGFjZWhvbGRlck5hbWVdID1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbiAmJiB0aGlzLmdldE9yaWdpbmFsTG9jYXRpb24oc291cmNlRmlsZSwgbG9jYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBvcmlnaW5hbCBsb2NhdGlvbiB1c2luZyBzb3VyY2UtbWFwcyBpZiBhdmFpbGFibGUuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2VGaWxlIFRoZSBnZW5lcmF0ZWQgYHNvdXJjZUZpbGVgIHRoYXQgY29udGFpbnMgdGhlIGBsb2NhdGlvbmAuXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBUaGUgbG9jYXRpb24gd2l0aGluIHRoZSBnZW5lcmF0ZWQgYHNvdXJjZUZpbGVgIHRoYXQgbmVlZHMgbWFwcGluZy5cbiAgICpcbiAgICogQHJldHVybnMgQSBuZXcgbG9jYXRpb24gdGhhdCByZWZlcnMgdG8gdGhlIG9yaWdpbmFsIHNvdXJjZSBsb2NhdGlvbiBtYXBwZWQgZnJvbSB0aGUgZ2l2ZW5cbiAgICogICAgIGBsb2NhdGlvbmAgaW4gdGhlIGdlbmVyYXRlZCBgc291cmNlRmlsZWAuXG4gICAqL1xuICBwcml2YXRlIGdldE9yaWdpbmFsTG9jYXRpb24oc291cmNlRmlsZTogU291cmNlRmlsZSwgbG9jYXRpb246IMm1U291cmNlTG9jYXRpb24pOiDJtVNvdXJjZUxvY2F0aW9uIHtcbiAgICBjb25zdCBvcmlnaW5hbFN0YXJ0ID1cbiAgICAgICAgc291cmNlRmlsZS5nZXRPcmlnaW5hbExvY2F0aW9uKGxvY2F0aW9uLnN0YXJ0LmxpbmUsIGxvY2F0aW9uLnN0YXJ0LmNvbHVtbik7XG4gICAgaWYgKG9yaWdpbmFsU3RhcnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luYWxFbmQgPSBzb3VyY2VGaWxlLmdldE9yaWdpbmFsTG9jYXRpb24obG9jYXRpb24uZW5kLmxpbmUsIGxvY2F0aW9uLmVuZC5jb2x1bW4pO1xuICAgIGNvbnN0IHN0YXJ0ID0ge2xpbmU6IG9yaWdpbmFsU3RhcnQubGluZSwgY29sdW1uOiBvcmlnaW5hbFN0YXJ0LmNvbHVtbn07XG4gICAgLy8gV2UgY2hlY2sgd2hldGhlciB0aGUgZmlsZXMgYXJlIHRoZSBzYW1lLCBzaW5jZSB0aGUgcmV0dXJuZWQgbG9jYXRpb24gY2FuIG9ubHkgaGF2ZSBhIHNpbmdsZVxuICAgIC8vIGBmaWxlYCBhbmQgaXQgd291bGQgbm90IG1ha2Ugc2Vuc2UgdG8gc3RvcmUgdGhlIGVuZCBwb3NpdGlvbiBmcm9tIGEgZGlmZmVyZW50IHNvdXJjZSBmaWxlLlxuICAgIGNvbnN0IGVuZCA9IChvcmlnaW5hbEVuZCAhPT0gbnVsbCAmJiBvcmlnaW5hbEVuZC5maWxlID09PSBvcmlnaW5hbFN0YXJ0LmZpbGUpID9cbiAgICAgICAge2xpbmU6IG9yaWdpbmFsRW5kLmxpbmUsIGNvbHVtbjogb3JpZ2luYWxFbmQuY29sdW1ufSA6XG4gICAgICAgIHN0YXJ0O1xuICAgIGNvbnN0IG9yaWdpbmFsU291cmNlRmlsZSA9XG4gICAgICAgIHNvdXJjZUZpbGUuc291cmNlcy5maW5kKHNmID0+IHNmPy5zb3VyY2VQYXRoID09PSBvcmlnaW5hbFN0YXJ0LmZpbGUpITtcbiAgICBjb25zdCBzdGFydFBvcyA9IG9yaWdpbmFsU291cmNlRmlsZS5zdGFydE9mTGluZVBvc2l0aW9uc1tzdGFydC5saW5lXSArIHN0YXJ0LmNvbHVtbjtcbiAgICBjb25zdCBlbmRQb3MgPSBvcmlnaW5hbFNvdXJjZUZpbGUuc3RhcnRPZkxpbmVQb3NpdGlvbnNbZW5kLmxpbmVdICsgZW5kLmNvbHVtbjtcbiAgICBjb25zdCB0ZXh0ID0gb3JpZ2luYWxTb3VyY2VGaWxlLmNvbnRlbnRzLnN1YnN0cmluZyhzdGFydFBvcywgZW5kUG9zKS50cmltKCk7XG4gICAgcmV0dXJuIHtmaWxlOiBvcmlnaW5hbFN0YXJ0LmZpbGUsIHN0YXJ0LCBlbmQsIHRleHR9O1xuICB9XG59XG4iXX0=