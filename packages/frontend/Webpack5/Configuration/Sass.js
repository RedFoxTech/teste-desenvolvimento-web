/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */

/**
 * @see {@link https://github.com/shakacode/sass-resources-loader}
 * @example
 *  [
 *      path.resolve(__dirname, '../src/styles/variables.scss'),
 *  ]
 * @fileoverview arquivo que faz com que os recursos, variáveis e mixins
 * sejam carregados globalmente e não precisem ser importados.
 * @module packages/frontend/Webpack5/Configuration/Sass
 */

const sassGlobalSheets = [
    // Adicione aqui os arquivos que você deseja carregar globalmente.
];

module.exports = sassGlobalSheets;
