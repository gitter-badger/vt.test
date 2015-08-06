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

    });
})();
