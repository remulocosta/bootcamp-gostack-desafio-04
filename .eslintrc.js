module.exports = {
  env: {
      es6: true,
      node: true,
      browser: true,
  },
  extends: [
      "airbnb-base",
      "prettier",
      "eslint:recommended",
      "plugin:react/recommended",
  ],
  plugins: [
      "prettier",
      "react",
  ],
  globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
      document: false
  },
  parser: "babel-eslint",
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      "ecmaFeatures": {
        "jsx": true
      },
  },
  rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": 1,
  },
};
