import {join} from 'path';
import rootDir from './Utilities/Environment';

/**
 * @fileoverview Ponto de entrada para os arquivos de configuração do Webpack.
 * @module packages/frontend/Webpack5/index
 */

export default {
    index: {
        import: join(rootDir, '/src/index.tsx'),
        dependOn: 'shared',
    },
    cleanConsoleOnHMR: {
        import: join(__dirname, './Utilities/ClearConsoleOnHotModuleReplacement.js'),
        dependOn: 'shared',
    },
    shared: {
        import: 'react',
    },
};
