import alias from './Alias'
import devServer from './devServer';
import sassResources from './sassResources';

/**
 * @fileoverview Indexa e centraliza as opções do webpack em um único arquivo.
 * @module packages/frontend/Webpack5/Configuration/index
 */

export default {
    ...alias,
    ...devServer,
    ...sassResources,
};
