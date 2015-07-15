'use strict';

angular.module('index').controller('HomeController', HomeController);

HomeController.$inject = [];

function HomeController() {
    var vm = this;

    vm.hello = 'Hello world!';

    return vm;
}