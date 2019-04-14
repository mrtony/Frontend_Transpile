module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "rules": {
      // enable additional rules
      //"indent": ["error", 4],
      //"quotes": ["error", "double"],
      //"semi": ["error", "always"],

      // override default options for rules from base configurations
      //"comma-dangle": ["error", "always"],
      //"no-cond-assign": ["error", "always"],

      // disable rules from base configurations
      //"no-console": "off",
      "semi": 0,
      "arrow-body-style": ["error", "always"],
      "comma-dangle": ["error", "never"], //該規則強制使用對象和數組文字中的逗號
      "no-console": 0, //關掉console.log()錯誤
      "no-undef": 1, //未定義-warning
      "no-unused-vars": 1, //未定義-warning
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": true
  }
}