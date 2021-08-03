/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {join} = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { isDev, rootDir } = require('../Utilities/Environment');

/**
 * @fileoverview Plugin responável por rodar o compilador do TypeScript
 * e o Eslint num processo separado.
 * @module packages/frontend/Webpack5/Plugins/ForkTsChecker
 * @see {@link https://www.npmjs.com/package/fork-ts-checker-webpack-plugin}
 */

const config = {
    async: isDev,
    typescript: {
        configFile: join(rootDir, '/tsconfig.json'),
    },
    eslint: {enabled: true, files: '../src/**/*.{ts,tsx,js,jsx}'},
};

const ForkTsCheckerWebpack = new ForkTsCheckerWebpackPlugin(config);

module.exports = {
    ForkTsCheckerWebpack,
};
