module.exports = {
 "parser": "vue-eslint-parser",
 "parserOptions": {
    "parser": false,
    "sourceType": "module"
  },
 rules: {
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },
}
