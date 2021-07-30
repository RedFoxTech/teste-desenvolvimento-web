/* global module */

module.exports = {
  'env': {
    'browser': false,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'no-unused-vars': 'warn',
    // As funções do express começam com uma letra maiúscula
    'new-cap': 0,
  },
};
