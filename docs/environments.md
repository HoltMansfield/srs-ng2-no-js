This application has two entry points:

  1) webpack
  2) karma

  When running through webpack possible NODE_ENV values:

      'development' | 'staging' | 'production'

  When running through karma possible NODE_ENV values:

      'test'


Webpack will use logic in webpack.config.js to load a config for 'development' | 'staging' | 'production'

karma will directly load webpack-test-config.js
