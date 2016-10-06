let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')


module.exports = {
  devtool: 'inline-source-map',

  // webpack has a 'module' object that contains additonal configuration properties
  module: {
     loaders: [
       {
         // for all the files that match this regex
         test: /\.ts$/,
         // transpile them from ts to es5
         loader: 'awesome-typescript-loader'
       }
     ]
  }
  ,

  // webpack has a 'resolve' object that contains additonal configuration properties
  resolve: {
    // tell webpack which extensions to process
    extensions: [
      '', // no extension (this includes folders)
      '.js', // javascript
      '.ts' // typescript
    ]
    ,
    // for testing we don't bundle so we need the concept of a root
    root: path.join(__dirname, '../..', 'src')
  }
}
