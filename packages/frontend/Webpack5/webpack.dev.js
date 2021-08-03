/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { devServerConfig } = require('./Configuration');
const {WatchIgnore} = require('./Plugins');

/**
 * @fileoverview Configuração do webpack apenas para o desenvolvimento.
 * @module packages/frontend/Webpack5/webpack.dev
 */

const devtool = 'cheap-module-source-map';

const plugins = [
    /** Hot reloading of devServer */
    new ReactRefreshWebpackPlugin(),
    WatchIgnore,
];

const devServer = devServerConfig;

module.exports = {
    devtool,
    plugins,
    devServer,
};
