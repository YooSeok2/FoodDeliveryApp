module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-useless-escape': 'off',
  },
};
