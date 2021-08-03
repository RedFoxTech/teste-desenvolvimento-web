/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const common = require('./Common');
const svg = require('./Svg');
const styles = require('./Styles');

// console.log('rules', common, svg, styles);

/**
 * @fileoverview Centraliza as regras de configuração do webpack em
 * um único arquivo
 * @module packages/frontend/Webpack5/Rules/index
 */

module.exports = {
    ...common,
    ...svg,
    ...styles,
};