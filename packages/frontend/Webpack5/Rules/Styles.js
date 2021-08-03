/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const { arrayFilterEmpty } = require('../Utilities/Helpers');
const {
    cssLoader,
    cssLoaderItems,
    cssModulesSupportLoaderItems,
    lessLoader,
    miniCssExtractLoader,
    postCssLoader,
    resolveUrlLoader,
    sassLoaderItems,
    typingsCssModulesLoader
} = require('./LoaderRules');

/**
 * @filedescription Regras utilizadas para carregar CSS em vários formatos
 * e sintaxes diferentes.
 * @module packages/frontend/Webpack5/Rules/Styles
 */


// console.log(
//     Array.isArray(...cssLoaderItems),
//     Array.isArray(postCssLoader)
// );

/** css */
const cssRule = {
    test: /\.css$/,
    // use: [typingsCssModulesLoader, miniCssExtractLoader, postCssLoader, resolveUrlLoader, cssLoader],
    use: [typingsCssModulesLoader, miniCssExtractLoader, cssLoader, resolveUrlLoader, postCssLoader],
};

/** less */
const lessModulesRule = {
    test: /\.module.less$/,
    use: arrayFilterEmpty([
        typingsCssModulesLoader,
        ...cssModulesSupportLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        lessLoader,
    ]),
};
const lessRule = {
    test: /\.less$/,
    exclude: /\.module.less$/,
    use: arrayFilterEmpty([
        ...cssLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        lessLoader,
    ]),
};

const lessRules = [lessModulesRule, lessRule];

/** sass */
const sassModulesRule = {
    test: /\.module\.s([ca])ss$/,
    use: arrayFilterEmpty([
        typingsCssModulesLoader,
        ...cssModulesSupportLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        ...sassLoaderItems,
    ]),
};

const sassRule = {
    test: /\.s([ca])ss$/,
    exclude: /\.module.scss$/,
    use: arrayFilterEmpty([
        ...cssLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        ...sassLoaderItems,
    ]),
};

const sassRules = [sassModulesRule, sassRule];

module.exports = {
    cssRule,
    lessRules,
    sassModulesRule,
    sassRules,
};
