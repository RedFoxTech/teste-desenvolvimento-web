import { babelLoader } from './LoaderRules';

/**
 * @fileoverview Provem regras para lidar com arquivos SVG.
 * @module packages/frontend/Webpack5/Rules/Svg
 */

/**
 * Usamos @svgr/webpack para lidar com arquivos svg nos componentes do React
 * @see https://react-svgr.com/docs/webpack/
 */
const svgReactComponentRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: /\.[jt]sx$/,
    use: [
        babelLoader,
        {
            loader: '@svgr/webpack',
            options: {
                babel: false,
                icon: true,
            },
        },
    ],
};

/**
 * Usamos file-loader para lidar com arquivos svg nos componentes do React
 * @see https://webpack.js.org/guides/asset-modules/
 */
const svgRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: {not: [/\.[jt]sx$/]},
    type: 'asset/inline',
};

const svgRules = [svgReactComponentRule, svgRule];

export default {
    svgReactComponentRule,
    svgRule,
    svgRules,
};
