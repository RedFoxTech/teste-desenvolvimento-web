(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/translation_files/utils", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compareLocations = exports.hasLocation = exports.consolidateMessages = void 0;
    var tslib_1 = require("tslib");
    /**
     * Consolidate messages into groups that have the same id.
     *
     * Messages with the same id are grouped together so that we can quickly deduplicate messages when
     * rendering into translation files.
     *
     * To ensure that messages are rendered in a deterministic order:
     *  - the messages within a group are sorted by location (file path, then start position)
     *  - the groups are sorted by the location of the first message in the group
     *
     * @param messages the messages to consolidate.
     * @param getMessageId a function that will compute the message id of a message.
     * @returns an array of message groups, where each group is an array of messages that have the same
     *     id.
     */
    function consolidateMessages(messages, getMessageId) {
        var e_1, _a, e_2, _b;
        var messageGroups = new Map();
        try {
            for (var messages_1 = tslib_1.__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                var message = messages_1_1.value;
                var id = getMessageId(message);
                if (!messageGroups.has(id)) {
                    messageGroups.set(id, [message]);
                }
                else {
                    messageGroups.get(id).push(message);
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
        try {
            // Here we sort the messages within a group into location order.
            // Note that `Array.sort()` will mutate the array in-place.
            for (var _c = tslib_1.__values(messageGroups.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var messages_2 = _d.value;
                messages_2.sort(compareLocations);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // Now we sort the groups by location of the first message in the group.
        return Array.from(messageGroups.values()).sort(function (a1, a2) { return compareLocations(a1[0], a2[0]); });
    }
    exports.consolidateMessages = consolidateMessages;
    /**
     * Does the given message have a location property?
     */
    function hasLocation(message) {
        return message.location !== undefined;
    }
    exports.hasLocation = hasLocation;
    function compareLocations(_a, _b) {
        var location1 = _a.location;
        var location2 = _b.location;
        if (location1 === location2) {
            return 0;
        }
        if (location1 === undefined) {
            return -1;
        }
        if (location2 === undefined) {
            return 1;
        }
        if (location1.file !== location2.file) {
            return location1.file < location2.file ? -1 : 1;
        }
        if (location1.start.line !== location2.start.line) {
            return location1.start.line < location2.start.line ? -1 : 1;
        }
        if (location1.start.column !== location2.start.column) {
            return location1.start.column < location2.start.column ? -1 : 1;
        }
        return 0;
    }
    exports.compareLocations = compareLocations;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2V4dHJhY3QvdHJhbnNsYXRpb25fZmlsZXMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVNBOzs7Ozs7Ozs7Ozs7OztPQWNHO0lBQ0gsU0FBZ0IsbUJBQW1CLENBQy9CLFFBQTBCLEVBQzFCLFlBQWlEOztRQUNuRCxJQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBZ0MsQ0FBQzs7WUFDOUQsS0FBc0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBM0IsSUFBTSxPQUFPLHFCQUFBO2dCQUNoQixJQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUMxQixhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN0QzthQUNGOzs7Ozs7Ozs7O1lBRUQsZ0VBQWdFO1lBQ2hFLDJEQUEyRDtZQUMzRCxLQUF1QixJQUFBLEtBQUEsaUJBQUEsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFBLGdCQUFBLDRCQUFFO2dCQUExQyxJQUFNLFVBQVEsV0FBQTtnQkFDakIsVUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ2pDOzs7Ozs7Ozs7UUFDRCx3RUFBd0U7UUFDeEUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsRUFBRSxFQUFFLElBQUssT0FBQSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBcEJELGtEQW9CQztJQUVEOztPQUVHO0lBQ0gsU0FBZ0IsV0FBVyxDQUFDLE9BQXVCO1FBRWpELE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUhELGtDQUdDO0lBRUQsU0FBZ0IsZ0JBQWdCLENBQzVCLEVBQXFDLEVBQUUsRUFBcUM7WUFBakUsU0FBUyxjQUFBO1lBQThCLFNBQVMsY0FBQTtRQUM3RCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ3JDLE9BQU8sU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNqRCxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBckJELDRDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHvJtU1lc3NhZ2VJZCwgybVQYXJzZWRNZXNzYWdlLCDJtVNvdXJjZUxvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9sb2NhbGl6ZSc7XG5cbi8qKlxuICogQ29uc29saWRhdGUgbWVzc2FnZXMgaW50byBncm91cHMgdGhhdCBoYXZlIHRoZSBzYW1lIGlkLlxuICpcbiAqIE1lc3NhZ2VzIHdpdGggdGhlIHNhbWUgaWQgYXJlIGdyb3VwZWQgdG9nZXRoZXIgc28gdGhhdCB3ZSBjYW4gcXVpY2tseSBkZWR1cGxpY2F0ZSBtZXNzYWdlcyB3aGVuXG4gKiByZW5kZXJpbmcgaW50byB0cmFuc2xhdGlvbiBmaWxlcy5cbiAqXG4gKiBUbyBlbnN1cmUgdGhhdCBtZXNzYWdlcyBhcmUgcmVuZGVyZWQgaW4gYSBkZXRlcm1pbmlzdGljIG9yZGVyOlxuICogIC0gdGhlIG1lc3NhZ2VzIHdpdGhpbiBhIGdyb3VwIGFyZSBzb3J0ZWQgYnkgbG9jYXRpb24gKGZpbGUgcGF0aCwgdGhlbiBzdGFydCBwb3NpdGlvbilcbiAqICAtIHRoZSBncm91cHMgYXJlIHNvcnRlZCBieSB0aGUgbG9jYXRpb24gb2YgdGhlIGZpcnN0IG1lc3NhZ2UgaW4gdGhlIGdyb3VwXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VzIHRoZSBtZXNzYWdlcyB0byBjb25zb2xpZGF0ZS5cbiAqIEBwYXJhbSBnZXRNZXNzYWdlSWQgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY29tcHV0ZSB0aGUgbWVzc2FnZSBpZCBvZiBhIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyBhbiBhcnJheSBvZiBtZXNzYWdlIGdyb3Vwcywgd2hlcmUgZWFjaCBncm91cCBpcyBhbiBhcnJheSBvZiBtZXNzYWdlcyB0aGF0IGhhdmUgdGhlIHNhbWVcbiAqICAgICBpZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnNvbGlkYXRlTWVzc2FnZXMoXG4gICAgbWVzc2FnZXM6IMm1UGFyc2VkTWVzc2FnZVtdLFxuICAgIGdldE1lc3NhZ2VJZDogKG1lc3NhZ2U6IMm1UGFyc2VkTWVzc2FnZSkgPT4gc3RyaW5nKTogybVQYXJzZWRNZXNzYWdlW11bXSB7XG4gIGNvbnN0IG1lc3NhZ2VHcm91cHMgPSBuZXcgTWFwPMm1TWVzc2FnZUlkLCDJtVBhcnNlZE1lc3NhZ2VbXT4oKTtcbiAgZm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XG4gICAgY29uc3QgaWQgPSBnZXRNZXNzYWdlSWQobWVzc2FnZSk7XG4gICAgaWYgKCFtZXNzYWdlR3JvdXBzLmhhcyhpZCkpIHtcbiAgICAgIG1lc3NhZ2VHcm91cHMuc2V0KGlkLCBbbWVzc2FnZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlR3JvdXBzLmdldChpZCkhLnB1c2gobWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSGVyZSB3ZSBzb3J0IHRoZSBtZXNzYWdlcyB3aXRoaW4gYSBncm91cCBpbnRvIGxvY2F0aW9uIG9yZGVyLlxuICAvLyBOb3RlIHRoYXQgYEFycmF5LnNvcnQoKWAgd2lsbCBtdXRhdGUgdGhlIGFycmF5IGluLXBsYWNlLlxuICBmb3IgKGNvbnN0IG1lc3NhZ2VzIG9mIG1lc3NhZ2VHcm91cHMudmFsdWVzKCkpIHtcbiAgICBtZXNzYWdlcy5zb3J0KGNvbXBhcmVMb2NhdGlvbnMpO1xuICB9XG4gIC8vIE5vdyB3ZSBzb3J0IHRoZSBncm91cHMgYnkgbG9jYXRpb24gb2YgdGhlIGZpcnN0IG1lc3NhZ2UgaW4gdGhlIGdyb3VwLlxuICByZXR1cm4gQXJyYXkuZnJvbShtZXNzYWdlR3JvdXBzLnZhbHVlcygpKS5zb3J0KChhMSwgYTIpID0+IGNvbXBhcmVMb2NhdGlvbnMoYTFbMF0sIGEyWzBdKSk7XG59XG5cbi8qKlxuICogRG9lcyB0aGUgZ2l2ZW4gbWVzc2FnZSBoYXZlIGEgbG9jYXRpb24gcHJvcGVydHk/XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNMb2NhdGlvbihtZXNzYWdlOiDJtVBhcnNlZE1lc3NhZ2UpOiBtZXNzYWdlIGlzIMm1UGFyc2VkTWVzc2FnZSZcbiAgICB7bG9jYXRpb246IMm1U291cmNlTG9jYXRpb259IHtcbiAgcmV0dXJuIG1lc3NhZ2UubG9jYXRpb24gIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVMb2NhdGlvbnMoXG4gICAge2xvY2F0aW9uOiBsb2NhdGlvbjF9OiDJtVBhcnNlZE1lc3NhZ2UsIHtsb2NhdGlvbjogbG9jYXRpb24yfTogybVQYXJzZWRNZXNzYWdlKTogbnVtYmVyIHtcbiAgaWYgKGxvY2F0aW9uMSA9PT0gbG9jYXRpb24yKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKGxvY2F0aW9uMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChsb2NhdGlvbjIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmIChsb2NhdGlvbjEuZmlsZSAhPT0gbG9jYXRpb24yLmZpbGUpIHtcbiAgICByZXR1cm4gbG9jYXRpb24xLmZpbGUgPCBsb2NhdGlvbjIuZmlsZSA/IC0xIDogMTtcbiAgfVxuICBpZiAobG9jYXRpb24xLnN0YXJ0LmxpbmUgIT09IGxvY2F0aW9uMi5zdGFydC5saW5lKSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uMS5zdGFydC5saW5lIDwgbG9jYXRpb24yLnN0YXJ0LmxpbmUgPyAtMSA6IDE7XG4gIH1cbiAgaWYgKGxvY2F0aW9uMS5zdGFydC5jb2x1bW4gIT09IGxvY2F0aW9uMi5zdGFydC5jb2x1bW4pIHtcbiAgICByZXR1cm4gbG9jYXRpb24xLnN0YXJ0LmNvbHVtbiA8IGxvY2F0aW9uMi5zdGFydC5jb2x1bW4gPyAtMSA6IDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG4iXX0=