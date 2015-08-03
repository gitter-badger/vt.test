(function () {
    'use strict';

    describe('Controller: Home', function () {
        //Initialize global variables
        var HomeController;

        // Load the main application module
        beforeEach(module(configuration.applicationName));

        beforeEach(inject(function($injector) {
            var $controller = $injector.get('$controller');
            
            HomeController = $controller('HomeController', {});
        }));

        it('should expose the authentication service', function () {
            expect(HomeController.search).toEqual({});
        });
    });
})();
