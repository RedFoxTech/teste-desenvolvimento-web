#!/usr/bin/env node
/// <amd-module name="@angular/localize/src/tools/src/extract/main" />
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem, PathManipulation } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Logger } from '@angular/compiler-cli/src/ngtsc/logging';
import { DiagnosticHandlingStrategy } from '../diagnostics';
import { TranslationSerializer } from './translation_files/translation_serializer';
import { FormatOptions } from './translation_files/format_options';
export interface ExtractTranslationsOptions {
    /**
     * The locale of the source being processed.
     */
    sourceLocale: string;
    /**
     * The base path for other paths provided in these options.
     * This should either be absolute or relative to the current working directory.
     */
    rootPath: string;
    /**
     * An array of paths to files to search for translations. These should be relative to the
     * rootPath.
     */
    sourceFilePaths: string[];
    /**
     * The format of the translation file.
     */
    format: string;
    /**
     * A path to where the translation file will be written. This should be relative to the rootPath.
     */
    outputPath: string;
    /**
     * The logger to use for diagnostic messages.
     */
    logger: Logger;
    /**
     * Whether to generate source information in the output files by following source-map mappings
     * found in the source file.
     */
    useSourceMaps: boolean;
    /**
     * Whether to use the legacy id format for messages that were extracted from Angular templates
     */
    useLegacyIds: boolean;
    /**
     * How to handle messages with the same id but not the same text.
     */
    duplicateMessageHandling: DiagnosticHandlingStrategy;
    /**
     * A collection of formatting options to pass to the translation file serializer.
     */
    formatOptions?: FormatOptions;
    /**
     * The file-system abstraction to use.
     */
    fileSystem: FileSystem;
}
export declare function extractTranslations({ rootPath, sourceFilePaths, sourceLocale, format, outputPath: output, logger, useSourceMaps, useLegacyIds, duplicateMessageHandling, formatOptions, fileSystem: fs, }: ExtractTranslationsOptions): void;
export declare function getSerializer(format: string, sourceLocale: string, rootPath: AbsoluteFsPath, useLegacyIds: boolean, formatOptions: Record<string, string> | undefined, fs: PathManipulation): TranslationSerializer;
