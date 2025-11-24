module.exports = {
    ignores: ['dist/**'],
    languageOptions: {
        parserOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        globals: {
            
        },
    },
    rules: {
        semi: ['warn', 'always'],
        'no-unused-vars': 'warn',
    },
};
