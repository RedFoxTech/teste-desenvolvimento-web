(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/source_files/es5_extract_plugin", ["require", "exports", "tslib", "@angular/localize", "@angular/localize/src/tools/src/source_file_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeEs5ExtractPlugin = void 0;
    var tslib_1 = require("tslib");
    var localize_1 = require("@angular/localize");
    var source_file_utils_1 = require("@angular/localize/src/tools/src/source_file_utils");
    function makeEs5ExtractPlugin(fs, messages, localizeName) {
        if (localizeName === void 0) { localizeName = '$localize'; }
        return {
            visitor: {
                CallExpression: function (callPath) {
                    try {
                        var calleePath = callPath.get('callee');
                        if (source_file_utils_1.isNamedIdentifier(calleePath, localizeName) && source_file_utils_1.isGlobalIdentifier(calleePath)) {
                            var _a = tslib_1.__read(source_file_utils_1.unwrapMessagePartsFromLocalizeCall(callPath, fs), 2), messageParts = _a[0], messagePartLocations = _a[1];
                            var _b = tslib_1.__read(source_file_utils_1.unwrapSubstitutionsFromLocalizeCall(callPath, fs), 2), expressions = _b[0], expressionLocations = _b[1];
                            var _c = tslib_1.__read(callPath.get('arguments'), 2), messagePartsArg = _c[0], expressionsArg = _c[1];
                            var location = source_file_utils_1.getLocation(fs, messagePartsArg, expressionsArg);
                            var message = localize_1.ɵparseMessage(messageParts, expressions, location, messagePartLocations, expressionLocations);
                            messages.push(message);
                        }
                    }
                    catch (e) {
                        if (source_file_utils_1.isBabelParseError(e)) {
                            // If we get a BabelParseError here then something went wrong with Babel itself
                            // since there must be something wrong with the structure of the AST generated
                            // by Babel parsing a TaggedTemplateExpression.
                            throw source_file_utils_1.buildCodeFrameError(fs, callPath, e);
                        }
                        else {
                            throw e;
                        }
                    }
                }
            }
        };
    }
    exports.makeEs5ExtractPlugin = makeEs5ExtractPlugin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXM1X2V4dHJhY3RfcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbG9jYWxpemUvc3JjL3Rvb2xzL3NyYy9leHRyYWN0L3NvdXJjZV9maWxlcy9lczVfZXh0cmFjdF9wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVFBLDhDQUFnRTtJQUloRSx1RkFBNE07SUFFNU0sU0FBZ0Isb0JBQW9CLENBQ2hDLEVBQW9CLEVBQUUsUUFBMEIsRUFBRSxZQUEwQjtRQUExQiw2QkFBQSxFQUFBLDBCQUEwQjtRQUM5RSxPQUFPO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBZCxVQUFlLFFBQWtDO29CQUMvQyxJQUFJO3dCQUNGLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzFDLElBQUkscUNBQWlCLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxJQUFJLHNDQUFrQixDQUFDLFVBQVUsQ0FBQyxFQUFFOzRCQUMzRSxJQUFBLEtBQUEsZUFDRixzREFBa0MsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUEsRUFEN0MsWUFBWSxRQUFBLEVBQUUsb0JBQW9CLFFBQ1csQ0FBQzs0QkFDL0MsSUFBQSxLQUFBLGVBQ0YsdURBQW1DLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFBLEVBRDlDLFdBQVcsUUFBQSxFQUFFLG1CQUFtQixRQUNjLENBQUM7NEJBQ2hELElBQUEsS0FBQSxlQUFvQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFBLEVBQTVELGVBQWUsUUFBQSxFQUFFLGNBQWMsUUFBNkIsQ0FBQzs0QkFDcEUsSUFBTSxRQUFRLEdBQUcsK0JBQVcsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDOzRCQUNsRSxJQUFNLE9BQU8sR0FBRyx3QkFBYSxDQUN6QixZQUFZLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDOzRCQUNwRixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUN4QjtxQkFDRjtvQkFBQyxPQUFPLENBQUMsRUFBRTt3QkFDVixJQUFJLHFDQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUN4QiwrRUFBK0U7NEJBQy9FLDhFQUE4RTs0QkFDOUUsK0NBQStDOzRCQUMvQyxNQUFNLHVDQUFtQixDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQzVDOzZCQUFNOzRCQUNMLE1BQU0sQ0FBQyxDQUFDO3lCQUNUO3FCQUNGO2dCQUNILENBQUM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBL0JELG9EQStCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtQYXRoTWFuaXB1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7ybVQYXJzZWRNZXNzYWdlLCDJtXBhcnNlTWVzc2FnZX0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuaW1wb3J0IHtOb2RlUGF0aCwgUGx1Z2luT2JqfSBmcm9tICdAYmFiZWwvY29yZSc7XG5pbXBvcnQge0NhbGxFeHByZXNzaW9ufSBmcm9tICdAYmFiZWwvdHlwZXMnO1xuXG5pbXBvcnQge2J1aWxkQ29kZUZyYW1lRXJyb3IsIGdldExvY2F0aW9uLCBpc0JhYmVsUGFyc2VFcnJvciwgaXNHbG9iYWxJZGVudGlmaWVyLCBpc05hbWVkSWRlbnRpZmllciwgdW53cmFwTWVzc2FnZVBhcnRzRnJvbUxvY2FsaXplQ2FsbCwgdW53cmFwU3Vic3RpdHV0aW9uc0Zyb21Mb2NhbGl6ZUNhbGx9IGZyb20gJy4uLy4uL3NvdXJjZV9maWxlX3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFczVFeHRyYWN0UGx1Z2luKFxuICAgIGZzOiBQYXRoTWFuaXB1bGF0aW9uLCBtZXNzYWdlczogybVQYXJzZWRNZXNzYWdlW10sIGxvY2FsaXplTmFtZSA9ICckbG9jYWxpemUnKTogUGx1Z2luT2JqIHtcbiAgcmV0dXJuIHtcbiAgICB2aXNpdG9yOiB7XG4gICAgICBDYWxsRXhwcmVzc2lvbihjYWxsUGF0aDogTm9kZVBhdGg8Q2FsbEV4cHJlc3Npb24+KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgY2FsbGVlUGF0aCA9IGNhbGxQYXRoLmdldCgnY2FsbGVlJyk7XG4gICAgICAgICAgaWYgKGlzTmFtZWRJZGVudGlmaWVyKGNhbGxlZVBhdGgsIGxvY2FsaXplTmFtZSkgJiYgaXNHbG9iYWxJZGVudGlmaWVyKGNhbGxlZVBhdGgpKSB7XG4gICAgICAgICAgICBjb25zdCBbbWVzc2FnZVBhcnRzLCBtZXNzYWdlUGFydExvY2F0aW9uc10gPVxuICAgICAgICAgICAgICAgIHVud3JhcE1lc3NhZ2VQYXJ0c0Zyb21Mb2NhbGl6ZUNhbGwoY2FsbFBhdGgsIGZzKTtcbiAgICAgICAgICAgIGNvbnN0IFtleHByZXNzaW9ucywgZXhwcmVzc2lvbkxvY2F0aW9uc10gPVxuICAgICAgICAgICAgICAgIHVud3JhcFN1YnN0aXR1dGlvbnNGcm9tTG9jYWxpemVDYWxsKGNhbGxQYXRoLCBmcyk7XG4gICAgICAgICAgICBjb25zdCBbbWVzc2FnZVBhcnRzQXJnLCBleHByZXNzaW9uc0FyZ10gPSBjYWxsUGF0aC5nZXQoJ2FyZ3VtZW50cycpO1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihmcywgbWVzc2FnZVBhcnRzQXJnLCBleHByZXNzaW9uc0FyZyk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gybVwYXJzZU1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgbWVzc2FnZVBhcnRzLCBleHByZXNzaW9ucywgbG9jYXRpb24sIG1lc3NhZ2VQYXJ0TG9jYXRpb25zLCBleHByZXNzaW9uTG9jYXRpb25zKTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKGlzQmFiZWxQYXJzZUVycm9yKGUpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBnZXQgYSBCYWJlbFBhcnNlRXJyb3IgaGVyZSB0aGVuIHNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggQmFiZWwgaXRzZWxmXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVyZSBtdXN0IGJlIHNvbWV0aGluZyB3cm9uZyB3aXRoIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIEFTVCBnZW5lcmF0ZWRcbiAgICAgICAgICAgIC8vIGJ5IEJhYmVsIHBhcnNpbmcgYSBUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb24uXG4gICAgICAgICAgICB0aHJvdyBidWlsZENvZGVGcmFtZUVycm9yKGZzLCBjYWxsUGF0aCwgZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19