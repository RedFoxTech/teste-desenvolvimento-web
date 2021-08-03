/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module, __dirname */
const {join} = require('path');
const { aliasItems, devServerUrl } = require('./Configuration');
const index = require('./index');
const _plugins = require('./Plugins');
const _rules = require('./Rules');
const { isDevServer, isProd } = require('./Utilities/Environment');
const { arrayFilterEmpty } = require('./Utilities/Helpers');

/**
 * @fileoverview Configuração do Webpack que é comum entre a produção e o
 * desenvolvimento.
 * @module packages/frontend/Webpack5/webpack.common
 */

const {
    javascriptRule,
    typescriptRule,
    htmlRule,
    imagesRule,
    fontsRule,
    cssRule,
    lessRules,
    sassRules,
    svgRules,
} = _rules;

// console.log(
//     javascriptRule,
//     typescriptRule,
//     htmlRule,
//     imagesRule,
//     fontsRule,
//     cssRule,
//     lessRules,
//     sassRules,
//     svgRules,
// );

const {
   //CleanWebpack,
   Copy,
   Define,
   Eslint,
   ForkTsChecker,
   Html,
   //MiniCssExtract,
   Provide,
   //Compression,
   //ImageMinimizer,
   //WatchIgnore,
} = _plugins;

const context = __dirname;
const target = isDevServer ? 'web' : ['web', 'es5'];
const mode = isProd ? 'production' : 'development';


const output = {
    path: join(__dirname, '../dist'),
    publicPath: isDevServer ? devServerUrl : './',
    filename: isDevServer
        ? '[name].[fullhash].js'
        : '[name].[contenthash].js',
};

const _module = {
    rules: arrayFilterEmpty([
        javascriptRule,
        typescriptRule,
        htmlRule,
        imagesRule,
        fontsRule,
        cssRule,
        ...lessRules,
        ...sassRules,
        ...svgRules,
    ]),
};

const plugins = arrayFilterEmpty([
    Html,
    Provide,
    Define,
    ForkTsChecker,
    Eslint,
    Copy,
]);

const resolve = {
    alias: aliasItems,
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
};

const optimization = {
    runtimeChunk: {
        name: 'runtime',
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
            },
        },
    },
};

// console.log({
//     context,
//     target,
//     mode,
//     entry: index,
//     output,
//     module: _module,
//     plugins,
//     resolve,
//     optimization,
// });

module.exports = {
    context,
    target,
    mode,
    entry: index,
    output,
    module: _module,
    plugins,
    resolve,
    optimization,
};
