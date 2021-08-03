/**
 * @fileoverview Funções utilitárias para configurar o webpack
 * @module packages/frontend/Webpack5/Utilities/Helpers
 */
/* global module */

const arrayFilterEmpty = (array) => array.filter((x) => Boolean(x));

const pathRewrite = (localUrl, remoteUrl) => (path) =>
    path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);

module.exports = {
    arrayFilterEmpty,
    pathRewrite,
};
