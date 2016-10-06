'use strict';

let webPackConfig = require('./webpack-test-config.js');

module.exports = config => {
    config.set({
        autoWatch: true,
        browsers: ['PhantomJS'],
        files: [
            'karma-init.js'
        ],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        port: 9876,
        preprocessors: {
            'karma-init.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: true,
        webpack: webPackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};
