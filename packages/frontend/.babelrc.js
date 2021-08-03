/**
 * @fileoverview Traz suporte às features experimentais do babel, bem como
 * transpila ts e tsx
 * @see {@link https://babeljs.io/}
 * @see {@link https://babeljs.io/docs/en/babel-preset-env}
 * @see {@link https://babeljs.io/docs/en/babel-preset-react}
 * @see {@link https://babeljs.io/docs/en/babel-preset-typescript}
 * @see {@link https://babeljs.io/docs/en/babel-plugin-transform-typescript}
 * @see {@link https://babeljs.io/docs/en/babel-plugin-transform-react-jsx}
 * @module packages/frontend/babelrc
 */

module.exports = (api) => {
    const mode = process.env.NODE_ENV || 'production';

    // This caches the Babel config by environment.
    api.cache.using(() => mode);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                    },
                    useBuiltIns: 'usage',
                    debug: false,
                    corejs: 3,
                },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-throw-expressions',
            '@babel/proposal-object-rest-spread',
            // React refresh for hot reloading of devServer
            mode !== 'production' && 'react-refresh/babel',
        ].filter(Boolean),
    };
};
