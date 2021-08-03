/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {constants} = require('zlib');
const CompressionPlugin = require('compression-webpack-plugin');

/**
 * @fileoverview Plugin do Webpack responsável pela compressão de arquivos
 * utilizando o algoritmo brotli, que é o mais eficiente para SEO
 * @module packages/frontend/Webpack5/Plugins/Compression
 * @see {@link https://webpack.js.org/plugins/compression-webpack-plugin/}
 */

const Compression = new CompressionPlugin({
    filename: '[path][base].br',
    algorithm: 'brotliCompress',
    test: /\.(js|css|html|svg|woff)$/,
    compressionOptions: {
        params: {
            [constants.BROTLI_PARAM_QUALITY]: 11,
        },
    },
    threshold: 5120,
    minRatio: 0.3,
    deleteOriginalAssets: true,
});

module.exports = {
    Compression,
};
