(function() {
    'use strict';

    // Set a focus on a field if its value has changed
    function EasedInput($timeout) {
        function link(scope, element, attrs) {
            scope.update = function () {

                if (scope.pendingPromise) {
                    $timeout.cancel(scope.pendingPromise);
                }

                scope.pendingPromise = $timeout(function () {
                    scope.value = scope.input;
                    scope.keyup({input: scope.input});
                }, scope.timeout);
            };
        }

        return {
            restrict: 'E',
            scope: {
                value: '=',
                keyup: '&',
                timeout: '@',
                placeholder: '@',
                class: '@'
            },
            template: '<input type="text" data-ng-model="input" data-ng-change="update()" data-ng-keyup="update()" >',
            replace: true,
            link: link
        };
    }

    angular.module('directives').directive('easedInput', EasedInput);
    EasedInput.$inject = ['$timeout'];
}());
