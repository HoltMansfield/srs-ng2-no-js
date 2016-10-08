Webpack configuration begins in one of two places depending on what is running the app:

    webpack.config.js
        Runs the configuration module in the /webpack folder for the corresponding environment.

    karma.conf.js
        Runs the configuration module /webpack/webpack-test-config.js


Each configuration module starts out with the configuration object created by webpack-common-config.js


Example flow:

    1) a developer runs the npm script 'webpack-staging'

    2) 'webpack' script sets the environment variable to 'staging' and
        then runs the internal npm script '_webpack'

    3) '_webpack' actually calls webpack with a few flags

    4) webpack will then look for webpack.config.js in our root

    5) webpack.config.js will then run webpack-staging-configuration.js

    6) webpack-staging-configuration.js will run webpack-common-config.js and
      start with a common configuration and then add elements used for our staging build
