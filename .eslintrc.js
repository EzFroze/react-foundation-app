module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "react-hooks", "i18next"],
  rules: {
    semi: [2, "always"],
    "@typescript-eslint/semi": [2, "always"],
    indent: ["error", 2],
    "react/jsx-indent": ["error", 2],
    "react/react-in-jsx-scope": "off",
    "react/display-name": ["warn", { ignoreTranspilerName: true }],
    "react/prop-types": ["warn"],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "i18next/no-literal-string": [
      2,
      {
        onlyAttribute: [""],
      },
    ],
    "no-console": "error",
    "func-names": "error",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "react/no-danger": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/prefer-stateless-function": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "ignore",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
