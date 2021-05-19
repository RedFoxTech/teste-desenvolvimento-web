(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/source_files/es2015_extract_plugin", ["require", "exports", "tslib", "@angular/localize", "@angular/localize/src/tools/src/source_file_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeEs2015ExtractPlugin = void 0;
    var tslib_1 = require("tslib");
    var localize_1 = require("@angular/localize");
    var source_file_utils_1 = require("@angular/localize/src/tools/src/source_file_utils");
    function makeEs2015ExtractPlugin(fs, messages, localizeName) {
        if (localizeName === void 0) { localizeName = '$localize'; }
        return {
            visitor: {
                TaggedTemplateExpression: function (path) {
                    var tag = path.get('tag');
                    if (source_file_utils_1.isNamedIdentifier(tag, localizeName) && source_file_utils_1.isGlobalIdentifier(tag)) {
                        var quasiPath = path.get('quasi');
                        var _a = tslib_1.__read(source_file_utils_1.unwrapMessagePartsFromTemplateLiteral(quasiPath.get('quasis'), fs), 2), messageParts = _a[0], messagePartLocations = _a[1];
                        var _b = tslib_1.__read(source_file_utils_1.unwrapExpressionsFromTemplateLiteral(quasiPath, fs), 2), expressions = _b[0], expressionLocations = _b[1];
                        var location = source_file_utils_1.getLocation(fs, quasiPath);
                        var message = localize_1.ɵparseMessage(messageParts, expressions, location, messagePartLocations, expressionLocations);
                        messages.push(message);
                    }
                }
            }
        };
    }
    exports.makeEs2015ExtractPlugin = makeEs2015ExtractPlugin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMyMDE1X2V4dHJhY3RfcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbG9jYWxpemUvc3JjL3Rvb2xzL3NyYy9leHRyYWN0L3NvdXJjZV9maWxlcy9lczIwMTVfZXh0cmFjdF9wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVFBLDhDQUFnRTtJQUloRSx1RkFBd0s7SUFFeEssU0FBZ0IsdUJBQXVCLENBQ25DLEVBQW9CLEVBQUUsUUFBMEIsRUFBRSxZQUEwQjtRQUExQiw2QkFBQSxFQUFBLDBCQUEwQjtRQUM5RSxPQUFPO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLHdCQUF3QixFQUF4QixVQUF5QixJQUF3QztvQkFDL0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxxQ0FBaUIsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLElBQUksc0NBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ25FLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzlCLElBQUEsS0FBQSxlQUNGLHlEQUFxQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUEsRUFEL0QsWUFBWSxRQUFBLEVBQUUsb0JBQW9CLFFBQzZCLENBQUM7d0JBQ2pFLElBQUEsS0FBQSxlQUNGLHdEQUFvQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBQSxFQURoRCxXQUFXLFFBQUEsRUFBRSxtQkFBbUIsUUFDZ0IsQ0FBQzt3QkFDeEQsSUFBTSxRQUFRLEdBQUcsK0JBQVcsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzVDLElBQU0sT0FBTyxHQUFHLHdCQUFhLENBQ3pCLFlBQVksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLENBQUM7d0JBQ3BGLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3hCO2dCQUNILENBQUM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBcEJELDBEQW9CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtQYXRoTWFuaXB1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7ybVQYXJzZWRNZXNzYWdlLCDJtXBhcnNlTWVzc2FnZX0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuaW1wb3J0IHtOb2RlUGF0aCwgUGx1Z2luT2JqfSBmcm9tICdAYmFiZWwvY29yZSc7XG5pbXBvcnQge1RhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvbn0gZnJvbSAnQGJhYmVsL3R5cGVzJztcblxuaW1wb3J0IHtnZXRMb2NhdGlvbiwgaXNHbG9iYWxJZGVudGlmaWVyLCBpc05hbWVkSWRlbnRpZmllciwgdW53cmFwRXhwcmVzc2lvbnNGcm9tVGVtcGxhdGVMaXRlcmFsLCB1bndyYXBNZXNzYWdlUGFydHNGcm9tVGVtcGxhdGVMaXRlcmFsfSBmcm9tICcuLi8uLi9zb3VyY2VfZmlsZV91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXMyMDE1RXh0cmFjdFBsdWdpbihcbiAgICBmczogUGF0aE1hbmlwdWxhdGlvbiwgbWVzc2FnZXM6IMm1UGFyc2VkTWVzc2FnZVtdLCBsb2NhbGl6ZU5hbWUgPSAnJGxvY2FsaXplJyk6IFBsdWdpbk9iaiB7XG4gIHJldHVybiB7XG4gICAgdmlzaXRvcjoge1xuICAgICAgVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uKHBhdGg6IE5vZGVQYXRoPFRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvbj4pIHtcbiAgICAgICAgY29uc3QgdGFnID0gcGF0aC5nZXQoJ3RhZycpO1xuICAgICAgICBpZiAoaXNOYW1lZElkZW50aWZpZXIodGFnLCBsb2NhbGl6ZU5hbWUpICYmIGlzR2xvYmFsSWRlbnRpZmllcih0YWcpKSB7XG4gICAgICAgICAgY29uc3QgcXVhc2lQYXRoID0gcGF0aC5nZXQoJ3F1YXNpJyk7XG4gICAgICAgICAgY29uc3QgW21lc3NhZ2VQYXJ0cywgbWVzc2FnZVBhcnRMb2NhdGlvbnNdID1cbiAgICAgICAgICAgICAgdW53cmFwTWVzc2FnZVBhcnRzRnJvbVRlbXBsYXRlTGl0ZXJhbChxdWFzaVBhdGguZ2V0KCdxdWFzaXMnKSwgZnMpO1xuICAgICAgICAgIGNvbnN0IFtleHByZXNzaW9ucywgZXhwcmVzc2lvbkxvY2F0aW9uc10gPVxuICAgICAgICAgICAgICB1bndyYXBFeHByZXNzaW9uc0Zyb21UZW1wbGF0ZUxpdGVyYWwocXVhc2lQYXRoLCBmcyk7XG4gICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihmcywgcXVhc2lQYXRoKTtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gybVwYXJzZU1lc3NhZ2UoXG4gICAgICAgICAgICAgIG1lc3NhZ2VQYXJ0cywgZXhwcmVzc2lvbnMsIGxvY2F0aW9uLCBtZXNzYWdlUGFydExvY2F0aW9ucywgZXhwcmVzc2lvbkxvY2F0aW9ucyk7XG4gICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==