import js from "@eslint/js";
import globals from "globals";

export default [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                myCustomGlobal: "readonly",
            },
        },
        rules: {
            // Your ESLint rules here
        },
        ignores: [
            "**/temp.js",
            "config/*"
        ]
    }
];
