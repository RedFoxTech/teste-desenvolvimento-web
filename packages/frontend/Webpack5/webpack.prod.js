/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */

const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {
    CleanWebpack,
    MiniCssExtract,
    Compression,
} = require('./Plugins');

/**
 * @fileoverview Configuração do Webpack apenas para a produção.
 * @module packages/frontend/Webpack5/webpack.prod
 */

const optimization = {
    minimize: true,
    minimizer: [
        new TerserJSPlugin({}),
        new CssMinimizerPlugin()
    ],
};

const plugins = [
    CleanWebpack,
    MiniCssExtract,
    Compression,
];

// console.log(plugins);

const performance = {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
};

module.exports = {
    optimization,
    plugins,
    performance,
};
