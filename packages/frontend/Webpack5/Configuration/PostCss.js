import isProd from '../Utilities/Env';
import arrayFilterEmpty from '../Utilities/Helpers';

/**
 * @see {@link https://github.com/postcss/postcss}
 * @fileoverview Configura o plugin PostCss para funcionar bem com o servidor
 * de desenvolvimento e o servidor de produção.
 * @module packages/frontend/Webpack5/Configuration/PostCss.js
 */

export default () => {
    const plugins = arrayFilterEmpty([
        'autoprefixer',
        isProd ? 'cssnano' : null,
    ]);
    return {
        plugins,
    };
};
