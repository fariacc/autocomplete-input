module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {},
  plugins: ['testing-library', 'jest-dom', 'jest'],
  rules: {},
  overrides: [
    {
      files: ['**/__tests__/*.{j}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
