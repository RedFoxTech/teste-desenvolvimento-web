import { join } from 'path';
import { aliasItems, devServerUrl } from './config';
import entry from './entry';
import { htmlWebpackPlugin, providePlugin, definePlugin, forkTsCheckerWebpackPlugin, esLintPlugin, copyPlugin } from './plugins';
import { javascriptRule, typescriptRule, htmlRule, imagesRule, fontsRule, cssRule, lessRules, sassRules, svgRules } from './rules';
import { isDevServer, isProd } from './utils/env';
import { arrayFilterEmpty } from './utils/helpers';

/**
 * @fileoverview Configuração do Webpack que é comum entre a produção e o
 * desenvolvimento.
 * @module packages/frontend/Webpack5/webpack.common
 */

export default {
    context: __dirname,
    target: isDevServer ? 'web' : ['web', 'es5'],
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
        path: join(__dirname, '../dist'),
        publicPath: isDevServer ? devServerUrl : './',
        filename: isDevServer
            ? '[name].[fullhash].js'
            : '[name].[contenthash].js',
    },
    module: {
        rules: arrayFilterEmpty([
            javascriptRule,
            typescriptRule,
            htmlRule,
            imagesRule,
            fontsRule,
            cssRule,
            ...lessRules,
            ...sassRules,
            ...svgRules,
        ]),
    },
    plugins: arrayFilterEmpty([
        htmlWebpackPlugin,
        providePlugin,
        definePlugin,
        forkTsCheckerWebpackPlugin,
        esLintPlugin,
        copyPlugin,
        // plugins.htmlInlineCssWebpackPlugin,
        // plugins.htmlWebpackInlineSourcePlugin,
    ]),
    resolve: {
        alias: aliasItems,
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                },
            },
        },
    },
};
