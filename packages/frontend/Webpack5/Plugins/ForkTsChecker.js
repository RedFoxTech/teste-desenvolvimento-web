import { join } from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { isDev, rootDir } from '../Utilities/Environment';

/**
 * @fileoverview Plugin responável por rodar o compilador do TypeScript
 * e o Eslint num processo separado.
 * @module packages/frontend/Webpack5/Plugins/ForkTsChecker
 * @see {@link https://www.npmjs.com/package/fork-ts-checker-webpack-plugin}
 */

const config = {
    async: isDev,
    typescript: {
        configFile: join(rootDir, '/tsconfig.json'),
    },
    eslint: {enabled: true, files: '../src/**/*.{ts,tsx,js,jsx}'},
};

const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin(config);

export default {
    forkTsCheckerWebpackPlugin,
};