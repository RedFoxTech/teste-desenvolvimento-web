import { arrayFilterEmpty } from '../Utilities/Helpers';
import {
    cssLoader,
    cssLoaderItems,
    cssModulesSupportLoaderItems,
    lessLoader,
    miniCssExtractLoader,
    postCssLoader,
    resolveUrlLoader,
    sassLoaderItems, typingsCssModulesLoader
} from './LoaderRules';

/**
 * @filedescription Regras utilizadas para carregar CSS em vários formatos
 * e sintaxes diferentes.
 * @module packages/frontend/Webpack5/Rules/Styles
 */

/** css */
const cssRule = {
    test: /\.css$/,
    use: [typingsCssModulesLoader, miniCssExtractLoader, postCssLoader, resolveUrlLoader, cssLoader],
    // use: [miniCssExtractLoader, cssLoader],
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

export default {
    cssRule,
    lessRules,
    sassModulesRule,
    sassRules,
};
