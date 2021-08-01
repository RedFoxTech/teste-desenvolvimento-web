import webpack from 'webpack';

/**
 * @fileoverview Implementa o plugin de ignorar arquivos e pastas de acordo
 * co o documentado por typings-for-css, para não causar sobrecarga no
 * dev server toda vez que um arquivo .d.ts é gearado para um CSS
 * typing-for-css-modules loader documentation: `As the loader generates
 * typing files, it is wise to tell webpack to ignore them. The fix is
 * luckily very simple. Webpack ships with a "WatchIgnorePlugin" out of
 * the box. Simply add this to your webpack plugins`
 * @module packages/frontend/Webpack5/Plugins/WatchIgnore
 */
import { WatchIgnorePlugin } from 'webpack';

const typescriptStylesheetDeclarations = {
    paths: [/css\.d\.ts$/, /less\.d\.ts$/, /sass\.d\.ts$/],
};
const watchIgnorePlugin = new WatchIgnorePlugin(
    typescriptStylesheetDeclarations,
);

export default {
    watchIgnorePlugin,
};