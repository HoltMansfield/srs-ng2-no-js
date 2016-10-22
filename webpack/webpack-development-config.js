let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require("extract-text-webpack-plugin")
let path = require('path')

// this module includes our common configuration and constants
let commonConfig = require('./webpack-common-config.js')

// Roll up all global sass into this file (Boostrap, Font-Awesome)
let extractTextGlobalSass = new ExtractTextPlugin("/css/global.[name].[hash].css")
// Roll up all sass that is processed by CSS-Modules (all selectors get prefixed)
let extractTextScopedSass = new ExtractTextPlugin("/css/scoped.[name].[hash].css")

 // if a data url exceeds 5K, use the file-loader
let fontLimit = 50000;
let fontLoaders = [
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url",
    query: {
      limit: fontLimit,
      mimetype: "application/font-woff",
      name: 'fonts/[hash].[ext]'
    },
  },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url",
    query: {
      limit: fontLimit,
      mimetype: "application/font-woff",
      name: 'fonts/[hash].[ext]'
    },
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url",
    query: {
      limit: fontLimit,
      mimetype: "application/octet-stream",
      name: 'fonts/[hash].[ext]'
    },
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file",
    query: {
      name: 'fonts/[hash].[ext]'
    },
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url",
    query: {
      limit: fontLimit,
      mimetype: "image/svg+xml",
      name: 'fonts/[hash].[ext]'
    }
  }
]

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
    filename: '[name].bundle.[hash].js',
  }

  /*
    webpack expects a 'resolve' object that tells webpack how to resolve file requests for modules
  */
  developmentConfig.resolve = {
    //Cache generated modules and chunks to improve performance for multiple incremental builds.
    cache: true,

    // tell webpack which extensions to process
    extensions: [
      '', // no extension (this includes folders)
      '.js', // javascript
      '.ts', // typescript
      '.css'// css
    ]
    ,
    root: [path.join(__dirname, './src')]
  }

  // webpack expects a 'module' object that contains additonal configuration properties
  developmentConfig.module = {
     loaders: [
       // Typescript
       {
         test: /\.ts$/,
         loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader'],
         exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
       }
       ,
       // Global SCSS (selectors we don't want css-modules to prefix)
       {
          test: /^((?!\.module).)*scss$/, // reads in everything but *.module.css & *.module.scss
          loader: extractTextGlobalSass.extract('css!sass')
        }
       ,
       // CSS Modules only (selectors process by css-modules and prefixed)
       {
          test: /\.module.scss$/, // only reads in *.module.scss
          loader: extractTextScopedSass.extract('css?modules&importLoaders=1&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass')
        }
        ,
        // Html files requested when lazy loading modules
        {
          test: /\.html$/,
          loader: 'html'
        }
     ]
  }

  // plugins
  developmentConfig.plugins = [
    // create script & style tags
    new HtmlWebpackPlugin({
       template: './src/index.html'
    })
    ,
    extractTextGlobalSass,
    extractTextScopedSass
  ]

  developmentConfig.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    quiet: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  }

  // merge font loaders
  developmentConfig.module.loaders.push(...fontLoaders)

  return developmentConfig
}

module.exports = {
  configure: configure
}
