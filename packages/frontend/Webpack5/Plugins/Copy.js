/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {join} = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { rootDir } = require('../Utilities/Environment');

/**
 * @fileoverview Plugin responsável por copiar os assets do frontend para a
 * pasta de build.
 * @module packages/frontend/Webpack5/Plugins/Copy
 * @see {@link https://webpack.js.org/plugins/copy-webpack-plugin/}
 */

const config = {
    patterns: [{from: join(rootDir, './src/assets'), to: 'assets'}],
};

const Copy = new CopyPlugin(config);

module.exports = {
    Copy,
};
