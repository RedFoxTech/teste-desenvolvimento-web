/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const {join} = require('path');
const EslintPlugin = require('eslint-webpack-plugin');
const { rootDir } = require('../Utilities/Environment');

/**
 * @fileoverview Plugin responsável por mostrar erros de linting no console
 * @module packages/frontend/Webpack5/Plugins/Eslint
 */

const config = {
    context: join(rootDir, './src'),
    extensions: ['js', 'jsx', 'ts', 'tsx'],
};

const Eslint = new EslintPlugin(config);

module.exports = {
    Eslint,
};

