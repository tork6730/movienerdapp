(function() {
    'use strict';

    angular
        .module('app')
        .service('MovieService', MovieService);

    MovieService.$inject = ['$http'];

    /* @ngInject */
    function MovieService($http) {
        var service = {
            getMovie: getMovie,
            getDetails: getDetails
        };
        return service;

        //////////////// search from movies via the title

        function getMovie(movie) {


            return $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    // key: bd265802;
                    S: movie
                },
            }).then(function(response) {
                return response;
            }, function(error) {
                console.log(error);
                return error;
            });
        }

        //////////////// search from movies via the imdbID

        function getDetails(movieDetails) {


            return $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    // key: bd265802;
                    i: movieDetails
                },
            }).then(function(response) {
                return response;
            }, function(error) {
                console.log(error);
                return error;
            });
        }
    }
})();
