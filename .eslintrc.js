module.exports = {
 "parser": "vue-eslint-parser",
 "parserOptions": {
    "parser": false,
    ecmaVersion: 2020,
    "ecmaFeatures": {
        "jsx": true
     },
    "sourceType": "module"
  },
 rules: {
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },
}
