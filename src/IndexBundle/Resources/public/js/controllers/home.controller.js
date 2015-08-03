(function() {
    'use strict';

    function HomeController() {
        // VM represents the View’s Model (aka ViewModel)
        var vm = this;
        vm.search = {};

        return vm;
    }

    angular.module('index').controller('HomeController', HomeController);
    HomeController.$inject = [];
}());
