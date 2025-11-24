import react from "eslint-plugin-react";

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      react,
    },
    ignores: ["node_modules/**", "dist/**"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
    },
  },
];
