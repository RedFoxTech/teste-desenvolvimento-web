/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * @fileoverview Schematics for ng-new project that builds with Bazel.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/schematics/ng-add", ["require", "exports", "tslib", "@angular-devkit/core", "@angular-devkit/schematics", "@angular-devkit/schematics/tasks", "@schematics/angular/utility/dependencies", "@schematics/angular/utility/workspace", "@schematics/angular/utility/workspace-models"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.localizePolyfill = void 0;
    var tslib_1 = require("tslib");
    var core_1 = require("@angular-devkit/core");
    var schematics_1 = require("@angular-devkit/schematics");
    var tasks_1 = require("@angular-devkit/schematics/tasks");
    var dependencies_1 = require("@schematics/angular/utility/dependencies");
    var workspace_1 = require("@schematics/angular/utility/workspace");
    var workspace_models_1 = require("@schematics/angular/utility/workspace-models");
    exports.localizePolyfill = "import '@angular/localize/init';";
    function getRelevantTargetDefinitions(project, builderName) {
        var definitions = [];
        project.targets.forEach(function (target) {
            if (target.builder === builderName) {
                definitions.push(target);
            }
        });
        return definitions;
    }
    function getOptionValuesForTargetDefinition(definition, optionName) {
        var optionValues = [];
        if (definition.options && optionName in definition.options) {
            var optionValue = definition.options[optionName];
            if (typeof optionValue === 'string') {
                optionValues.push(optionValue);
            }
        }
        if (!definition.configurations) {
            return optionValues;
        }
        Object.values(definition.configurations)
            .forEach(function (configuration) {
            if (configuration && optionName in configuration) {
                var optionValue = configuration[optionName];
                if (typeof optionValue === 'string') {
                    optionValues.push(optionValue);
                }
            }
        });
        return optionValues;
    }
    function getFileListForRelevantTargetDefinitions(project, builderName, optionName) {
        var fileList = [];
        var definitions = getRelevantTargetDefinitions(project, builderName);
        definitions.forEach(function (definition) {
            var optionValues = getOptionValuesForTargetDefinition(definition, optionName);
            optionValues.forEach(function (filePath) {
                if (fileList.indexOf(filePath) === -1) {
                    fileList.push(filePath);
                }
            });
        });
        return fileList;
    }
    function prependToTargetFiles(project, builderName, optionName, str) {
        return function (host) {
            var fileList = getFileListForRelevantTargetDefinitions(project, builderName, optionName);
            fileList.forEach(function (path) {
                var data = host.read(path);
                if (!data) {
                    // If the file doesn't exist, just ignore it.
                    return;
                }
                var content = core_1.virtualFs.fileBufferToString(data);
                if (content.includes(exports.localizePolyfill) ||
                    content.includes(exports.localizePolyfill.replace(/'/g, '"'))) {
                    // If the file already contains the polyfill (or variations), ignore it too.
                    return;
                }
                // Add string at the start of the file.
                var recorder = host.beginUpdate(path);
                recorder.insertLeft(0, str);
                host.commitUpdate(recorder);
            });
        };
    }
    function moveToDependencies(host, context) {
        if (host.exists('package.json')) {
            // Remove the previous dependency and add in a new one under the desired type.
            dependencies_1.removePackageJsonDependency(host, '@angular/localize');
            dependencies_1.addPackageJsonDependency(host, {
                name: '@angular/localize',
                type: dependencies_1.NodeDependencyType.Default,
                version: "~11.2.14"
            });
            // Add a task to run the package manager. This is necessary because we updated
            // "package.json" and we want lock files to reflect this.
            context.addTask(new tasks_1.NodePackageInstallTask());
        }
    }
    function default_1(options) {
        var _this = this;
        return function (host) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var workspace, project, localizeStr;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!options.name) {
                            throw new schematics_1.SchematicsException('Option "name" is required.');
                        }
                        return [4 /*yield*/, workspace_1.getWorkspace(host)];
                    case 1:
                        workspace = _a.sent();
                        project = workspace.projects.get(options.name);
                        if (!project) {
                            throw new schematics_1.SchematicsException("Invalid project name (" + options.name + ")");
                        }
                        localizeStr = "/***************************************************************************************************\n * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.\n */\n" + exports.localizePolyfill + "\n";
                        return [2 /*return*/, schematics_1.chain([
                                prependToTargetFiles(project, workspace_models_1.Builders.Browser, 'polyfills', localizeStr),
                                prependToTargetFiles(project, workspace_models_1.Builders.Server, 'main', localizeStr),
                                // If `$localize` will be used at runtime then must install `@angular/localize`
                                // into `dependencies`, rather than the default of `devDependencies`.
                                options.useAtRuntime ? moveToDependencies : schematics_1.noop()
                            ])];
                }
            });
        }); };
    }
    exports.default = default_1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zY2hlbWF0aWNzL25nLWFkZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRzs7Ozs7Ozs7Ozs7Ozs7SUFFSCw2Q0FBMkQ7SUFDM0QseURBQTBHO0lBQzFHLDBEQUF3RTtJQUN4RSx5RUFBbUk7SUFDbkksbUVBQW1FO0lBQ25FLGlGQUFzRTtJQUt6RCxRQUFBLGdCQUFnQixHQUFHLGtDQUFrQyxDQUFDO0lBRW5FLFNBQVMsNEJBQTRCLENBQ2pDLE9BQXFDLEVBQUUsV0FBcUI7UUFDOUQsSUFBTSxXQUFXLEdBQWtDLEVBQUUsQ0FBQztRQUN0RCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQW1DO1lBQzFELElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7Z0JBQ2xDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxTQUFTLGtDQUFrQyxDQUN2QyxVQUF1QyxFQUFFLFVBQWtCO1FBQzdELElBQU0sWUFBWSxHQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDMUQsSUFBSSxXQUFXLEdBQVksVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxRCxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtnQkFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNoQztTQUNGO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDOUIsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7YUFDbkMsT0FBTyxDQUFDLFVBQUMsYUFBZ0Q7WUFDeEQsSUFBSSxhQUFhLElBQUksVUFBVSxJQUFJLGFBQWEsRUFBRTtnQkFDaEQsSUFBTSxXQUFXLEdBQVksYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtvQkFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVMsdUNBQXVDLENBQzVDLE9BQXFDLEVBQUUsV0FBcUIsRUFBRSxVQUFrQjtRQUNsRixJQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsSUFBTSxXQUFXLEdBQUcsNEJBQTRCLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZFLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUF1QztZQUMxRCxJQUFNLFlBQVksR0FBRyxrQ0FBa0MsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQWdCO2dCQUNwQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLG9CQUFvQixDQUN6QixPQUFxQyxFQUFFLFdBQXFCLEVBQUUsVUFBa0IsRUFBRSxHQUFXO1FBQy9GLE9BQU8sVUFBQyxJQUFVO1lBQ2hCLElBQU0sUUFBUSxHQUFHLHVDQUF1QyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFM0YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVk7Z0JBQzVCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ1QsNkNBQTZDO29CQUM3QyxPQUFPO2lCQUNSO2dCQUVELElBQU0sT0FBTyxHQUFHLGdCQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyx3QkFBZ0IsQ0FBQztvQkFDbEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx3QkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3pELDRFQUE0RTtvQkFDNUUsT0FBTztpQkFDUjtnQkFFRCx1Q0FBdUM7Z0JBQ3ZDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsa0JBQWtCLENBQUMsSUFBVSxFQUFFLE9BQXlCO1FBQy9ELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMvQiw4RUFBOEU7WUFDOUUsMENBQTJCLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDdkQsdUNBQXdCLENBQUMsSUFBSSxFQUFFO2dCQUM3QixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixJQUFJLEVBQUUsaUNBQWtCLENBQUMsT0FBTztnQkFDaEMsT0FBTyxFQUFFLG9CQUFvQjthQUM5QixDQUFDLENBQUM7WUFFSCw4RUFBOEU7WUFDOUUseURBQXlEO1lBQ3pELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSw4QkFBc0IsRUFBRSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsbUJBQXdCLE9BQWU7UUFBdkMsaUJBMkJDO1FBMUJDLE9BQU8sVUFBTyxJQUFVOzs7Ozt3QkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7NEJBQ2pCLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3lCQUM3RDt3QkFFaUIscUJBQU0sd0JBQVksQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXBDLFNBQVMsR0FBRyxTQUF3Qjt3QkFDcEMsT0FBTyxHQUEyQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdGLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ1osTUFBTSxJQUFJLGdDQUFtQixDQUFDLDJCQUF5QixPQUFPLENBQUMsSUFBSSxNQUFHLENBQUMsQ0FBQzt5QkFDekU7d0JBRUssV0FBVyxHQUNiLDRNQUdOLHdCQUFnQixPQUNqQixDQUFDO3dCQUVFLHNCQUFPLGtCQUFLLENBQUM7Z0NBQ1gsb0JBQW9CLENBQUMsT0FBTyxFQUFFLDJCQUFRLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7Z0NBQ3pFLG9CQUFvQixDQUFDLE9BQU8sRUFBRSwyQkFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDO2dDQUNuRSwrRUFBK0U7Z0NBQy9FLHFFQUFxRTtnQ0FDckUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGlCQUFJLEVBQUU7NkJBQ25ELENBQUMsRUFBQzs7O2FBQ0osQ0FBQztJQUNKLENBQUM7SUEzQkQsNEJBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICpcbiAqIEBmaWxlb3ZlcnZpZXcgU2NoZW1hdGljcyBmb3IgbmctbmV3IHByb2plY3QgdGhhdCBidWlsZHMgd2l0aCBCYXplbC5cbiAqL1xuXG5pbXBvcnQge3ZpcnR1YWxGcywgd29ya3NwYWNlc30gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHtjaGFpbiwgbm9vcCwgUnVsZSwgU2NoZW1hdGljQ29udGV4dCwgU2NoZW1hdGljc0V4Y2VwdGlvbiwgVHJlZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHtOb2RlUGFja2FnZUluc3RhbGxUYXNrfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcy90YXNrcyc7XG5pbXBvcnQge2FkZFBhY2thZ2VKc29uRGVwZW5kZW5jeSwgTm9kZURlcGVuZGVuY3lUeXBlLCByZW1vdmVQYWNrYWdlSnNvbkRlcGVuZGVuY3l9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9kZXBlbmRlbmNpZXMnO1xuaW1wb3J0IHtnZXRXb3Jrc3BhY2V9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS93b3Jrc3BhY2UnO1xuaW1wb3J0IHtCdWlsZGVyc30gZnJvbSAnQHNjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L3dvcmtzcGFjZS1tb2RlbHMnO1xuXG5pbXBvcnQge1NjaGVtYX0gZnJvbSAnLi9zY2hlbWEnO1xuXG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZVBvbHlmaWxsID0gYGltcG9ydCAnQGFuZ3VsYXIvbG9jYWxpemUvaW5pdCc7YDtcblxuZnVuY3Rpb24gZ2V0UmVsZXZhbnRUYXJnZXREZWZpbml0aW9ucyhcbiAgICBwcm9qZWN0OiB3b3Jrc3BhY2VzLlByb2plY3REZWZpbml0aW9uLCBidWlsZGVyTmFtZTogQnVpbGRlcnMpOiB3b3Jrc3BhY2VzLlRhcmdldERlZmluaXRpb25bXSB7XG4gIGNvbnN0IGRlZmluaXRpb25zOiB3b3Jrc3BhY2VzLlRhcmdldERlZmluaXRpb25bXSA9IFtdO1xuICBwcm9qZWN0LnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0OiB3b3Jrc3BhY2VzLlRhcmdldERlZmluaXRpb24pOiB2b2lkID0+IHtcbiAgICBpZiAodGFyZ2V0LmJ1aWxkZXIgPT09IGJ1aWxkZXJOYW1lKSB7XG4gICAgICBkZWZpbml0aW9ucy5wdXNoKHRhcmdldCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25WYWx1ZXNGb3JUYXJnZXREZWZpbml0aW9uKFxuICAgIGRlZmluaXRpb246IHdvcmtzcGFjZXMuVGFyZ2V0RGVmaW5pdGlvbiwgb3B0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zdCBvcHRpb25WYWx1ZXM6IHN0cmluZ1tdID0gW107XG4gIGlmIChkZWZpbml0aW9uLm9wdGlvbnMgJiYgb3B0aW9uTmFtZSBpbiBkZWZpbml0aW9uLm9wdGlvbnMpIHtcbiAgICBsZXQgb3B0aW9uVmFsdWU6IHVua25vd24gPSBkZWZpbml0aW9uLm9wdGlvbnNbb3B0aW9uTmFtZV07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvblZhbHVlcy5wdXNoKG9wdGlvblZhbHVlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFkZWZpbml0aW9uLmNvbmZpZ3VyYXRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvblZhbHVlcztcbiAgfVxuICBPYmplY3QudmFsdWVzKGRlZmluaXRpb24uY29uZmlndXJhdGlvbnMpXG4gICAgICAuZm9yRWFjaCgoY29uZmlndXJhdGlvbjogUmVjb3JkPHN0cmluZywgdW5rbm93bj58dW5kZWZpbmVkKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIG9wdGlvbk5hbWUgaW4gY29uZmlndXJhdGlvbikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlOiB1bmtub3duID0gY29uZmlndXJhdGlvbltvcHRpb25OYW1lXTtcbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3B0aW9uVmFsdWVzLnB1c2gob3B0aW9uVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIHJldHVybiBvcHRpb25WYWx1ZXM7XG59XG5cbmZ1bmN0aW9uIGdldEZpbGVMaXN0Rm9yUmVsZXZhbnRUYXJnZXREZWZpbml0aW9ucyhcbiAgICBwcm9qZWN0OiB3b3Jrc3BhY2VzLlByb2plY3REZWZpbml0aW9uLCBidWlsZGVyTmFtZTogQnVpbGRlcnMsIG9wdGlvbk5hbWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc3QgZmlsZUxpc3Q6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGRlZmluaXRpb25zID0gZ2V0UmVsZXZhbnRUYXJnZXREZWZpbml0aW9ucyhwcm9qZWN0LCBidWlsZGVyTmFtZSk7XG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb246IHdvcmtzcGFjZXMuVGFyZ2V0RGVmaW5pdGlvbik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IGdldE9wdGlvblZhbHVlc0ZvclRhcmdldERlZmluaXRpb24oZGVmaW5pdGlvbiwgb3B0aW9uTmFtZSk7XG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKGZpbGVQYXRoOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgIGlmIChmaWxlTGlzdC5pbmRleE9mKGZpbGVQYXRoKSA9PT0gLTEpIHtcbiAgICAgICAgZmlsZUxpc3QucHVzaChmaWxlUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmlsZUxpc3Q7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmRUb1RhcmdldEZpbGVzKFxuICAgIHByb2plY3Q6IHdvcmtzcGFjZXMuUHJvamVjdERlZmluaXRpb24sIGJ1aWxkZXJOYW1lOiBCdWlsZGVycywgb3B0aW9uTmFtZTogc3RyaW5nLCBzdHI6IHN0cmluZykge1xuICByZXR1cm4gKGhvc3Q6IFRyZWUpID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGdldEZpbGVMaXN0Rm9yUmVsZXZhbnRUYXJnZXREZWZpbml0aW9ucyhwcm9qZWN0LCBidWlsZGVyTmFtZSwgb3B0aW9uTmFtZSk7XG5cbiAgICBmaWxlTGlzdC5mb3JFYWNoKChwYXRoOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBob3N0LnJlYWQocGF0aCk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgZG9lc24ndCBleGlzdCwganVzdCBpZ25vcmUgaXQuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGVudCA9IHZpcnR1YWxGcy5maWxlQnVmZmVyVG9TdHJpbmcoZGF0YSk7XG4gICAgICBpZiAoY29udGVudC5pbmNsdWRlcyhsb2NhbGl6ZVBvbHlmaWxsKSB8fFxuICAgICAgICAgIGNvbnRlbnQuaW5jbHVkZXMobG9jYWxpemVQb2x5ZmlsbC5yZXBsYWNlKC8nL2csICdcIicpKSkge1xuICAgICAgICAvLyBJZiB0aGUgZmlsZSBhbHJlYWR5IGNvbnRhaW5zIHRoZSBwb2x5ZmlsbCAob3IgdmFyaWF0aW9ucyksIGlnbm9yZSBpdCB0b28uXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHN0cmluZyBhdCB0aGUgc3RhcnQgb2YgdGhlIGZpbGUuXG4gICAgICBjb25zdCByZWNvcmRlciA9IGhvc3QuYmVnaW5VcGRhdGUocGF0aCk7XG4gICAgICByZWNvcmRlci5pbnNlcnRMZWZ0KDAsIHN0cik7XG4gICAgICBob3N0LmNvbW1pdFVwZGF0ZShyZWNvcmRlcik7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vdmVUb0RlcGVuZGVuY2llcyhob3N0OiBUcmVlLCBjb250ZXh0OiBTY2hlbWF0aWNDb250ZXh0KSB7XG4gIGlmIChob3N0LmV4aXN0cygncGFja2FnZS5qc29uJykpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHByZXZpb3VzIGRlcGVuZGVuY3kgYW5kIGFkZCBpbiBhIG5ldyBvbmUgdW5kZXIgdGhlIGRlc2lyZWQgdHlwZS5cbiAgICByZW1vdmVQYWNrYWdlSnNvbkRlcGVuZGVuY3koaG9zdCwgJ0Bhbmd1bGFyL2xvY2FsaXplJyk7XG4gICAgYWRkUGFja2FnZUpzb25EZXBlbmRlbmN5KGhvc3QsIHtcbiAgICAgIG5hbWU6ICdAYW5ndWxhci9sb2NhbGl6ZScsXG4gICAgICB0eXBlOiBOb2RlRGVwZW5kZW5jeVR5cGUuRGVmYXVsdCxcbiAgICAgIHZlcnNpb246IGB+MC4wLjAtUExBQ0VIT0xERVJgXG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYSB0YXNrIHRvIHJ1biB0aGUgcGFja2FnZSBtYW5hZ2VyLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHdlIHVwZGF0ZWRcbiAgICAvLyBcInBhY2thZ2UuanNvblwiIGFuZCB3ZSB3YW50IGxvY2sgZmlsZXMgdG8gcmVmbGVjdCB0aGlzLlxuICAgIGNvbnRleHQuYWRkVGFzayhuZXcgTm9kZVBhY2thZ2VJbnN0YWxsVGFzaygpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zOiBTY2hlbWEpOiBSdWxlIHtcbiAgcmV0dXJuIGFzeW5jIChob3N0OiBUcmVlKSA9PiB7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBTY2hlbWF0aWNzRXhjZXB0aW9uKCdPcHRpb24gXCJuYW1lXCIgaXMgcmVxdWlyZWQuJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgd29ya3NwYWNlID0gYXdhaXQgZ2V0V29ya3NwYWNlKGhvc3QpO1xuICAgIGNvbnN0IHByb2plY3Q6IHdvcmtzcGFjZXMuUHJvamVjdERlZmluaXRpb258dW5kZWZpbmVkID0gd29ya3NwYWNlLnByb2plY3RzLmdldChvcHRpb25zLm5hbWUpO1xuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgdGhyb3cgbmV3IFNjaGVtYXRpY3NFeGNlcHRpb24oYEludmFsaWQgcHJvamVjdCBuYW1lICgke29wdGlvbnMubmFtZX0pYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYWxpemVTdHIgPVxuICAgICAgICBgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTG9hZCBcXGAkbG9jYWxpemVcXGAgb250byB0aGUgZ2xvYmFsIHNjb3BlIC0gdXNlZCBpZiBpMThuIHRhZ3MgYXBwZWFyIGluIEFuZ3VsYXIgdGVtcGxhdGVzLlxuICovXG4ke2xvY2FsaXplUG9seWZpbGx9XG5gO1xuXG4gICAgcmV0dXJuIGNoYWluKFtcbiAgICAgIHByZXBlbmRUb1RhcmdldEZpbGVzKHByb2plY3QsIEJ1aWxkZXJzLkJyb3dzZXIsICdwb2x5ZmlsbHMnLCBsb2NhbGl6ZVN0ciksXG4gICAgICBwcmVwZW5kVG9UYXJnZXRGaWxlcyhwcm9qZWN0LCBCdWlsZGVycy5TZXJ2ZXIsICdtYWluJywgbG9jYWxpemVTdHIpLFxuICAgICAgLy8gSWYgYCRsb2NhbGl6ZWAgd2lsbCBiZSB1c2VkIGF0IHJ1bnRpbWUgdGhlbiBtdXN0IGluc3RhbGwgYEBhbmd1bGFyL2xvY2FsaXplYFxuICAgICAgLy8gaW50byBgZGVwZW5kZW5jaWVzYCwgcmF0aGVyIHRoYW4gdGhlIGRlZmF1bHQgb2YgYGRldkRlcGVuZGVuY2llc2AuXG4gICAgICBvcHRpb25zLnVzZUF0UnVudGltZSA/IG1vdmVUb0RlcGVuZGVuY2llcyA6IG5vb3AoKVxuICAgIF0pO1xuICB9O1xufVxuIl19