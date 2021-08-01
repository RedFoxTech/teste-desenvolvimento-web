
import { join } from 'path';
import { loader as _loader } from 'mini-css-extract-plugin';
import sassResourceItems, { length } from '../Config';
import { isProd, rootDir, webpackDir } from '../Utilities/Environment';

/**
 * @fileoverview Provem regras para os loaders de CSS
 * @module packages/frontend/Webpack5/Rules/LoaderRules
 */

const cssLoader = {
    loader: 'css-loader',
};

/**
 * Sass loader em conjunto com sass-resources-loader
 */
const sassLoaderItems = [
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            // Prefira `dart-sassRules`
            implementation: require('sass'),
        },
    },
    length
        ? {
              loader: 'sass-resources-loader',
              options: {
                  resources: sassResourceItems,
              },
          }
        : null,
];

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            config: join(webpackDir, './config/postcss.js'),
        },
        sourceMap: true,
    },
};

/**
 * Use MiniCssExtractPlugin em produção produção e style-loader em
 * desenvolvimento.
 * @see {@link https://webpack.js.org/plugins/mini-css-extract-plugin/#root}
 * @see {@link https://webpack.js.org/loaders/style-loader/#root}
 */
const miniCssExtractLoader = isProd
    ? {
          loader: _loader,
          options: {
              esModule: false,
          },
      }
    : {
          loader: 'style-loader',
          options: {
              esModule: false,
          },
      };

/**
 * @see {@link https://webpack.js.org/loaders/less-loader/#root}
 */
const lessLoader = {
    loader: 'less-loader',
    options: {
        sourceMap: true,
        lessOptions: {
            javascriptEnabled: true,
        },
    },
};

/**
 * Provem tipagem para módulos de CSS dinamicamente
 * @see {@link https://github.com/TeamSupercell/typings-for-css-modules-loader}
 */
const typingsCssModulesLoader = {
    loader: '@teamsupercell/typings-for-css-modules-loader',
    options: {
        banner:
            `// Gerado por typings-for-css-modules-loader.
// Favor manter do jeito que está!`,
        formatter: 'none',
    },
};

/**
 * @see {@link https://webpack.js.org/loaders/sass-loader/#problems-with-url}
 */
const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true,
    },
};

const babelLoader = {
    loader: 'babel-loader',
    options: {
        configFile: join(rootDir, '/.babelrc.js'),
    },
};

const cssModulesSupportLoaderItems = [
    miniCssExtractLoader,
    typingsCssModulesLoader,
    {
        ...cssLoader,
        options: {
            esModule: false,
            modules: {
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]__[contenthash:base64:5]',
            },
        },
    },
];

const cssLoaderItems = [miniCssExtractLoader, cssLoader];

export default {
    cssLoader,
    sassLoaderItems,
    postCssLoader,
    miniCssExtractLoader,
    lessLoader,
    typingsCssModulesLoader,
    resolveUrlLoader,
    babelLoader,
    cssModulesSupportLoaderItems,
    cssLoaderItems,
};