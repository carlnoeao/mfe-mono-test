const fs = require('fs');
const path = require('path');

const packagesDir = path.resolve(__dirname, './packages');
const packagesSubDirs = fs.readdirSync(packagesDir).map(dir => path.join(packagesDir, dir));

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: path.resolve(__dirname, './tsconfig.json'),
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/no-unescaped-entities': ['off'],
    'import/no-extraneous-dependencies': ['error', { packageDir: [__dirname, ...packagesSubDirs] }],
    'prettier/prettier': ['off'],
  },
};
