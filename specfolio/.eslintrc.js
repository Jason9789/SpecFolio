module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  ecmaFeatures: {
    jsx: true,
  },

  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', 'tsx'],
      },
    },
  },
};
