module.exports = {
  env: {
    node: true,
    es2022: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  plugins: ['@stylistic'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': ['error', 'never'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
  },
};