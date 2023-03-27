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
  plugins: ['testing-library', 'jest-dom', 'jest'],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
