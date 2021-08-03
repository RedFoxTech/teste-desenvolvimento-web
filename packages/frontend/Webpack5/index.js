/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module, __dirname */
const {join} = require('path');
const {rootDir} = require('./Utilities/Environment');

/**
 * @fileoverview Ponto de entrada para os arquivos de configuração do Webpack.
 * @module packages/frontend/Webpack5/index
 */

const index = {
    import: join(rootDir, '/src/index.tsx'),
    dependOn: 'shared',
};

const cleanConsoleOnHMR = {
    import: join(__dirname, './Utilities/ClearConsoleOnHotModuleReplacement.js'),
    dependOn: 'shared',
};

const shared = {
    import: 'react',
};

module.exports = {
    index,
    cleanConsoleOnHMR,
    shared,
};
