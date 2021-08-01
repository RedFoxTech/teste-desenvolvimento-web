import TerserJSPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import plugins from './plugins';

/**
 * @fileoverview Configuração do Webpack apenas para a produção.
 * @module packages/frontend/Webpack5/webpack.prod

export default {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
    },
    plugins: [
        plugins.cleanWebpackPlugin,
        plugins.miniCssExtractPlugin,
        plugins.compressionPlugin,
    ],
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
