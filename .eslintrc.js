module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  extends: [
    'standard',
    'plugin:vue/essential',
  ],
  plugins: ['vue'],
  rules: {
    'promise/param-names': 0,
    'comma-dangle': [2, 'always-multiline'],
  },
}
