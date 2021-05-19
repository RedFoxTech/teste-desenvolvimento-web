#!/usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/main", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/logging", "glob", "yargs", "@angular/localize/src/tools/src/extract/duplicates", "@angular/localize/src/tools/src/extract/extraction", "@angular/localize/src/tools/src/extract/translation_files/arb_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/json_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/xliff1_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/xliff2_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/xmb_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/format_options"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSerializer = exports.extractTranslations = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var logging_1 = require("@angular/compiler-cli/src/ngtsc/logging");
    var glob = require("glob");
    var yargs = require("yargs");
    var duplicates_1 = require("@angular/localize/src/tools/src/extract/duplicates");
    var extraction_1 = require("@angular/localize/src/tools/src/extract/extraction");
    var arb_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/arb_translation_serializer");
    var json_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/json_translation_serializer");
    var xliff1_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/xliff1_translation_serializer");
    var xliff2_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/xliff2_translation_serializer");
    var xmb_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/xmb_translation_serializer");
    var format_options_1 = require("@angular/localize/src/tools/src/extract/translation_files/format_options");
    if (require.main === module) {
        process.title = 'Angular Localization Message Extractor (localize-extract)';
        var args = process.argv.slice(2);
        var options = yargs
            .option('l', {
            alias: 'locale',
            describe: 'The locale of the source being processed',
            default: 'en',
            type: 'string',
        })
            .option('r', {
            alias: 'root',
            default: '.',
            describe: 'The root path for other paths provided in these options.\n' +
                'This should either be absolute or relative to the current working directory.',
            type: 'string',
        })
            .option('s', {
            alias: 'source',
            required: true,
            describe: 'A glob pattern indicating what files to search for translations, e.g. `./dist/**/*.js`.\n' +
                'This should be relative to the root path.',
            type: 'string',
        })
            .option('f', {
            alias: 'format',
            required: true,
            choices: ['xmb', 'xlf', 'xlif', 'xliff', 'xlf2', 'xlif2', 'xliff2', 'json'],
            describe: 'The format of the translation file.',
            type: 'string',
        })
            .option('formatOptions', {
            describe: 'Additional options to pass to the translation file serializer, in the form of JSON formatted key-value string pairs:\n' +
                'For example: `--formatOptions {"xml:space":"preserve"}.\n' +
                'The meaning of the options is specific to the format being serialized.',
            type: 'string'
        })
            .option('o', {
            alias: 'outputPath',
            required: true,
            describe: 'A path to where the translation file will be written. This should be relative to the root path.',
            type: 'string',
        })
            .option('loglevel', {
            describe: 'The lowest severity logging message that should be output.',
            choices: ['debug', 'info', 'warn', 'error'],
            type: 'string',
        })
            .option('useSourceMaps', {
            type: 'boolean',
            default: true,
            describe: 'Whether to generate source information in the output files by following source-map mappings found in the source files',
        })
            .option('useLegacyIds', {
            type: 'boolean',
            default: true,
            describe: 'Whether to use the legacy id format for messages that were extracted from Angular templates.',
        })
            .option('d', {
            alias: 'duplicateMessageHandling',
            describe: 'How to handle messages with the same id but different text.',
            choices: ['error', 'warning', 'ignore'],
            default: 'warning',
            type: 'string',
        })
            .strict()
            .help()
            .parse(args);
        var fileSystem = new file_system_1.NodeJSFileSystem();
        file_system_1.setFileSystem(fileSystem);
        var rootPath = options.r;
        var sourceFilePaths = glob.sync(options.s, { cwd: rootPath, nodir: true });
        var logLevel = options.loglevel;
        var logger = new logging_1.ConsoleLogger(logLevel ? logging_1.LogLevel[logLevel] : logging_1.LogLevel.warn);
        var duplicateMessageHandling = options.d;
        var formatOptions = format_options_1.parseFormatOptions(options.formatOptions);
        extractTranslations({
            rootPath: rootPath,
            sourceFilePaths: sourceFilePaths,
            sourceLocale: options.l,
            format: options.f,
            outputPath: options.o,
            logger: logger,
            useSourceMaps: options.useSourceMaps,
            useLegacyIds: options.useLegacyIds,
            duplicateMessageHandling: duplicateMessageHandling,
            formatOptions: formatOptions,
            fileSystem: fileSystem,
        });
    }
    function extractTranslations(_a) {
        var e_1, _b;
        var rootPath = _a.rootPath, sourceFilePaths = _a.sourceFilePaths, sourceLocale = _a.sourceLocale, format = _a.format, output = _a.outputPath, logger = _a.logger, useSourceMaps = _a.useSourceMaps, useLegacyIds = _a.useLegacyIds, duplicateMessageHandling = _a.duplicateMessageHandling, _c = _a.formatOptions, formatOptions = _c === void 0 ? {} : _c, fs = _a.fileSystem;
        var basePath = fs.resolve(rootPath);
        var extractor = new extraction_1.MessageExtractor(fs, logger, { basePath: basePath, useSourceMaps: useSourceMaps });
        var messages = [];
        try {
            for (var sourceFilePaths_1 = tslib_1.__values(sourceFilePaths), sourceFilePaths_1_1 = sourceFilePaths_1.next(); !sourceFilePaths_1_1.done; sourceFilePaths_1_1 = sourceFilePaths_1.next()) {
                var file = sourceFilePaths_1_1.value;
                messages.push.apply(messages, tslib_1.__spread(extractor.extractMessages(file)));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sourceFilePaths_1_1 && !sourceFilePaths_1_1.done && (_b = sourceFilePaths_1.return)) _b.call(sourceFilePaths_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var diagnostics = duplicates_1.checkDuplicateMessages(fs, messages, duplicateMessageHandling, basePath);
        if (diagnostics.hasErrors) {
            throw new Error(diagnostics.formatDiagnostics('Failed to extract messages'));
        }
        var outputPath = fs.resolve(rootPath, output);
        var serializer = getSerializer(format, sourceLocale, fs.dirname(outputPath), useLegacyIds, formatOptions, fs);
        var translationFile = serializer.serialize(messages);
        fs.ensureDir(fs.dirname(outputPath));
        fs.writeFile(outputPath, translationFile);
        if (diagnostics.messages.length) {
            logger.warn(diagnostics.formatDiagnostics('Messages extracted with warnings'));
        }
    }
    exports.extractTranslations = extractTranslations;
    function getSerializer(format, sourceLocale, rootPath, useLegacyIds, formatOptions, fs) {
        if (formatOptions === void 0) { formatOptions = {}; }
        switch (format) {
            case 'xlf':
            case 'xlif':
            case 'xliff':
                return new xliff1_translation_serializer_1.Xliff1TranslationSerializer(sourceLocale, rootPath, useLegacyIds, formatOptions, fs);
            case 'xlf2':
            case 'xlif2':
            case 'xliff2':
                return new xliff2_translation_serializer_1.Xliff2TranslationSerializer(sourceLocale, rootPath, useLegacyIds, formatOptions, fs);
            case 'xmb':
                return new xmb_translation_serializer_1.XmbTranslationSerializer(rootPath, useLegacyIds, fs);
            case 'json':
                return new json_translation_serializer_1.SimpleJsonTranslationSerializer(sourceLocale);
            case 'arb':
                return new arb_translation_serializer_1.ArbTranslationSerializer(sourceLocale, rootPath, fs);
        }
        throw new Error("No translation serializer can handle the provided format: " + format);
    }
    exports.getSerializer = getSerializer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvZXh0cmFjdC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQ0E7Ozs7OztPQU1HO0lBQ0gsMkVBQTBJO0lBQzFJLG1FQUF3RjtJQUV4RiwyQkFBNkI7SUFDN0IsNkJBQStCO0lBSS9CLGlGQUFvRDtJQUNwRCxpRkFBOEM7SUFFOUMsbUlBQXdGO0lBQ3hGLHFJQUFnRztJQUNoRyx5SUFBOEY7SUFDOUYseUlBQThGO0lBQzlGLG1JQUF3RjtJQUN4RiwyR0FBcUY7SUFFckYsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUMzQixPQUFPLENBQUMsS0FBSyxHQUFHLDJEQUEyRCxDQUFDO1FBQzVFLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQU0sT0FBTyxHQUNULEtBQUs7YUFDQSxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1gsS0FBSyxFQUFFLFFBQVE7WUFDZixRQUFRLEVBQUUsMENBQTBDO1lBQ3BELE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDO2FBQ0QsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLEdBQUc7WUFDWixRQUFRLEVBQUUsNERBQTREO2dCQUNsRSw4RUFBOEU7WUFDbEYsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDO2FBQ0QsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNYLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQ0osMkZBQTJGO2dCQUMzRiwyQ0FBMkM7WUFDL0MsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDO2FBQ0Qs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QyxDQUFDO1lBQzNELEtBQUssS0FBSztnQkFDUixPQUFPLElBQUkscURBQXdCLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNuRTtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQTZELE1BQVEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUF0QkQsc0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge3NldEZpbGVTeXN0ZW0sIE5vZGVKU0ZpbGVTeXN0ZW0sIEFic29sdXRlRnNQYXRoLCBGaWxlU3lzdGVtLCBQYXRoTWFuaXB1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7Q29uc29sZUxvZ2dlciwgTG9nZ2VyLCBMb2dMZXZlbH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9sb2dnaW5nJztcbmltcG9ydCB7ybVQYXJzZWRNZXNzYWdlfSBmcm9tICdAYW5ndWxhci9sb2NhbGl6ZSc7XG5pbXBvcnQgKiBhcyBnbG9iIGZyb20gJ2dsb2InO1xuaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQge0RpYWdub3N0aWNIYW5kbGluZ1N0cmF0ZWd5fSBmcm9tICcuLi9kaWFnbm9zdGljcyc7XG5cbmltcG9ydCB7Y2hlY2tEdXBsaWNhdGVNZXNzYWdlc30gZnJvbSAnLi9kdXBsaWNhdGVzJztcbmltcG9ydCB7TWVzc2FnZUV4dHJhY3Rvcn0gZnJvbSAnLi9leHRyYWN0aW9uJztcbmltcG9ydCB7VHJhbnNsYXRpb25TZXJpYWxpemVyfSBmcm9tICcuL3RyYW5zbGF0aW9uX2ZpbGVzL3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtBcmJUcmFuc2xhdGlvblNlcmlhbGl6ZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMvYXJiX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtTaW1wbGVKc29uVHJhbnNsYXRpb25TZXJpYWxpemVyfSBmcm9tICcuL3RyYW5zbGF0aW9uX2ZpbGVzL2pzb25fdHJhbnNsYXRpb25fc2VyaWFsaXplcic7XG5pbXBvcnQge1hsaWZmMVRyYW5zbGF0aW9uU2VyaWFsaXplcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9maWxlcy94bGlmZjFfdHJhbnNsYXRpb25fc2VyaWFsaXplcic7XG5pbXBvcnQge1hsaWZmMlRyYW5zbGF0aW9uU2VyaWFsaXplcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9maWxlcy94bGlmZjJfdHJhbnNsYXRpb25fc2VyaWFsaXplcic7XG5pbXBvcnQge1htYlRyYW5zbGF0aW9uU2VyaWFsaXplcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9maWxlcy94bWJfdHJhbnNsYXRpb25fc2VyaWFsaXplcic7XG5pbXBvcnQge0Zvcm1hdE9wdGlvbnMsIHBhcnNlRm9ybWF0T3B0aW9uc30gZnJvbSAnLi90cmFuc2xhdGlvbl9maWxlcy9mb3JtYXRfb3B0aW9ucyc7XG5cbmlmIChyZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xuICBwcm9jZXNzLnRpdGxlID0gJ0FuZ3VsYXIgTG9jYWxpemF0aW9uIE1lc3NhZ2UgRXh0cmFjdG9yIChsb2NhbGl6ZS1leHRyYWN0KSc7XG4gIGNvbnN0IGFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG4gIGNvbnN0IG9wdGlvbnMgPVxuICAgICAgeWFyZ3NcbiAgICAgICAgICAub3B0aW9uKCdsJywge1xuICAgICAgICAgICAgYWxpYXM6ICdsb2NhbGUnLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdUaGUgbG9jYWxlIG9mIHRoZSBzb3VyY2UgYmVpbmcgcHJvY2Vzc2VkJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdlbicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3InLCB7XG4gICAgICAgICAgICBhbGlhczogJ3Jvb3QnLFxuICAgICAgICAgICAgZGVmYXVsdDogJy4nLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdUaGUgcm9vdCBwYXRoIGZvciBvdGhlciBwYXRocyBwcm92aWRlZCBpbiB0aGVzZSBvcHRpb25zLlxcbicgK1xuICAgICAgICAgICAgICAgICdUaGlzIHNob3VsZCBlaXRoZXIgYmUgYWJzb2x1dGUgb3IgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkuJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigncycsIHtcbiAgICAgICAgICAgIGFsaWFzOiAnc291cmNlJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgZGVzY3JpYmU6XG4gICAgICAgICAgICAgICAgJ0EgZ2xvYiBwYXR0ZXJuIGluZGljYXRpbmcgd2hhdCBmaWxlcyB0byBzZWFyY2ggZm9yIHRyYW5zbGF0aW9ucywgZS5nLiBgLi9kaXN0LyoqLyouanNgLlxcbicgK1xuICAgICAgICAgICAgICAgICdUaGlzIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgcm9vdCBwYXRoLicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2YnLCB7XG4gICAgICAgICAgICBhbGlhczogJ2Zvcm1hdCcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNob2ljZXM6IFsneG1iJywgJ3hsZicsICd4bGlmJywgJ3hsaWZmJywgJ3hsZjInLCAneGxpZjInLCAneGxpZmYyJywgJ2pzb24nXSxcbiAgICAgICAgICAgIGRlc2NyaWJlOiAnVGhlIGZvcm1hdCBvZiB0aGUgdHJhbnNsYXRpb24gZmlsZS4nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdmb3JtYXRPcHRpb25zJywge1xuICAgICAgICAgICAgZGVzY3JpYmU6XG4gICAgICAgICAgICAgICAgJ0FkZGl0aW9uYWwgb3B0aW9ucyB0byBwYXNzIHRvIHRoZSB0cmFuc2xhdGlvbiBmaWxlIHNlcmlhbGl6ZXIsIGluIHRoZSBmb3JtIG9mIEpTT04gZm9ybWF0dGVkIGtleS12YWx1ZSBzdHJpbmcgcGFpcnM6XFxuJyArXG4gICAgICAgICAgICAgICAgJ0ZvciBleGFtcGxlOiBgLS1mb3JtYXRPcHRpb25zIHtcInhtbDpzcGFjZVwiOlwicHJlc2VydmVcIn0uXFxuJyArXG4gICAgICAgICAgICAgICAgJ1RoZSBtZWFuaW5nIG9mIHRoZSBvcHRpb25zIGlzIHNwZWNpZmljIHRvIHRoZSBmb3JtYXQgYmVpbmcgc2VyaWFsaXplZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ28nLCB7XG4gICAgICAgICAgICBhbGlhczogJ291dHB1dFBhdGgnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnQSBwYXRoIHRvIHdoZXJlIHRoZSB0cmFuc2xhdGlvbiBmaWxlIHdpbGwgYmUgd3JpdHRlbi4gVGhpcyBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIHJvb3QgcGF0aC4nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdsb2dsZXZlbCcsIHtcbiAgICAgICAgICAgIGRlc2NyaWJlOiAnVGhlIGxvd2VzdCBzZXZlcml0eSBsb2dnaW5nIG1lc3NhZ2UgdGhhdCBzaG91bGQgYmUgb3V0cHV0LicsXG4gICAgICAgICAgICBjaG9pY2VzOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCd1c2VTb3VyY2VNYXBzJywge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIGRlc2NyaWJlOlxuICAgICAgICAgICAgICAgICdXaGV0aGVyIHRvIGdlbmVyYXRlIHNvdXJjZSBpbmZvcm1hdGlvbiBpbiB0aGUgb3V0cHV0IGZpbGVzIGJ5IGZvbGxvd2luZyBzb3VyY2UtbWFwIG1hcHBpbmdzIGZvdW5kIGluIHRoZSBzb3VyY2UgZmlsZXMnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigndXNlTGVnYWN5SWRzJywge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIGRlc2NyaWJlOlxuICAgICAgICAgICAgICAgICdXaGV0aGVyIHRvIHVzZSB0aGUgbGVnYWN5IGlkIGZvcm1hdCBmb3IgbWVzc2FnZXMgdGhhdCB3ZXJlIGV4dHJhY3RlZCBmcm9tIEFuZ3VsYXIgdGVtcGxhdGVzLicsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdkJywge1xuICAgICAgICAgICAgYWxpYXM6ICdkdXBsaWNhdGVNZXNzYWdlSGFuZGxpbmcnLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdIb3cgdG8gaGFuZGxlIG1lc3NhZ2VzIHdpdGggdGhlIHNhbWUgaWQgYnV0IGRpZmZlcmVudCB0ZXh0LicsXG4gICAgICAgICAgICBjaG9pY2VzOiBbJ2Vycm9yJywgJ3dhcm5pbmcnLCAnaWdub3JlJ10sXG4gICAgICAgICAgICBkZWZhdWx0OiAnd2FybmluZycsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zdHJpY3QoKVxuICAgICAgICAgIC5oZWxwKClcbiAgICAgICAgICAucGFyc2UoYXJncyk7XG5cbiAgY29uc3QgZmlsZVN5c3RlbSA9IG5ldyBOb2RlSlNGaWxlU3lzdGVtKCk7XG4gIHNldEZpbGVTeXN0ZW0oZmlsZVN5c3RlbSk7XG5cbiAgY29uc3Qgcm9vdFBhdGggPSBvcHRpb25zLnI7XG4gIGNvbnN0IHNvdXJjZUZpbGVQYXRocyA9IGdsb2Iuc3luYyhvcHRpb25zLnMsIHtjd2Q6IHJvb3RQYXRoLCBub2RpcjogdHJ1ZX0pO1xuICBjb25zdCBsb2dMZXZlbCA9IG9wdGlvbnMubG9nbGV2ZWwgYXMgKGtleW9mIHR5cGVvZiBMb2dMZXZlbCkgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKGxvZ0xldmVsID8gTG9nTGV2ZWxbbG9nTGV2ZWxdIDogTG9nTGV2ZWwud2Fybik7XG4gIGNvbnN0IGR1cGxpY2F0ZU1lc3NhZ2VIYW5kbGluZyA9IG9wdGlvbnMuZCBhcyBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneTtcbiAgY29uc3QgZm9ybWF0T3B0aW9ucyA9IHBhcnNlRm9ybWF0T3B0aW9ucyhvcHRpb25zLmZvcm1hdE9wdGlvbnMpO1xuXG5cbiAgZXh0cmFjdFRyYW5zbGF0aW9ucyh7XG4gICAgcm9vdFBhdGgsXG4gICAgc291cmNlRmlsZVBhdGhzLFxuICAgIHNvdXJjZUxvY2FsZTogb3B0aW9ucy5sLFxuICAgIGZvcm1hdDogb3B0aW9ucy5mLFxuICAgIG91dHB1dFBhdGg6IG9wdGlvbnMubyxcbiAgICBsb2dnZXIsXG4gICAgdXNlU291cmNlTWFwczogb3B0aW9ucy51c2VTb3VyY2VNYXBzLFxuICAgIHVzZUxlZ2FjeUlkczogb3B0aW9ucy51c2VMZWdhY3lJZHMsXG4gICAgZHVwbGljYXRlTWVzc2FnZUhhbmRsaW5nLFxuICAgIGZvcm1hdE9wdGlvbnMsXG4gICAgZmlsZVN5c3RlbSxcbiAgfSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0cmFjdFRyYW5zbGF0aW9uc09wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGxvY2FsZSBvZiB0aGUgc291cmNlIGJlaW5nIHByb2Nlc3NlZC5cbiAgICovXG4gIHNvdXJjZUxvY2FsZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGJhc2UgcGF0aCBmb3Igb3RoZXIgcGF0aHMgcHJvdmlkZWQgaW4gdGhlc2Ugb3B0aW9ucy5cbiAgICogVGhpcyBzaG91bGQgZWl0aGVyIGJlIGFic29sdXRlIG9yIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5LlxuICAgKi9cbiAgcm9vdFBhdGg6IHN0cmluZztcbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIHBhdGhzIHRvIGZpbGVzIHRvIHNlYXJjaCBmb3IgdHJhbnNsYXRpb25zLiBUaGVzZSBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlXG4gICAqIHJvb3RQYXRoLlxuICAgKi9cbiAgc291cmNlRmlsZVBhdGhzOiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFRoZSBmb3JtYXQgb2YgdGhlIHRyYW5zbGF0aW9uIGZpbGUuXG4gICAqL1xuICBmb3JtYXQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgcGF0aCB0byB3aGVyZSB0aGUgdHJhbnNsYXRpb24gZmlsZSB3aWxsIGJlIHdyaXR0ZW4uIFRoaXMgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSByb290UGF0aC5cbiAgICovXG4gIG91dHB1dFBhdGg6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBsb2dnZXIgdG8gdXNlIGZvciBkaWFnbm9zdGljIG1lc3NhZ2VzLlxuICAgKi9cbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGdlbmVyYXRlIHNvdXJjZSBpbmZvcm1hdGlvbiBpbiB0aGUgb3V0cHV0IGZpbGVzIGJ5IGZvbGxvd2luZyBzb3VyY2UtbWFwIG1hcHBpbmdzXG4gICAqIGZvdW5kIGluIHRoZSBzb3VyY2UgZmlsZS5cbiAgICovXG4gIHVzZVNvdXJjZU1hcHM6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSB0aGUgbGVnYWN5IGlkIGZvcm1hdCBmb3IgbWVzc2FnZXMgdGhhdCB3ZXJlIGV4dHJhY3RlZCBmcm9tIEFuZ3VsYXIgdGVtcGxhdGVzXG4gICAqL1xuICB1c2VMZWdhY3lJZHM6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBIb3cgdG8gaGFuZGxlIG1lc3NhZ2VzIHdpdGggdGhlIHNhbWUgaWQgYnV0IG5vdCB0aGUgc2FtZSB0ZXh0LlxuICAgKi9cbiAgZHVwbGljYXRlTWVzc2FnZUhhbmRsaW5nOiBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneTtcbiAgLyoqXG4gICAqIEEgY29sbGVjdGlvbiBvZiBmb3JtYXR0aW5nIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgdHJhbnNsYXRpb24gZmlsZSBzZXJpYWxpemVyLlxuICAgKi9cbiAgZm9ybWF0T3B0aW9ucz86IEZvcm1hdE9wdGlvbnM7XG4gIC8qKlxuICAgKiBUaGUgZmlsZS1zeXN0ZW0gYWJzdHJhY3Rpb24gdG8gdXNlLlxuICAgKi9cbiAgZmlsZVN5c3RlbTogRmlsZVN5c3RlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUcmFuc2xhdGlvbnMoe1xuICByb290UGF0aCxcbiAgc291cmNlRmlsZVBhdGhzLFxuICBzb3VyY2VMb2NhbGUsXG4gIGZvcm1hdCxcbiAgb3V0cHV0UGF0aDogb3V0cHV0LFxuICBsb2dnZXIsXG4gIHVzZVNvdXJjZU1hcHMsXG4gIHVzZUxlZ2FjeUlkcyxcbiAgZHVwbGljYXRlTWVzc2FnZUhhbmRsaW5nLFxuICBmb3JtYXRPcHRpb25zID0ge30sXG4gIGZpbGVTeXN0ZW06IGZzLFxufTogRXh0cmFjdFRyYW5zbGF0aW9uc09wdGlvbnMpIHtcbiAgY29uc3QgYmFzZVBhdGggPSBmcy5yZXNvbHZlKHJvb3RQYXRoKTtcbiAgY29uc3QgZXh0cmFjdG9yID0gbmV3IE1lc3NhZ2VFeHRyYWN0b3IoZnMsIGxvZ2dlciwge2Jhc2VQYXRoLCB1c2VTb3VyY2VNYXBzfSk7XG5cbiAgY29uc3QgbWVzc2FnZXM6IMm1UGFyc2VkTWVzc2FnZVtdID0gW107XG4gIGZvciAoY29uc3QgZmlsZSBvZiBzb3VyY2VGaWxlUGF0aHMpIHtcbiAgICBtZXNzYWdlcy5wdXNoKC4uLmV4dHJhY3Rvci5leHRyYWN0TWVzc2FnZXMoZmlsZSkpO1xuICB9XG5cbiAgY29uc3QgZGlhZ25vc3RpY3MgPSBjaGVja0R1cGxpY2F0ZU1lc3NhZ2VzKGZzLCBtZXNzYWdlcywgZHVwbGljYXRlTWVzc2FnZUhhbmRsaW5nLCBiYXNlUGF0aCk7XG4gIGlmIChkaWFnbm9zdGljcy5oYXNFcnJvcnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGlhZ25vc3RpY3MuZm9ybWF0RGlhZ25vc3RpY3MoJ0ZhaWxlZCB0byBleHRyYWN0IG1lc3NhZ2VzJykpO1xuICB9XG5cbiAgY29uc3Qgb3V0cHV0UGF0aCA9IGZzLnJlc29sdmUocm9vdFBhdGgsIG91dHB1dCk7XG4gIGNvbnN0IHNlcmlhbGl6ZXIgPVxuICAgICAgZ2V0U2VyaWFsaXplcihmb3JtYXQsIHNvdXJjZUxvY2FsZSwgZnMuZGlybmFtZShvdXRwdXRQYXRoKSwgdXNlTGVnYWN5SWRzLCBmb3JtYXRPcHRpb25zLCBmcyk7XG4gIGNvbnN0IHRyYW5zbGF0aW9uRmlsZSA9IHNlcmlhbGl6ZXIuc2VyaWFsaXplKG1lc3NhZ2VzKTtcbiAgZnMuZW5zdXJlRGlyKGZzLmRpcm5hbWUob3V0cHV0UGF0aCkpO1xuICBmcy53cml0ZUZpbGUob3V0cHV0UGF0aCwgdHJhbnNsYXRpb25GaWxlKTtcblxuICBpZiAoZGlhZ25vc3RpY3MubWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgbG9nZ2VyLndhcm4oZGlhZ25vc3RpY3MuZm9ybWF0RGlhZ25vc3RpY3MoJ01lc3NhZ2VzIGV4dHJhY3RlZCB3aXRoIHdhcm5pbmdzJykpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJpYWxpemVyKFxuICAgIGZvcm1hdDogc3RyaW5nLCBzb3VyY2VMb2NhbGU6IHN0cmluZywgcm9vdFBhdGg6IEFic29sdXRlRnNQYXRoLCB1c2VMZWdhY3lJZHM6IGJvb2xlYW4sXG4gICAgZm9ybWF0T3B0aW9uczogRm9ybWF0T3B0aW9ucyA9IHt9LCBmczogUGF0aE1hbmlwdWxhdGlvbik6IFRyYW5zbGF0aW9uU2VyaWFsaXplciB7XG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgY2FzZSAneGxmJzpcbiAgICBjYXNlICd4bGlmJzpcbiAgICBjYXNlICd4bGlmZic6XG4gICAgICByZXR1cm4gbmV3IFhsaWZmMVRyYW5zbGF0aW9uU2VyaWFsaXplcihcbiAgICAgICAgICBzb3VyY2VMb2NhbGUsIHJvb3RQYXRoLCB1c2VMZWdhY3lJZHMsIGZvcm1hdE9wdGlvbnMsIGZzKTtcbiAgICBjYXNlICd4bGYyJzpcbiAgICBjYXNlICd4bGlmMic6XG4gICAgY2FzZSAneGxpZmYyJzpcbiAgICAgIHJldHVybiBuZXcgWGxpZmYyVHJhbnNsYXRpb25TZXJpYWxpemVyKFxuICAgICAgICAgIHNvdXJjZUxvY2FsZSwgcm9vdFBhdGgsIHVzZUxlZ2FjeUlkcywgZm9ybWF0T3B0aW9ucywgZnMpO1xuICAgIGNhc2UgJ3htYic6XG4gICAgICByZXR1cm4gbmV3IFhtYlRyYW5zbGF0aW9uU2VyaWFsaXplcihyb290UGF0aCwgdXNlTGVnYWN5SWRzLCBmcyk7XG4gICAgY2FzZSAnanNvbic6XG4gICAgICByZXR1cm4gbmV3IFNpbXBsZUpzb25UcmFuc2xhdGlvblNlcmlhbGl6ZXIoc291cmNlTG9jYWxlKTtcbiAgICBjYXNlICdhcmInOlxuICAgICAgcmV0dXJuIG5ldyBBcmJUcmFuc2xhdGlvblNlcmlhbGl6ZXIoc291cmNlTG9jYWxlLCByb290UGF0aCwgZnMpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgTm8gdHJhbnNsYXRpb24gc2VyaWFsaXplciBjYW4gaGFuZGxlIHRoZSBwcm92aWRlZCBmb3JtYXQ6ICR7Zm9ybWF0fWApO1xufVxuIl19