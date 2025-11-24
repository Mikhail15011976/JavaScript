import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        require: "readonly",
        __dirname: "readonly",
      },
    },
    ignores: ["**/dist/*", "**/*.temp.js"], 
    rules: {
        'no-unused-vars': ['warn', { varsIgnorePattern: '^__' }],
        'no-undef': 'error',
    },
  },
];
