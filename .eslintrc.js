module.exports = {
 "extends": ['plugin:vue/vue3-recommended'],
 "parser": "vue-eslint-parser",
 "parserOptions": {
    "parser": "vue-eslint-parser",
    "sourceType": "module"
  },
 rules: {
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },
}
