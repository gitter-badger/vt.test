(function() {
    'use strict';

    // Set a focus on a field if its value has changed
    function Focus($timeout) {
        function link(scope, element, attrs) {
            scope.$watch(attrs.focus, function(newValue, oldValue) {
                if (newValue) {
                    $timeout(function() {
                        element[0].focus();
                    }, 0);
                }
            });
        }

        return {
            restrict: 'A',
            link: link
        };
    }

    angular.module('directives').directive('focus', Focus);
    Focus.$inject = ['$timeout'];
}());
