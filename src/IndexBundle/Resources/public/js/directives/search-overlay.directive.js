(function() {
    'use strict';

    function SearchOverlay() {
        return {
            scope: true,
            restrict: 'E',
            replace: true,
            templateUrl: '/view/partials/search-overlay.view.html',
            controller: 'SearchOverlayController',
            controllerAs: 'overlay',
            bindToController: {
                search: '=',
                showSearchOverlay: '='
            }
        };
    }

    function SearchOverlayController(Autocomplete, $timeout) {
        var vm = this;

        vm.autocomplete = function(input) {
            vm.input = input || vm.input;
            if (!vm.input) { return; }

            vm.results = Autocomplete.query({
                location: vm.input
            });
        };

        vm.selectValue = function(value) {
            vm.input = null;
            vm.search[vm.showSearchOverlay.toLowerCase()] = value;
            vm.showSearchOverlay = false;
        };

        return vm;
    }

    angular.module('directives').controller('SearchOverlayController', SearchOverlayController);
    angular.module('directives').directive('searchOverlay', SearchOverlay);
    SearchOverlay.$inject = ['Autocomplete'];
}());
