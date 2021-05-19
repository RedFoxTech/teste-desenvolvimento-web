/// <amd-module name="@angular/localize/src/tools/src/extract/source_files/es5_extract_plugin" />
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PathManipulation } from '@angular/compiler-cli/src/ngtsc/file_system';
import { ɵParsedMessage } from '@angular/localize';
import { PluginObj } from '@babel/core';
export declare function makeEs5ExtractPlugin(fs: PathManipulation, messages: ɵParsedMessage[], localizeName?: string): PluginObj;
