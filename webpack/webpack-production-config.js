let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')

// this module includes our common configuration and constants
let commonConfig = require('./webpack-common-config.js')

console.log('webP@CK production')


const configure = function() {
  /*
    configure() returns a Javascript object with
    some configuration settings that are common to all environments
  */
  let productionConfig = commonConfig.configure()

  productionConfig.devtool = 'source-map'

  // the point where webpack begins inspecting our code and looking for import statments
  productionConfig.entry = './src/main.ts'

  // webpack expects a 'resolve' object that contains additonal configuration properties
  productionConfig.output = {
    // the actual folder where webpack writes files to
    path: './built/production',

    // once webpack has crawled our code and bundled it, output it to this file
    filename: 'app.bundle.js',
  }

  // webpack expects a 'resolve' object that contains additonal configuration properties
  productionConfig.resolve = {
    //Cache generated modules and chunks to improve performance for multiple incremental builds.
    cache: true,
    // tell webpack which extensions to process
    extensions: [
      '', // no extension (this includes folders)
      '.js', // javascript
      '.ts' // typescript
    ]
  }

  // webpack expects a 'module' object that contains additonal configuration properties
  productionConfig.module = {
     loaders: [
       {
         // for all the files that match this regex
         test: /\.ts$/,
         // transpile them from ts to es5
         loader: 'awesome-typescript-loader',
         // don't transpile anything in node_modules it should be es5 already
         // don't transpile any tests
         exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
       }
     ]
  }

  // plugins
  productionConfig.plugins = [
    /*
      this plugin will output an index.html file into our dist folder based on the template property
       the outputted file will inculde a script tag pointing at app.bundle.js
    */
    new HtmlWebpackPlugin({
       template: './src/index.html'
    }),

    // stops the build if there is any error
    new webpack.NoErrorsPlugin(),

    // detects identical (and nearly identical) files and removes them from the output.
    new webpack.optimize.DedupePlugin(),

    // minifies the bundles
    new webpack.optimize.UglifyJsPlugin({mangle: { keep_fnames: true }})
  ]

  return productionConfig
}

module.exports = {
  configure: configure
}
