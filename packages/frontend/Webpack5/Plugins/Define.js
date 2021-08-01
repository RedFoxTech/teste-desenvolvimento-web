import { DefinePlugin } from 'webpack';

/**
 * @fileoverview Plugin que define se o ambiente é produção ou desenvolvimento
 * @module packages/frontend/Webpack5/Plugins/Define
 * @see {@link https://webpack.js.org/plugins/define-plugin/}
 * @example
 * const config = {
 *     isProd: true
 * };
 */

import { isDev, isDevServer, isProd, mode } from '../utils/env';

const config = {
    'process.env': {
        NODE_ENV: JSON.stringify(mode),
    },
    IS_PROD: isProd,
    IS_DEV: isDev,
    IS_DEV_SERVER: isDevServer,
};

const definePlugin = new DefinePlugin(config);

export default {
    definePlugin,
};
