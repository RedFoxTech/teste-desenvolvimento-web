import pluginCleanWebpack from './CleanWebpack';
import pluginCopy from './Copy';
import pluginDefine from './Define';
import pluginEslint from './Eslint';
import pluginForkTsChecker from './ForkTsChecker';
import pluginHtml from './Html';
import pluginMiniCssExtract from './MiniCssExtract';
import pluginProvide from './Provide';
import pluginCompression from './Compression';
import pluginImageMinimizer from './ImageMinimizer';
import pluginWatchIgnore from './WatchIgnore';

/**
 * @fileoverview Centraliza todos os plugins do webpack em um único arquivo
 * @module packages/frontend/Webpack5/Plugins/index.js
 */

export default {
    ...pluginCleanWebpack,
    ...pluginCopy,
    ...pluginDefine,
    ...pluginEslint,
    ...pluginForkTsChecker,
    ...pluginHtml,
    ...pluginMiniCssExtract,
    ...pluginProvide,
    ...pluginCompression,
    ...pluginImageMinimizer,
    ...pluginWatchIgnore,
};
