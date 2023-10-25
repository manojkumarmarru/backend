/*
 * Karma configuration
 * Generated on Wed Jan 16 2019 11:04:39 GMT+0530 (India Standard Time)
 */

module.exports = function ( config ) {
    config.set( {

        // Base path that will be used to resolve all patterns (eg. files, exclude)
        "basePath": "",


        /*
         * Frameworks to use
         * Available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        "frameworks": ["jasmine"],


        // List of files / patterns to load in the browser
        "files": [
            "public/javascripts/Packages/packagesDAL.js",
            "travel.test.js"
        ],


        // List of files / patterns to exclude
        "exclude": [],


        /*
         * Preprocess matching files before serving them to the browser
         * Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        "preprocessors": {
        },


        /*
         * Test results reporter to use
         * Possible values: 'dots', 'progress'
         * Available reporters: https://npmjs.org/browse/keyword/karma-reporter
         */
        "reporters": ["progress"],


        // Web server port
        "port": 9876,


        // Enable / disable colors in the output (reporters and logs)
        "colors": true,


        /*
         * Level of logging
         * Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        "logLevel": config.LOG_INFO,


        // Enable / disable watching file and executing tests whenever any file changes
        "autoWatch": true,


        /*
         * Start these browsers
         * Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        "browsers": ["Chrome"],


        /*
         * Continuous Integration mode
         * If true, Karma captures browsers, runs the tests and exits
         */
        "singleRun": false,

        /*
         * Concurrency level
         * How many browser should be started simultaneous
         */
        "concurrency": Infinity
    } )
}