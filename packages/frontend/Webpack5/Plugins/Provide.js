import { ProvidePlugin } from 'webpack';

/**
 * Plugin responsável por prover variáveis globais para consumir no front
 * @see {@link https://webpack.js.org/plugins/provide-plugin/}
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 * @module packages/frontend/Webpack5/Plugins/Provide
 */

const config = {};
const providePlugin = new ProvidePlugin(config);
 
export default {
    providePlugin,
};
