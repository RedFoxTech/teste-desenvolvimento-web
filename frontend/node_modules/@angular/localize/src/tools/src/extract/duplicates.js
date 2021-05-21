(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/duplicates", ["require", "exports", "tslib", "@angular/localize/src/tools/src/diagnostics", "@angular/localize/src/tools/src/source_file_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkDuplicateMessages = void 0;
    var tslib_1 = require("tslib");
    var diagnostics_1 = require("@angular/localize/src/tools/src/diagnostics");
    var source_file_utils_1 = require("@angular/localize/src/tools/src/source_file_utils");
    /**
     * Check each of the given `messages` to find those that have the same id but different message
     * text. Add diagnostics messages for each of these duplicate messages to the given `diagnostics`
     * object (as necessary).
     */
    function checkDuplicateMessages(fs, messages, duplicateMessageHandling, basePath) {
        var e_1, _a, e_2, _b;
        var diagnostics = new diagnostics_1.Diagnostics();
        if (duplicateMessageHandling === 'ignore')
            return diagnostics;
        var messageMap = new Map();
        try {
            for (var messages_1 = tslib_1.__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                var message = messages_1_1.value;
                if (messageMap.has(message.id)) {
                    messageMap.get(message.id).push(message);
                }
                else {
                    messageMap.set(message.id, [message]);
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
        var _loop_1 = function (duplicates) {
            if (duplicates.length <= 1)
                return "continue";
            if (duplicates.every(function (message) { return message.text === duplicates[0].text; }))
                return "continue";
            var diagnosticMessage = "Duplicate messages with id \"" + duplicates[0].id + "\":\n" +
                duplicates.map(function (message) { return serializeMessage(fs, basePath, message); }).join('\n');
            diagnostics.add(duplicateMessageHandling, diagnosticMessage);
        };
        try {
            for (var _c = tslib_1.__values(messageMap.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var duplicates = _d.value;
                _loop_1(duplicates);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return diagnostics;
    }
    exports.checkDuplicateMessages = checkDuplicateMessages;
    /**
     * Serialize the given `message` object into a string.
     */
    function serializeMessage(fs, basePath, message) {
        if (message.location === undefined) {
            return "   - \"" + message.text + "\"";
        }
        else {
            var locationFile = fs.relative(basePath, message.location.file);
            var locationPosition = source_file_utils_1.serializeLocationPosition(message.location);
            return "   - \"" + message.text + "\" : " + locationFile + ":" + locationPosition;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVwbGljYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvZXh0cmFjdC9kdXBsaWNhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFVQSwyRUFBdUU7SUFDdkUsdUZBQStEO0lBRS9EOzs7O09BSUc7SUFDSCxTQUFnQixzQkFBc0IsQ0FDbEMsRUFBb0IsRUFBRSxRQUEwQixFQUNoRCx3QkFBb0QsRUFBRSxRQUF3Qjs7UUFDaEYsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSx3QkFBd0IsS0FBSyxRQUFRO1lBQUUsT0FBTyxXQUFXLENBQUM7UUFFOUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQWdDLENBQUM7O1lBQzNELEtBQXNCLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7Z0JBQTNCLElBQU0sT0FBTyxxQkFBQTtnQkFDaEIsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDOUIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMzQztxQkFBTTtvQkFDTCxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNGOzs7Ozs7Ozs7Z0NBRVUsVUFBVTtZQUNuQixJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQztrQ0FBVztZQUNyQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQW5DLENBQW1DLENBQUM7a0NBQVc7WUFFL0UsSUFBTSxpQkFBaUIsR0FBRyxrQ0FBK0IsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBTTtnQkFDM0UsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEYsV0FBVyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDOzs7WUFOL0QsS0FBeUIsSUFBQSxLQUFBLGlCQUFBLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQSxnQkFBQTtnQkFBdkMsSUFBTSxVQUFVLFdBQUE7d0JBQVYsVUFBVTthQU9wQjs7Ozs7Ozs7O1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQXpCRCx3REF5QkM7SUFFRDs7T0FFRztJQUNILFNBQVMsZ0JBQWdCLENBQ3JCLEVBQW9CLEVBQUUsUUFBd0IsRUFBRSxPQUF1QjtRQUN6RSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ2xDLE9BQU8sWUFBUyxPQUFPLENBQUMsSUFBSSxPQUFHLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEUsSUFBTSxnQkFBZ0IsR0FBRyw2Q0FBeUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckUsT0FBTyxZQUFTLE9BQU8sQ0FBQyxJQUFJLGFBQU8sWUFBWSxTQUFJLGdCQUFrQixDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgUGF0aE1hbmlwdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge8m1TWVzc2FnZUlkLCDJtVBhcnNlZE1lc3NhZ2V9IGZyb20gJ0Bhbmd1bGFyL2xvY2FsaXplJztcblxuaW1wb3J0IHtEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneSwgRGlhZ25vc3RpY3N9IGZyb20gJy4uL2RpYWdub3N0aWNzJztcbmltcG9ydCB7c2VyaWFsaXplTG9jYXRpb25Qb3NpdGlvbn0gZnJvbSAnLi4vc291cmNlX2ZpbGVfdXRpbHMnO1xuXG4vKipcbiAqIENoZWNrIGVhY2ggb2YgdGhlIGdpdmVuIGBtZXNzYWdlc2AgdG8gZmluZCB0aG9zZSB0aGF0IGhhdmUgdGhlIHNhbWUgaWQgYnV0IGRpZmZlcmVudCBtZXNzYWdlXG4gKiB0ZXh0LiBBZGQgZGlhZ25vc3RpY3MgbWVzc2FnZXMgZm9yIGVhY2ggb2YgdGhlc2UgZHVwbGljYXRlIG1lc3NhZ2VzIHRvIHRoZSBnaXZlbiBgZGlhZ25vc3RpY3NgXG4gKiBvYmplY3QgKGFzIG5lY2Vzc2FyeSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0R1cGxpY2F0ZU1lc3NhZ2VzKFxuICAgIGZzOiBQYXRoTWFuaXB1bGF0aW9uLCBtZXNzYWdlczogybVQYXJzZWRNZXNzYWdlW10sXG4gICAgZHVwbGljYXRlTWVzc2FnZUhhbmRsaW5nOiBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneSwgYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoKTogRGlhZ25vc3RpY3Mge1xuICBjb25zdCBkaWFnbm9zdGljcyA9IG5ldyBEaWFnbm9zdGljcygpO1xuICBpZiAoZHVwbGljYXRlTWVzc2FnZUhhbmRsaW5nID09PSAnaWdub3JlJykgcmV0dXJuIGRpYWdub3N0aWNzO1xuXG4gIGNvbnN0IG1lc3NhZ2VNYXAgPSBuZXcgTWFwPMm1TWVzc2FnZUlkLCDJtVBhcnNlZE1lc3NhZ2VbXT4oKTtcbiAgZm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XG4gICAgaWYgKG1lc3NhZ2VNYXAuaGFzKG1lc3NhZ2UuaWQpKSB7XG4gICAgICBtZXNzYWdlTWFwLmdldChtZXNzYWdlLmlkKSEucHVzaChtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZU1hcC5zZXQobWVzc2FnZS5pZCwgW21lc3NhZ2VdKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IGR1cGxpY2F0ZXMgb2YgbWVzc2FnZU1hcC52YWx1ZXMoKSkge1xuICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA8PSAxKSBjb250aW51ZTtcbiAgICBpZiAoZHVwbGljYXRlcy5ldmVyeShtZXNzYWdlID0+IG1lc3NhZ2UudGV4dCA9PT0gZHVwbGljYXRlc1swXS50ZXh0KSkgY29udGludWU7XG5cbiAgICBjb25zdCBkaWFnbm9zdGljTWVzc2FnZSA9IGBEdXBsaWNhdGUgbWVzc2FnZXMgd2l0aCBpZCBcIiR7ZHVwbGljYXRlc1swXS5pZH1cIjpcXG5gICtcbiAgICAgICAgZHVwbGljYXRlcy5tYXAobWVzc2FnZSA9PiBzZXJpYWxpemVNZXNzYWdlKGZzLCBiYXNlUGF0aCwgbWVzc2FnZSkpLmpvaW4oJ1xcbicpO1xuICAgIGRpYWdub3N0aWNzLmFkZChkdXBsaWNhdGVNZXNzYWdlSGFuZGxpbmcsIGRpYWdub3N0aWNNZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBkaWFnbm9zdGljcztcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBtZXNzYWdlYCBvYmplY3QgaW50byBhIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gc2VyaWFsaXplTWVzc2FnZShcbiAgICBmczogUGF0aE1hbmlwdWxhdGlvbiwgYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoLCBtZXNzYWdlOiDJtVBhcnNlZE1lc3NhZ2UpOiBzdHJpbmcge1xuICBpZiAobWVzc2FnZS5sb2NhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAgICAtIFwiJHttZXNzYWdlLnRleHR9XCJgO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxvY2F0aW9uRmlsZSA9IGZzLnJlbGF0aXZlKGJhc2VQYXRoLCBtZXNzYWdlLmxvY2F0aW9uLmZpbGUpO1xuICAgIGNvbnN0IGxvY2F0aW9uUG9zaXRpb24gPSBzZXJpYWxpemVMb2NhdGlvblBvc2l0aW9uKG1lc3NhZ2UubG9jYXRpb24pO1xuICAgIHJldHVybiBgICAgLSBcIiR7bWVzc2FnZS50ZXh0fVwiIDogJHtsb2NhdGlvbkZpbGV9OiR7bG9jYXRpb25Qb3NpdGlvbn1gO1xuICB9XG59XG4iXX0=