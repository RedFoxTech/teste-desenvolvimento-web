/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { rootDir } = require('../Utilities/Environment');

/**
 * @fileoverview Plugin responsável por gerar o index.html, pode ser
 * utilizado para gerar o index.html a partir de um template lodash.
 * @see {@link https://webpack.js.org/plugins/html-webpack-plugin/}
 * @module packages/frontend/Webpack5/Plugins/Html
 */

const config = {
    filename: 'index.html',
    inject: true,
    template: join(rootDir, './src/index.html'),
};

const Html = new HtmlWebpackPlugin(config);

module.exports = { Html };