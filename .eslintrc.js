module.exports = {
 "parserOptions": {
  "ecmaVersion": 6,
  "ecmaFeatures": {
    "experimentalObjectRestSpread": true
  }
},
 rules: {
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },
}
