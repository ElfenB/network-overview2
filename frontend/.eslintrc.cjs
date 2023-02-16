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
    // "@boehringer-ingelheim/eslint-config/playwright",
    // REMEMBER: Prettier has to be the last one to work
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: [
        'src/main.tsx',
        'src/index.tsx',
        'src/**/*.d.ts',
        '**/*.{spec,test}.{ts,tsx}',
        '*.{js,ts}', // mostly configuration files
      ],
      rules: {
        'import/no-unused-modules': 'off',
      },
    },
  ],
  plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': ['warn'],
    'sonarjs/no-duplicate-string': 'off',
  },
};
