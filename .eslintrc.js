/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-21 18:16:36
 * @LastEditTime: 2021-09-21 22:55:27
 * @LastEditors: changqing
 * @Usage:
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692866111
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'import/no-named-default': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'func-names': 0,
  },
};
