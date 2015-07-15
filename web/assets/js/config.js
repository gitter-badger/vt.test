// Init an application configuration module
var configuration = function() {
    'use strict';

    // Init module configuration options
    var applicationName = 'vliegtickets';
    var applicationVendorDependencies = [
        'ngResource',
        'ui.router',
        'boxuk.translation'
    ];

    // Add a new vertical module
    var registerModule = function(moduleName, dependencies) {
        // Create angular module
        angular.module(moduleName, dependencies || []);

        // Add the module to configuration file
        angular.module(applicationName).requires.push(moduleName);
    };

    return {
        applicationName: applicationName,
        applicationVendorDependencies: applicationVendorDependencies,
        registerModule: registerModule
    };
}();

console.log(configuration.applicationName);