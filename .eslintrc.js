module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'i18next/no-literal-string': [2, { onlyAttribute: [''] }]
  }
}
