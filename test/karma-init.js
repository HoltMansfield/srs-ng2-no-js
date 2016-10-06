Error.stackTraceLimit = Infinity;

require('core-js/client/shim');
require('reflect-metadata');

require('ts-helpers');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

/*
  Webpack attaches a 'context()' method to 'require'
  It allows us to require in each file in a directory structure

  // first argument is the top of the directory structure
  // second argument is a flag to search sub-directories
  // third argument is a regex to match our test files
*/
var appContext = require.context('../src', true, /\.spec\.ts/);

// for each file: require(key)
appContext.keys().forEach(appContext);


var testing = require('@angular/core/testing');

// Select BrowserDomAdapter so angular knows what we are rendering ie Nativescript VS Browser
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());
