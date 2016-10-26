// Karma configuration

const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const minify = require('uglify-js-harmony').minify;
const babel = require('rollup-plugin-babel');
const builtins = require('rollup-plugin-node-builtins');
const globals = require('rollup-plugin-node-globals');
const inject = require('rollup-plugin-inject');
const path = require('path');
const replace = require('rollup-plugin-replace');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'tests/**/*Test.js',
            'tests/**/**/*Test.js',
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests/**/*Test.js': ['rollup'],
            'tests/**/**/*Test.js': ['rollup']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        browsers: ['Chrome', 'Firefox'],
        //browsers: ['Chrome', 'Firefox', 'IE_no_addons'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        customLaunchers: {
            IE_no_addons: {
                base: 'IE',
                flags: ['-extoff']
            }
        },

        // TODO: Phantom JS 2 does not fully support es6!
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        // Rollup preprocessor settings
        rollupPreprocessor: {
            // rollup settings. See Rollup documentation
            plugins: [
                globals(),
                builtins(),
                nodeResolve({
                    jsnext: true,
                    main: true,
                    browser: true
                }),
                commonjs({
                    include: 'node_modules/**'
                }),
                // inject({
                //     include: 'build/*.js',
                //
                //     'global': {}
                // }),
                // replace({
                //     include: 'build/mqtt.js',
                //
                //     GLOBAL: {}
                // }),
                babel({
                    exclude: ['node_modules/**']
                })
                //buble(), // ES2015 compiler by the same author as Rollup
                // uglify({
                //   // mangle: false, // VERY IMPORTANT!
                //   // compress: {
                //   //   keep_fnames: true // VERY IMPORTANT!
                //   // }
                // }, minify) // TODO: Plugin fails
            ],
            // will help to prevent conflicts between different tests entries
            format: 'iife',
            sourceMap: 'inline',
        }
    })
}
