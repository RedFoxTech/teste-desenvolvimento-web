import isWindows from 'is-windows';
import devServerProxyConfig from './DevServierProxy';

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
 
export default {
    devServerUrl,
    devServerConfig,
};
