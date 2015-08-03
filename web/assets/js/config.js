// Init an application configuration module

var configuration = (function() {
    'use strict';

    // Init module configuration options
    var applicationName = 'vliegtickets';
    var modulesList = ['directives', 'services'];
    var applicationVendorDependencies = [
        'ngResource',
        'ui.router',
        'boxuk.translation'
    ];

    // Add a new vertical module
    var registerModule = function(moduleName, dependencies) {
        // Create angular module
        angular.module(moduleName, modulesList.concat(dependencies || []));

        // Add the module to configuration file
        angular.module(applicationName).requires.push(moduleName);
    };

    return {
        applicationName: applicationName,
        modulesList: modulesList,
        applicationVendorDependencies: applicationVendorDependencies,
        registerModule: registerModule
    };
}());

console.log(configuration.applicationName);
