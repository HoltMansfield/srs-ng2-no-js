webpack:
  This script sets our NODE_ENV to 'development' and then calls '_webpack'
  _webpack produces a bundle that is not minified or uglified and includes sourcemaps

webpack-staging:
  This script sets our NODE_ENV to 'staging' and then calls '_webpack'
  _webpack produces a bundle that is minified and includes sourcemaps  

webpack-production:
This script sets our NODE_ENV to 'production' and then calls '_webpack'
  _webpack produces a bundle that is minified and includes sourcemaps (toDO)

serve:
  Runs the webpack dev-server with live reload

test:
  Runs all of our unit tests with phantomJS


transpile:

  This is a sanity check if you're struggling with an issue that might be webpack or might relate to transpilation.

  This script will run the typescript compiler and output files into a folder called: 'built/transpiled'.
  Generally speaking if the script completes without errors then transpilation is not the issue.

  A more complex transpilation issue may require inspecting the output in the 'transpiled' folder-s
