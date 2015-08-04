(function () {
    'use strict';

    describe('Directive: EasedInput', function () {
        //Initialize global variables
        var element,
            scope,
            $compile,
            $timeout,
            isolatedScope;

        // Load the main application module
        beforeEach(module(configuration.applicationName));

        beforeEach(inject(function($injector) {
            var scope = $injector.get('$rootScope').$new();
            $compile = $injector.get('$compile');
            $timeout = $injector.get('$timeout');

            element = '<eased-input data-value="model" data-keyup="overlay.autocomplete(input)" timeout="300"></eased-input>';

            element = $compile(element)(scope);
            scope.$digest();

            isolatedScope = element.isolateScope();
        }));

        it('should set correct timeout', function() {
            expect(isolatedScope.timeout).toBe(300);
        });

        it('should update value only after timeout', function() {
            // Change the model in directive's scope
            isolatedScope.input = 'Test data';
            isolatedScope.update();
            expect(isolatedScope.value).toBe(undefined);

            $timeout.flush(100);
            expect(isolatedScope.value).toBe(undefined);

            $timeout.flush(200);
            expect(isolatedScope.value).toBe('Test data');
            $timeout.verifyNoPendingTasks();
        });

        it('should reset timeout after change', function() {
            // Set inital data to the input model
            isolatedScope.input = 'Test data';
            isolatedScope.update();

            // Timeout has not yet expired, value should be undefined
            $timeout.flush(200);
            expect(isolatedScope.value).toBe(undefined);

            // Change the value of input, timeout should be reset now
            isolatedScope.input = 'Some other data';
            isolatedScope.update();

            // New timeout has not yet expired, value should still be undefined
            $timeout.flush(200);
            expect(isolatedScope.value).toBe(undefined);

            // Refreshed timeout has expired, the model value should be updated
            $timeout.flush(200);
            expect(isolatedScope.value).toBe('Some other data');
            $timeout.verifyNoPendingTasks();
        });
    });
})();
