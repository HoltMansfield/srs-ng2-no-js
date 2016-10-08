let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')

// this module includes our common configuration and constants
let commonConfig = require('./webpack-common-config.js')

console.log('webP@CK development')


const configure = function() {
  /*
    configure() returns a Javascript object with
    some configuration settings that are common to all environments
  */
  let developmentConfig = commonConfig.configure()

  developmentConfig.devtool = 'eval-source-map'

  // the point where webpack begins inspecting our code and looking for import statments
  developmentConfig.entry = './src/main.ts'

  // webpack expects a 'resolve' object that contains additonal configuration properties
  developmentConfig.output = {
    // the actual folder where webpack writes files to
    path: './built/dev',

    // once webpack has crawled our code and bundled it, output it to this file
    filename: 'app.bundle.js',
  }

  // webpack expects a 'resolve' object that contains additonal configuration properties
  developmentConfig.resolve = {
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
  developmentConfig.module = {
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
  developmentConfig.plugins = [
    /* this plugin will output an index.html file into our dist folder based on the template property
       the outputted file will inculde a script tag pointing at app.bundle.js
    */
    new HtmlWebpackPlugin({
       template: './src/index.html'
    })
  ]

  return developmentConfig
}

module.exports = {
  configure: configure
}
