module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [ './tsconfig.json' ]
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'object-curly-spacing': [ 'error', 'always' ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'array-bracket-spacing': [ 2, 'always', { objectsInArrays: false }],
    'no-tabs': 0,
    curly: [ 'error', 'multi-line' ]
  }
}
