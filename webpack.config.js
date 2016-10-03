let webpack = require('webpack')


module.exports = {
  // the point where webpack begins inspecting our code and looking for import statments
  entry: './src/main.ts',

  // create an output object for weppack
  output: {

    // the actual folder where webpack writes files to
    path: './dist',

    // once webpack has crawled our code and bundled it, output it to this file
    filename: 'app.bundle.js',
  }
  ,
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
  }
}
