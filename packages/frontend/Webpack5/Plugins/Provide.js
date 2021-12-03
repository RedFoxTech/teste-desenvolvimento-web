/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {ProvidePlugin} = require('webpack');

/**
 * Plugin responsável por prover variáveis globais para consumir no front
 * @see {@link https://webpack.js.org/plugins/provide-plugin/}
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 * @module packages/frontend/Webpack5/Plugins/Provide
 */

const config = {};
const Provide = new ProvidePlugin(config);
 
module.exports = {
    Provide,
};
