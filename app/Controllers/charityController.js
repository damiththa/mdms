(function () {
    "use strict";
    var charityController = function ($scope, wikiService, $http) {
//        var CharityWater_PromiseReturn = wikiService.getCharityWater();
//        CharityWater_PromiseReturn.then(function (data){
//            $scope.CharityWater_body = data;
//            console.log($scope.CharityWater_body);
//        });
        
        console.log('asfasfsasfas');
    };
    
    charityController.$inject = ['$scope', 'wikiService', '$http'];
    
    angular.module('appMDMS')
        .controller('charityController', charityController);
    
}());