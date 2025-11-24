module.exports = {
    env: {
      browser: true,      
      jest: true,
      node: true,
      commonjs: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',      
    ],    
    rules: {
      
    },
    settings: {
        react: {
          version: "detect"
        }
      }
  };
  