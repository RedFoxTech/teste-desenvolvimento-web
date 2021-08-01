import join from 'path';

/**
 * @fileoverview Carrega e disponibiliza as variáveis de ambiente para o
 * webpack, como a pasta raiz e o ambiente (Produção/ desenvolvimento).
 * @module packages/frontend/Webpack5/Utilities/Environment
 */

const mode = process.env.NODE_ENV || 'production';
const isDevServer = process.env.WEBPACK_IS_DEV_SERVER === 'true';
const isProd = mode === 'production';
const isDev = !isProd;
const rootDir = join(__dirname, '../../');
const webpackDir = join(__dirname, '../');

export default {
    mode,
    isDevServer,
    isProd,
    isDev,
    rootDir,
    webpackDir,
};
