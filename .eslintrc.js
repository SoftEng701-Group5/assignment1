module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "jest/globals": true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    'prettier',
    'jest'
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },

};
