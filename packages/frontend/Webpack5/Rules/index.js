import common from './Common';
import svg from './Svg';
import styles from './Styles';

/**
 * @fileoverview Centraliza as regras de configuração do webpack em
 * um único arquivo
 * @module packages/frontend/Webpack5/Rules/index
 */

export default {
    ...common,
    ...svg,
    ...styles,
};