module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "18.*.*",
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier", "import", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/order": "error",
    "arrow-body-style": ["error", "as-needed"],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/no-array-index-key": "error",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/button-has-type": "error",
    "react/display-name": "warn",
  },
};
