(function () {
    'use strict';

    describe('Directive: Autocomplete', function () {
        //Initialize global variables
        var controller;

        // Load the main application module
        beforeEach(module(configuration.applicationName));

        beforeEach(inject(function($injector) {
            var scope = $injector.get('$rootScope').$new();
            var $controller = $injector.get('$controller');

            // Simulating isolate scope variables from the directive
            var data = {
                search: {},
                input: 'Rome',
                showSearchOverlay: 'From'
            };

            controller = $controller('SearchOverlayController', { $scope: scope }, data);
        }));

        it('should should set appropriate values on selecting an option', function() {
            controller.selectOption('Rome (Alle Luchthavens), ROM, Italië');
            expect(controller.input).toBe(null);
            expect(controller.showSearchOverlay).toBe(false);
            expect(controller.search.from).toBe('Rome (Alle Luchthavens), ROM, Italië');
        });
    });
})();
