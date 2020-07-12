module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.vue$/,
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        loader: 'babel-loader'
      }
    ]
  }
}
