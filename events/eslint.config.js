/** @type {import('eslint').Linter.Config} */
const config = [
    {
        languageOptions: {
            globals: {
                window: 'readonly',
                document: 'readonly',                
            },
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },
        plugins: {
            react: require('eslint-plugin-react'),
        },
        files: ['*.jsx', '*.js'],
    },    
];

module.exports = config;
