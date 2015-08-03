(function() {
    'use strict';

    // Start application by defining a main module and adding module dependencies
    angular.module(
        configuration.applicationName,
        configuration.applicationVendorDependencies);

    // Register common application modules
    configuration.modulesList.forEach(function(module) {
        angular.module(module, []);
    });

    // Set HTML5 Location Mode
    angular.module(configuration.applicationName).config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }]);

    // Init function for starting up the application
    angular.element(document).ready(function() {
        // Init the application
        angular.bootstrap(document, [configuration.applicationName]);
    });
}());
