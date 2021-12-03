/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {pathRewrite} = require('../Utilities/Helpers');
/**
 * @see {@link https://webpack.js.org/configuration/dev-server/#devserverproxy}
 * @see {@link https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_configure_webpack_proxy.html}
 * @fileoverview Implementa um proxy para o servidor de desenvolvimento
 * para que o servidor de desenvolvimento possa acessar o servidor de produção
 * sem restrições. Essa opção não está sendo utiizada, mas será útil no deploy
 * @module packages/frontend/Webpack5/Configuration/DevServerProxy.js
 */

const httpsProxyTarget = {
    port: 443,
    protocol: 'https',
};
 
const devServerProxyConfig = {
    '/world-time': {
        target: `${httpsProxyTarget.protocol}://worldtimeapi.org:${httpsProxyTarget.port}`,
        pathRewrite: pathRewrite('^/world-time/test', '/api'),
        changeOrigin: true,
        secure: false,
    },
    '/someurl/test': {
        target: `${httpsProxyTarget.protocol}://reqres.in:${httpsProxyTarget.port}`,
        pathRewrite: pathRewrite('^/someurl/test', '/api'),
        changeOrigin: true,
        secure: false,
    },
};
 
module.exports = devServerProxyConfig;
