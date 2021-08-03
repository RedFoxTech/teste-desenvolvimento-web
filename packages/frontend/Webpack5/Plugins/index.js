/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const CleanWebpack = require('./CleanWebpack');
const Copy = require('./Copy');
const Define = require('./Define');
const Eslint = require('./Eslint');
const ForkTsChecker = require('./ForkTsChecker');
const Html = require('./Html');
const MiniCssExtract = require('./MiniCssExtract');
const Provide = require('./Provide');
const Compression = require('./Compression');
const ImageMinimizer = require('./ImageMinimizer');
const WatchIgnore = require('./WatchIgnore');

/**
 * @fileoverview Centraliza todos os plugins do webpack em um único arquivo
 * @module packages/frontend/Webpack5/Plugins/index.js
 */

// console.log(CleanWebpack);
// console.log(Copy);
// console.log(Define);
// console.log(Eslint);
// console.log(ForkTsChecker);
// console.log(Html);
// console.log(MiniCssExtract);
// console.log(Provide);
// console.log(Compression);
// console.log(ImageMinimizer);
// console.log(WatchIgnore);


module.exports = {
    ...CleanWebpack,
    ...Copy,
    ...Define,
    ...Eslint,
    ...ForkTsChecker,
    ...Html,
    ...MiniCssExtract,
    ...Provide,
    ...Compression,
    ...ImageMinimizer,
    ...WatchIgnore,
};
