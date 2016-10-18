(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', 'MovieService'];

    // Search for all movie titles with related entry


    /* @ngInject */
    function MainController($http, MovieService) {
        var vm = this;


        vm.getMovieTitle = function(movie) {
            var promise = MovieService.getMovie(movie);
            promise.then(function(data) {

                vm.movieData = data

                console.log(vm.movieData);
            }, function(error) {
                console.log(error);

            });
        }

        activate();

        ////////////////

        function activate() {}
    }
})();
