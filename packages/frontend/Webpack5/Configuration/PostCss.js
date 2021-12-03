/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {isProd} = require('../Utilities/Environment');
const {arrayFilterEmpty} = require('../Utilities/Helpers');

/**
 * @see {@link https://github.com/postcss/postcss}
 * @fileoverview Configura o plugin PostCss para funcionar bem com o servidor
 * de desenvolvimento e o servidor de produção.
 * @module packages/frontend/Webpack5/Configuration/PostCss.js
 */

const postCss = () => {
    const plugins = arrayFilterEmpty([
        'autoprefixer',
        isProd ? 'cssnano' : null,
    ]);
    return {
        plugins,
    };
};

module.exports = postCss;
