(function() {
    'use strict';

    function AutocompleteService($resource) {
        return $resource('api/locations/:location', {
            location: '@_location'
        });
    }

    angular.module('services').factory('Autocomplete', AutocompleteService);
    AutocompleteService.$inject = ['$resource'];
}());
