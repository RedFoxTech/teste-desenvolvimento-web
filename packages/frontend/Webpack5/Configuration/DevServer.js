/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const isWindows = require('is-windows');
const {devServerProxyConfig} = require('./DevServerProxy');

/**
 * @see {@link https://webpack.js.org/configuration/dev-server/}
 * @fileoverview implementa as configurações do servidor de desenvolvimento.
 * @module packages/frontend/Webpack5/Configuration/DevServer.js
 */
 
const defaultPort = 1337;
 
const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';
 
const devServerUrl = `http://${devServerHost}:${defaultPort}/`;
 
const devServerConfig = {
    publicPath: '/',
    port: defaultPort,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    proxy: devServerProxyConfig,
    hot: true,
    overlay: false,
    host: devServerHost,
};
 
module.exports = {
    devServerUrl,
    devServerConfig,
};
