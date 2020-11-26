module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
    },
  },
};
