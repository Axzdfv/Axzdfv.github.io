module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        loader: 'babel-loader'
      }
    ]
  }
}
