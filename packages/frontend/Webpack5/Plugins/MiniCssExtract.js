import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
 * @fileoverview Plugin responsável por extrair os arquivos CSS e criar
 * pequenos chunks para cada arquivo JS e otimizar o carregamento dos
 * estilos de forma assíncrona.
 * @see {@link https://webpack.js.org/plugins/mini-css-extract-plugin/}
 */

const config = {
    // Options similar to the same options in webpackOptions.output
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
};

const miniCssExtractPlugin = new MiniCssExtractPlugin(config);

export default {
    miniCssExtractPlugin,
};
