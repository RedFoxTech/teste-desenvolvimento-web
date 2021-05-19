(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/translation_files/arb_translation_serializer", ["require", "exports", "tslib", "@angular/localize/src/tools/src/extract/translation_files/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArbTranslationSerializer = void 0;
    var tslib_1 = require("tslib");
    var utils_1 = require("@angular/localize/src/tools/src/extract/translation_files/utils");
    /**
     * A translation serializer that can render JSON formatted as an Application Resource Bundle (ARB).
     *
     * See https://github.com/google/app-resource-bundle/wiki/ApplicationResourceBundleSpecification
     *
     * ```
     * {
     *   "@@locale": "en-US",
     *   "message-id": "Target message string",
     *   "@message-id": {
     *     "type": "text",
     *     "description": "Some description text",
     *     "x-locations": [
     *       {
     *         "start": {"line": 23, "column": 145},
     *         "end": {"line": 24, "column": 53},
     *         "file": "some/file.ts"
     *       },
     *       ...
     *     ]
     *   },
     *   ...
     * }
     * ```
     */
    var ArbTranslationSerializer = /** @class */ (function () {
        function ArbTranslationSerializer(sourceLocale, basePath, fs) {
            this.sourceLocale = sourceLocale;
            this.basePath = basePath;
            this.fs = fs;
        }
        ArbTranslationSerializer.prototype.serialize = function (messages) {
            var e_1, _a;
            var messageGroups = utils_1.consolidateMessages(messages, function (message) { return getMessageId(message); });
            var output = "{\n  \"@@locale\": " + JSON.stringify(this.sourceLocale);
            try {
                for (var messageGroups_1 = tslib_1.__values(messageGroups), messageGroups_1_1 = messageGroups_1.next(); !messageGroups_1_1.done; messageGroups_1_1 = messageGroups_1.next()) {
                    var duplicateMessages = messageGroups_1_1.value;
                    var message = duplicateMessages[0];
                    var id = getMessageId(message);
                    output += this.serializeMessage(id, message);
                    output += this.serializeMeta(id, message.description, message.meaning, duplicateMessages.filter(utils_1.hasLocation).map(function (m) { return m.location; }));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (messageGroups_1_1 && !messageGroups_1_1.done && (_a = messageGroups_1.return)) _a.call(messageGroups_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            output += '\n}';
            return output;
        };
        ArbTranslationSerializer.prototype.serializeMessage = function (id, message) {
            return ",\n  " + JSON.stringify(id) + ": " + JSON.stringify(message.text);
        };
        ArbTranslationSerializer.prototype.serializeMeta = function (id, description, meaning, locations) {
            var meta = [];
            if (description) {
                meta.push("\n    \"description\": " + JSON.stringify(description));
            }
            if (meaning) {
                meta.push("\n    \"x-meaning\": " + JSON.stringify(meaning));
            }
            if (locations.length > 0) {
                var locationStr = "\n    \"x-locations\": [";
                for (var i = 0; i < locations.length; i++) {
                    locationStr += (i > 0 ? ',\n' : '\n') + this.serializeLocation(locations[i]);
                }
                locationStr += '\n    ]';
                meta.push(locationStr);
            }
            return meta.length > 0 ? ",\n  " + JSON.stringify('@' + id) + ": {" + meta.join(',') + "\n  }" : '';
        };
        ArbTranslationSerializer.prototype.serializeLocation = function (_a) {
            var file = _a.file, start = _a.start, end = _a.end;
            return [
                "      {",
                "        \"file\": " + JSON.stringify(this.fs.relative(this.basePath, file)) + ",",
                "        \"start\": { \"line\": \"" + start.line + "\", \"column\": \"" + start.column + "\" },",
                "        \"end\": { \"line\": \"" + end.line + "\", \"column\": \"" + end.column + "\" }",
                "      }",
            ].join('\n');
        };
        return ArbTranslationSerializer;
    }());
    exports.ArbTranslationSerializer = ArbTranslationSerializer;
    function getMessageId(message) {
        return message.customId || message.id;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJiX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2V4dHJhY3QvdHJhbnNsYXRpb25fZmlsZXMvYXJiX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVVBLHlGQUF5RDtJQUV6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bd0JHO0lBQ0g7UUFDRSxrQ0FDWSxZQUFvQixFQUFVLFFBQXdCLEVBQ3RELEVBQW9CO1lBRHBCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1lBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7WUFDdEQsT0FBRSxHQUFGLEVBQUUsQ0FBa0I7UUFBRyxDQUFDO1FBRXBDLDRDQUFTLEdBQVQsVUFBVSxRQUEwQjs7WUFDbEMsSUFBTSxhQUFhLEdBQUcsMkJBQW1CLENBQUMsUUFBUSxFQUFFLFVBQUEsT0FBTyxJQUFJLE9BQUEsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7WUFFdEYsSUFBSSxNQUFNLEdBQUcsd0JBQW9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBRyxDQUFDOztnQkFFckUsS0FBZ0MsSUFBQSxrQkFBQSxpQkFBQSxhQUFhLENBQUEsNENBQUEsdUVBQUU7b0JBQTFDLElBQU0saUJBQWlCLDBCQUFBO29CQUMxQixJQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckMsSUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqQyxNQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDN0MsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQ3hCLEVBQUUsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQ3hDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxtQkFBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUNqRTs7Ozs7Ozs7O1lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQztZQUVoQixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRU8sbURBQWdCLEdBQXhCLFVBQXlCLEVBQVUsRUFBRSxPQUF1QjtZQUMxRCxPQUFPLFVBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsVUFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUcsQ0FBQztRQUN2RSxDQUFDO1FBRU8sZ0RBQWEsR0FBckIsVUFDSSxFQUFVLEVBQUUsV0FBNkIsRUFBRSxPQUF5QixFQUNwRSxTQUE0QjtZQUM5QixJQUFNLElBQUksR0FBYSxFQUFFLENBQUM7WUFFMUIsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUcsQ0FBQyxDQUFDO2FBQ2xFO1lBRUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBc0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUcsQ0FBQyxDQUFDO2FBQzVEO1lBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxXQUFXLEdBQUcsMEJBQXdCLENBQUM7Z0JBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN6QyxXQUFXLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUU7Z0JBQ0QsV0FBVyxJQUFJLFNBQVMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN4QjtZQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUYsQ0FBQztRQUVPLG9EQUFpQixHQUF6QixVQUEwQixFQUFtQztnQkFBbEMsSUFBSSxVQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsR0FBRyxTQUFBO1lBQ3pDLE9BQU87Z0JBQ0wsU0FBUztnQkFDVCx1QkFBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQUc7Z0JBQzNFLHNDQUErQixLQUFLLENBQUMsSUFBSSwwQkFBaUIsS0FBSyxDQUFDLE1BQU0sVUFBTTtnQkFDNUUsb0NBQTZCLEdBQUcsQ0FBQyxJQUFJLDBCQUFpQixHQUFHLENBQUMsTUFBTSxTQUFLO2dCQUNyRSxTQUFTO2FBQ1YsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZixDQUFDO1FBQ0gsK0JBQUM7SUFBRCxDQUFDLEFBOURELElBOERDO0lBOURZLDREQUF3QjtJQWdFckMsU0FBUyxZQUFZLENBQUMsT0FBdUI7UUFDM0MsT0FBTyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgUGF0aE1hbmlwdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge8m1UGFyc2VkTWVzc2FnZSwgybVTb3VyY2VMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuaW1wb3J0IHtUcmFuc2xhdGlvblNlcmlhbGl6ZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fc2VyaWFsaXplcic7XG5pbXBvcnQge2NvbnNvbGlkYXRlTWVzc2FnZXMsIGhhc0xvY2F0aW9ufSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBBIHRyYW5zbGF0aW9uIHNlcmlhbGl6ZXIgdGhhdCBjYW4gcmVuZGVyIEpTT04gZm9ybWF0dGVkIGFzIGFuIEFwcGxpY2F0aW9uIFJlc291cmNlIEJ1bmRsZSAoQVJCKS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9hcHAtcmVzb3VyY2UtYnVuZGxlL3dpa2kvQXBwbGljYXRpb25SZXNvdXJjZUJ1bmRsZVNwZWNpZmljYXRpb25cbiAqXG4gKiBgYGBcbiAqIHtcbiAqICAgXCJAQGxvY2FsZVwiOiBcImVuLVVTXCIsXG4gKiAgIFwibWVzc2FnZS1pZFwiOiBcIlRhcmdldCBtZXNzYWdlIHN0cmluZ1wiLFxuICogICBcIkBtZXNzYWdlLWlkXCI6IHtcbiAqICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gKiAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNvbWUgZGVzY3JpcHRpb24gdGV4dFwiLFxuICogICAgIFwieC1sb2NhdGlvbnNcIjogW1xuICogICAgICAge1xuICogICAgICAgICBcInN0YXJ0XCI6IHtcImxpbmVcIjogMjMsIFwiY29sdW1uXCI6IDE0NX0sXG4gKiAgICAgICAgIFwiZW5kXCI6IHtcImxpbmVcIjogMjQsIFwiY29sdW1uXCI6IDUzfSxcbiAqICAgICAgICAgXCJmaWxlXCI6IFwic29tZS9maWxlLnRzXCJcbiAqICAgICAgIH0sXG4gKiAgICAgICAuLi5cbiAqICAgICBdXG4gKiAgIH0sXG4gKiAgIC4uLlxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBBcmJUcmFuc2xhdGlvblNlcmlhbGl6ZXIgaW1wbGVtZW50cyBUcmFuc2xhdGlvblNlcmlhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgc291cmNlTG9jYWxlOiBzdHJpbmcsIHByaXZhdGUgYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoLFxuICAgICAgcHJpdmF0ZSBmczogUGF0aE1hbmlwdWxhdGlvbikge31cblxuICBzZXJpYWxpemUobWVzc2FnZXM6IMm1UGFyc2VkTWVzc2FnZVtdKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZXNzYWdlR3JvdXBzID0gY29uc29saWRhdGVNZXNzYWdlcyhtZXNzYWdlcywgbWVzc2FnZSA9PiBnZXRNZXNzYWdlSWQobWVzc2FnZSkpO1xuXG4gICAgbGV0IG91dHB1dCA9IGB7XFxuICBcIkBAbG9jYWxlXCI6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zb3VyY2VMb2NhbGUpfWA7XG5cbiAgICBmb3IgKGNvbnN0IGR1cGxpY2F0ZU1lc3NhZ2VzIG9mIG1lc3NhZ2VHcm91cHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkdXBsaWNhdGVNZXNzYWdlc1swXTtcbiAgICAgIGNvbnN0IGlkID0gZ2V0TWVzc2FnZUlkKG1lc3NhZ2UpO1xuICAgICAgb3V0cHV0ICs9IHRoaXMuc2VyaWFsaXplTWVzc2FnZShpZCwgbWVzc2FnZSk7XG4gICAgICBvdXRwdXQgKz0gdGhpcy5zZXJpYWxpemVNZXRhKFxuICAgICAgICAgIGlkLCBtZXNzYWdlLmRlc2NyaXB0aW9uLCBtZXNzYWdlLm1lYW5pbmcsXG4gICAgICAgICAgZHVwbGljYXRlTWVzc2FnZXMuZmlsdGVyKGhhc0xvY2F0aW9uKS5tYXAobSA9PiBtLmxvY2F0aW9uKSk7XG4gICAgfVxuXG4gICAgb3V0cHV0ICs9ICdcXG59JztcblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU1lc3NhZ2UoaWQ6IHN0cmluZywgbWVzc2FnZTogybVQYXJzZWRNZXNzYWdlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCxcXG4gICR7SlNPTi5zdHJpbmdpZnkoaWQpfTogJHtKU09OLnN0cmluZ2lmeShtZXNzYWdlLnRleHQpfWA7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU1ldGEoXG4gICAgICBpZDogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nfHVuZGVmaW5lZCwgbWVhbmluZzogc3RyaW5nfHVuZGVmaW5lZCxcbiAgICAgIGxvY2F0aW9uczogybVTb3VyY2VMb2NhdGlvbltdKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZXRhOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBtZXRhLnB1c2goYFxcbiAgICBcImRlc2NyaXB0aW9uXCI6ICR7SlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24pfWApO1xuICAgIH1cblxuICAgIGlmIChtZWFuaW5nKSB7XG4gICAgICBtZXRhLnB1c2goYFxcbiAgICBcIngtbWVhbmluZ1wiOiAke0pTT04uc3RyaW5naWZ5KG1lYW5pbmcpfWApO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGxvY2F0aW9uU3RyID0gYFxcbiAgICBcIngtbG9jYXRpb25zXCI6IFtgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbG9jYXRpb25TdHIgKz0gKGkgPiAwID8gJyxcXG4nIDogJ1xcbicpICsgdGhpcy5zZXJpYWxpemVMb2NhdGlvbihsb2NhdGlvbnNbaV0pO1xuICAgICAgfVxuICAgICAgbG9jYXRpb25TdHIgKz0gJ1xcbiAgICBdJztcbiAgICAgIG1ldGEucHVzaChsb2NhdGlvblN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGEubGVuZ3RoID4gMCA/IGAsXFxuICAke0pTT04uc3RyaW5naWZ5KCdAJyArIGlkKX06IHske21ldGEuam9pbignLCcpfVxcbiAgfWAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplTG9jYXRpb24oe2ZpbGUsIHN0YXJ0LCBlbmR9OiDJtVNvdXJjZUxvY2F0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gW1xuICAgICAgYCAgICAgIHtgLFxuICAgICAgYCAgICAgICAgXCJmaWxlXCI6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5mcy5yZWxhdGl2ZSh0aGlzLmJhc2VQYXRoLCBmaWxlKSl9LGAsXG4gICAgICBgICAgICAgICBcInN0YXJ0XCI6IHsgXCJsaW5lXCI6IFwiJHtzdGFydC5saW5lfVwiLCBcImNvbHVtblwiOiBcIiR7c3RhcnQuY29sdW1ufVwiIH0sYCxcbiAgICAgIGAgICAgICAgIFwiZW5kXCI6IHsgXCJsaW5lXCI6IFwiJHtlbmQubGluZX1cIiwgXCJjb2x1bW5cIjogXCIke2VuZC5jb2x1bW59XCIgfWAsXG4gICAgICBgICAgICAgfWAsXG4gICAgXS5qb2luKCdcXG4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNZXNzYWdlSWQobWVzc2FnZTogybVQYXJzZWRNZXNzYWdlKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1lc3NhZ2UuY3VzdG9tSWQgfHwgbWVzc2FnZS5pZDtcbn1cbiJdfQ==