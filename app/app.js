(function() {
    'use strict';

    var app = angular.module('app', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/state1");
        //
        // Now set up the states
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "app/partials/state1.html",
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('state2', {
                url: "/state2/:imdbID",
                templateUrl: "app/partials/state2.html",
                controller: 'MainDetailsController',
                controllerAs: 'vm'

            });
    });
})();
