
import { join } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { rootDir } from '../Utilities/Environment';

/**
 * @fileoverview Plugin responsável por copiar os assets do frontend para a
 * pasta de build.
 * @module packages/frontend/Webpack5/Plugins/Copy
 * @see {@link https://webpack.js.org/plugins/copy-webpack-plugin/}
 */

const config = {
    patterns: [{from: join(rootDir, './src/assets'), to: 'assets'}],
};

const copyPlugin = new CopyPlugin(config);

export default {
    copyPlugin,
};
