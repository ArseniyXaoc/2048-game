module.exports = {
    root: true,

    ignorePatterns: ['.eslintrc.js'],

    parser: '@typescript-eslint/parser',               
  
    parserOptions: {
      project: ['./tsconfig.json'], 
    },
  
    plugins: [
      '@typescript-eslint',
    ],
  
    extends: [ 
      //"airbnb-typescript"
    ],
  
    rules: {
      "no-param-reassign": 0
      //can be configured later
    }
  };

