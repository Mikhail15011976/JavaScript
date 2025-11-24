import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
    rules: {
      // Правила
    },
    files: ['*.js'],
  },
  {    
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    files: ['*.js'],
    rules: {
      // Правила
    },
  },
];
