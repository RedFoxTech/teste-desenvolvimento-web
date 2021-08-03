/* eslint-disable @typescript-eslint/no-var-requires */
/* global require, module */
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

/**
 * @filedescription Plugin responsável por minificar as imagens para SEO
 * @see {@link https://webpack.js.org/plugins/image-minimizer-webpack-plugin/}
 * @module packages/frontend/Webpack5/Plugins/ImageMinimizer.js
 */

const ImageMinimizer = new ImageMinimizerPlugin({
    minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
            [
                'gifsicle',
                {
                    interlaced: true,
                    quality: 95,
                },
            ],
            [
                'jpegtran',
                {
                    progressive: true,
                    quality: 95,
                },
            ],
            [
                'optipng',
                {
                    optimizationLevel: 5,
                    quality: 95,
                },
            ],
            [
                'svgo',
                {
                    plugins: [
                        {
                            removeViewBox: false,
                            quality: 95,
                        },
                    ],
                },
            ],
        ],
    },
});

module.exports = {
    ImageMinimizer,
};
