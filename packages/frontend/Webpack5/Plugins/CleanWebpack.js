/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

/**
 * @fileoverview Implementa o plugin de limpeza do webpack, responsável por
 * remover os arquivos da pasta de build.
 * @module packages/frontend/Webpack5/Plugins/CleanWebpack
 * @see {@link https://www.npmjs.com/package/clean-webpack-plugin}
 */

const config = {
    cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!profile.json',
        '!tsconfig.tsbuildinfo',
    ],
};

const CleanWebpack = new CleanWebpackPlugin(config);
module.exports = {CleanWebpack};
