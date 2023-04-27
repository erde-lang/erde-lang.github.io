module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['plugin:import/recommended'],
  rules: {
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
