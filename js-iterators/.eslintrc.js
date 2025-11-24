module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
    "sourceType": "module"
    },
    "globals": {
    "__dirname": "readonly"
    },
    "plugins": [
        "react"
    ],
    "settings": {
    "react": {
      "version": "detect"
      }
    },
    "ignorePatterns": ["dist/*"],
    "rules": {
    }
};
