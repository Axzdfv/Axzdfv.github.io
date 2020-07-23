module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html'
    },
    signup: {
      // entry for the page
      entry: 'src/signup.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'signup.html'
    },
    signin: {
      entry: 'src/signin.js',
      template: 'public/index.html',
      filename: 'signin.html'
    }
  }
}
