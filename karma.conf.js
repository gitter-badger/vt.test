'use strict';

// Module dependencies
var tests = {
    client: ['src/**/Resources/public/js/tests/unit/*.js'],
    e2e: ['src/**/Resources/public/js/tests/e2e/*.js']
};

var assets = {
    vendor: [
        'web/assets/js/vendor/angular/angular.js',
        'web/assets/js/vendor/angular-resource/angular-resource.js',
        'web/assets/js/vendor/angular-ui-router/release/angular-ui-router.js',
        'web/assets/js/vendor/angular-mocks/angular-mocks.js',
        'web/bundles/bazingajstranslation/js/translator.min.js',
        'web/assets/js/translations/config.js',
        'web/assets/js/translations/*/*.js',
        'web/assets/js/vendor/angular-symfony-translation/dist/angular-symfony-translation.js'
    ],
    js: [
        'web/assets/js/config.js',
        'web/assets/js/app.js',
        'web/assets/js/*[!tests]*/*.js',
        'src/**/Resources/public/js/*.js',
        'src/**/Resources/public/js/**/*.js'
    ]
};

// Karma configuration
module.exports = function(config) {
    config.set({
        // User testing framework
        frameworks: ['jasmine'],

        // List of files/patterns to be loaded in a browser
        files: assets.vendor.concat(
            assets.js,
            tests.client
        ),

        // Test results reporter to use
        // Possible options: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'progress', 'coverage'],

        preprocessors: {
            'web/assets/js/*[!tests]*/*.js': ['coverage'],
            'src/**/Resources/public/js/**/*.js': ['coverage']
        },
        
        coverageReporter: {
            dir: 'app/build/coverage/client',
            reporters: [
                { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
            ]
        },

        // Web server port
        port: 8765,

        // Enable/disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // Possible options: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable/disble watcher and executing tests whenever any file changes
        autoWatch: true,

        // Start browser(s)
        // Possible options: Chrome, ChromeCanary, Firefox, Opera,
        // Safari (OS X only), PhantomJS, IE (Windows only)
        browsers: ['PhantomJS'],

        // Kill the browser it does not capture in given timeout (ms)
        configureTimeout: 60000,

        // Continuous Integration mode
        // If true, it capture browsers, tun tests and exit
        
        singleRun: true
    });
};
