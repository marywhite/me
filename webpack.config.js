const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'src/dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
