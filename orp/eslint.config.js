import globals from 'globals';

export default [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.jest,                
                myCustomGlobal: 'readonly'
            }
        },
        rules: {
            semi: ['warn', 'always'],
            'no-unused-vars': 'warn'
        }
    },
    {
        files: ['**/*.test.js'],
        rules: {
            'no-undef': 'off'
        }
    }
];
