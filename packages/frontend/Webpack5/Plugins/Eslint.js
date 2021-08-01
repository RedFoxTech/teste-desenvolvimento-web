import { join } from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import { rootDir } from '../Utilities/Environment';

/**
 * @fileoverview Plugin responsável por mostrar erros de linting no console
 * @module packages/frontend/Webpack5/Plugins/Eslint
 */

const config = {
    context: join(rootDir, './src'),
    extensions: ['js', 'jsx', 'ts', 'tsx'],
};

const esLintPlugin = new ESLintPlugin(config);

export default {
    esLintPlugin,
};
