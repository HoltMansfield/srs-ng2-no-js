
/*
    possible NODE_ENV values:

    'development' | 'staging' | 'production'
*/

// grab the environment value OR default to 'development'
let environment = process.env.NODE_ENV || 'development';

// build a path to the config module for this environment
let webPackModulePath = `./webpack/webpack-${ environment }-config.js`;

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

// require in the module
let webpackConfigModule = require(webPackModulePath);

// configure webpack
let configuration = webpackConfigModule.configure();

// export our configuration so webpack can use it
module.exports = configuration;
