import { babelLoader } from './LoaderRules';

/**
 * @see {@link https://webpack.js.org/guides/typescript/#loader}
 * @fileoverview Implementa as regras em comum entre produção e
 * desenvolvimento. Tais como extenções, loaders e regras.
 * @module packages/frontend/Webpack5/Rules/Common
 */

const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};
/**
 * @see {@link https://webpack.js.org/loaders/babel-loader}
 */
const javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [babelLoader],
    exclude: /node_modules/,
};

/**
 * @see {@link https://webpack.js.org/loaders/html-loader}
 */
const htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
    },
};
/**
 * @see {@link https://webpack.js.org/guides/asset-modules/}
 */
const imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
};
/**
 * @see {@link https://webpack.js.org/guides/asset-modules/}
 */
const fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/inline',
};

export default {
    typescriptRule,
    javascriptRule,
    htmlRule,
    imagesRule,
    fontsRule,
};
