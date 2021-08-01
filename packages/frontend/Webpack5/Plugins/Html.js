
import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/**
 * @fileoverview Plugin responsável por gerar o index.html, pode ser
 * utilizado para gerar o index.html a partir de um template lodash.
 * @see {@link https://webpack.js.org/plugins/html-webpack-plugin/}
 * @module packages/frontend/Webpack5/Plugins/Html
 */

import { rootDir } from '../utils/env';

const config = {
    filename: 'index.html',
    inject: true,
    template: join(rootDir, './src/index.html'),
};

const htmlWebpackPlugin = new HtmlWebpackPlugin(config);

export default {
    htmlWebpackPlugin,
};