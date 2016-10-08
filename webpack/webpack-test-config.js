let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')

// this module includes our common configuration and constants
let commonConfig = require('./webpack-common-config.js')


const configure = function() {
  /*
    configure() returns a Javascript object with
    some configuration settings that are common to all environments
  */
  let testConfig = commonConfig.configure()

  testConfig.devtool = 'inline-source-map',

  // webpack expects a 'resolve' object that contains additonal configuration properties
  testConfig.resolve = {
    //Cache generated modules and chunks to improve performance for multiple incremental builds.
    cache: false,
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


  // webpack expects a 'module' object that contains additonal configuration properties
  testConfig.module = {
     loaders: [
       {
         // transpile all typescript files to ES5 so the browser can run them
         test: /\.ts$/,
         // awesome-typescript-loader accepts options in the query string Istanbul needs this option set
         loader: 'awesome-typescript-loader?inlineSourceMap=true&sourceMap=false',
         // don't transpile anything in node_modules it should be es5 already
         exclude: [/node_modules\/(?!(ng2-.+))/]
       }
     ]
  }

  return testConfig
}

module.exports = {
  configure: configure
}
