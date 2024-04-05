module.exports = {
  root: true,
  env: { es2020: true },
  extends: [
    'eslint:recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { sourceType: 'module' },
}
