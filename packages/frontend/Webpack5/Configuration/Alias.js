import join from 'path';
import rootDir from '../Utilities/Environment';

/**
 * @fileoverview Implementa namespaces para importarmos nossos pacotes
 * relativos ao caminho base do projeto.
 * @example import { Button } from '@components/Button';
 * @module packages/frontend/Webpack5/Configuration/Alias
 */

const aliasItems = {
    '@src': join(rootDir, '/src'),
    '@images': join(rootDir, '/src/Images'),
    '@styles': join(rootDir, '/src/Styles'),
    '@components': join(rootDir, '/src/Components'),
};

export default aliasItems;
