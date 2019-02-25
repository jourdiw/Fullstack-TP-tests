module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attribute-hyphenation': [
      'error',
      'always',
    ],
    'vue/html-indent': [
      'error',
      2,
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
