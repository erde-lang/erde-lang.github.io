module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  rules: {
    'react/display-name': 'off',
    'react/no-children-prop': 'off',
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
    'import/no-unresolved': [
      2,
      // These are docusaurus webpack aliases!
      { ignore: ['^@theme', '^@docusaurus', '^@site'] },
    ],
  },
};
