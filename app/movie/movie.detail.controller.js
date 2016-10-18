(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainDetailsController', MainDetailsController);

    MainDetailsController.$inject = ['MovieService', '$stateParams'];

    // Details of the selected search output

    /* @ngInject */
    function MainDetailsController(MovieService, $stateParams) {
        var vm = this;
        vm.extraDetails = $stateParams.imdbID;


        activate();

        ////////////////

        function activate() {
            MovieService.getDetails(vm.extraDetails).then(
                function(data) {
                    vm.resultsData = data;
                    console.log(vm.resultsData);
                })

        }

    }
})();
