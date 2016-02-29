(function () {
    "use strict";
    var appMDMS = angular.module('appMDMS', ['ngRoute']);
    
    appMDMS.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'aboutController',
                templateUrl: 'app/Views/about.html'
            })
            .when('/career', {
                templateUrl: 'app/Views/career.html'
            })
            .when('/education', {
                templateUrl: 'app/Views/education.html'
            })
            .when('/social', {
                templateUrl: 'app/Views/social.html'
            })
            .when('/projects', {
                templateUrl: 'app/Views/projects.html'
            })
            .when('/pageinfo', {
                templateUrl: 'app/Views/pageinfo.html'
            })
        
            .otherwise({redirectTo: '/'});
    });
}());