/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {DefinePlugin} = require('webpack');
const {
    isDev,
    isDevServer,
    isProd,
    mode
} = require('../Utilities/Environment');

/**
 * @fileoverview Plugin que define se o ambiente é produção ou desenvolvimento
 * @module packages/frontend/Webpack5/Plugins/Define
 * @see {@link https://webpack.js.org/plugins/define-plugin/}
 * @example
 * const config = {
 *     isProd: true
 * };
 */

const config = {
    'process.env': {
        NODE_ENV: JSON.stringify(mode),
    },
    IS_PROD: isProd,
    IS_DEV: isDev,
    IS_DEV_SERVER: isDevServer,
};

const Define = new DefinePlugin(config);

module.exports = {
    Define,
}
