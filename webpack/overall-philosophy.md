There are basically two major approaches to doing configurations per-environment.

You can have multiple configs as we do in this project or you can do this:

  if (isProd) {
    config.devtool = 'source-map';
  }
  else if (isTest) {
    config.devtool = 'inline-source-map';
  }
  else {
    config.devtool = 'eval-source-map';
  }

I opted to split configs per-environment and if necessary repeat entire configuration sections.

Common elements can go in webpack-common-config.  The individual environment configs start with the common config.

You won't spend much time with webpack unless you have a problem.  
You won't have a problem if you can control complexity and readability.

So you may spend a few seconds having to update the same config value in multiple places but when things go south
each individual config is smaller and easier to reason about.  

The goal is to avoid spending 6 hours on a configuration nightmare.

You likely are only touching the config once every few weeks.
If each time you update the config it takes a few extra seconds due to repetition that is nominal.
