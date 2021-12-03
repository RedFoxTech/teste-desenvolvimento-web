/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const alias = require('./Alias');
const devServer = require('./DevServer');
const sass = require('./Sass');

/**
 * @fileoverview Indexa e centraliza as opções do webpack em um único arquivo.
 * @module packages/frontend/Webpack5/Configuration/index
 */


// console.log({
//     ...alias,
//     ...devServer,
//     sass,
// })

module.exports = {
    ...alias,
    ...devServer,
    ...sass,
};
