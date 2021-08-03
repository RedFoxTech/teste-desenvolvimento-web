/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {merge} = require('webpack-merge');
const webpackCommonConfig = require('./Webpack5/webpack.common');
const webpackDevelopmentConfig = require('./Webpack5/webpack.dev');
const webpackProductionConfig = require('./Webpack5/webpack.prod');
const { isProd } = require('./Webpack5/Utilities/Environment');

/**
 * @fileoverview Ponto de entrada para as configurações do webpack 5
 * @see {@link https://www.npmjs.com/package/babel-register}
 * @see {@link https://webpack.js.org/configuration/
 * @module paquete/frontend/webpack.config
 */

function getWebpackConfig() {
    if (isProd) {
        const prodConfig = merge(
            webpackCommonConfig,
            webpackProductionConfig
        );
        console.log(prodConfig);
        console.log(prodConfig.module.rules);
        return prodConfig;
    } // else
    const devConfig = merge(
        webpackCommonConfig,
        webpackDevelopmentConfig
    );
    console.log(devConfig);
    console.log(devConfig.module.rules);
    return devConfig;
}

module.exports = getWebpackConfig;