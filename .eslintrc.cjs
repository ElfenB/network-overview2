module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // Standard rules should be in BI package
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:@typescript-eslint/recommended",
    '@boehringer-ingelheim/eslint-config/base/strict',
    '@boehringer-ingelheim/eslint-config/react',
    // Enable when using playwright
    // "@boehringer-ingelheim/eslint-config/playwright"
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
