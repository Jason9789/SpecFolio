module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: ['airbnb-base', 'plugin:react/recommended', 'prettier'],

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
