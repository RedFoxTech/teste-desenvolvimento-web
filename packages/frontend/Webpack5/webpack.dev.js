
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { devServerConfig } from './config';
import { watchIgnorePlugin } from './plugins';

/**
 * @fileoverview Configuração do webpack apenas para o desenvolvimento.
 * @module packages/frontend/Webpack5/webpack.dev
 */

const devtool = 'cheap-module-source-map';

const plugins = [
    /** Hot reloading of devServer */
    new ReactRefreshWebpackPlugin(),
    watchIgnorePlugin,
];

const devServer = devServerConfig;

export default {devtool, plugins, devServ};
