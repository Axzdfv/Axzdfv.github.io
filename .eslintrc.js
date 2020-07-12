module.exports = {
 "extends" : ['plugin:vue/vue3-recommended'],
 "parserOptions": {
    "parser": "vue-eslint-parser",
    "sourceType": "module"
  }
},
 rules: {
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },
}
