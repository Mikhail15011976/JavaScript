module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true
    },
    extends: 'eslint:recommended',
    parser: '@babel/eslint-parser', 
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'no-unused-vars': 'warn',
        'no-undef': 'error'
    },
};
