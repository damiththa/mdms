(function () {
    "use strict";
    var appMDMS = angular.module('appMDMS', ['ngRoute']);
    
    appMDMS.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/Views/home.html'
            })
            .when('/about', {
                templateUrl: 'app/Views/about.html'
            })
            .when('/career', {
                templateUrl: 'app/Views/career.html'
            })
            .when('/charity', {
                controller: 'charityController',
                templateUrl: 'app/Views/charity.html'
            })
            .when('/education', {
                templateUrl: 'app/Views/education.html'
            })
            .when('/social', {
                templateUrl: 'app/Views/social.html'
            })
            .otherwise({redirectTo: '/'});
    });
}());