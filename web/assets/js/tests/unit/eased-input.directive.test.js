(function () {
    'use strict';

    describe('Directive: EasedInput', function () {
        //Initialize global variables
        var element,
            scope,
            $compile,
            $timeout;

        // Load the main application module
        beforeEach(module(configuration.applicationName));

        beforeEach(inject(function($injector) {
            var scope = $injector.get('$rootScope').$new();
            $compile = $injector.get('$compile');
            $timeout = $injector.get('$timeout');

            element = '<eased-input data-value="model" data-keyup="overlay.autocomplete(input)" timeout="300"></eased-input>';

            element = $compile(element)(scope);
            scope.$digest();
        }));

        it('should set correct timeout', function() {
            var isolated = element.isolateScope();
            expect(isolated.timeout).toBe('300');
        });

        it('should update value only after timeout', function() {
            var isolated = element.isolateScope();
            // Change the model in directive's scope
            isolated.input = 'Test data';
            isolated.update();
            expect(isolated.value).toBe(undefined);

            $timeout.flush(100);
            expect(isolated.value).toBe(undefined);

            $timeout.flush(200);
            expect(isolated.value).toBe('Test data');
        });
    });
})();
