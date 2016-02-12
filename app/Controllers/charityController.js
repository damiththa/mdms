(function () {
    "use strict";
    var charityController = function ($scope, wikiService, $http) {
        var CharityWater_PromiseReturn = wikiService.getCharityWater();
        CharityWater_PromiseReturn.then(function (data){
            $scope.CharityWater_data = data;
            console.log($scope.CharityWater_data.data.query.pages[0].extract);
        });        
    };
    
    charityController.$inject = ['$scope', 'wikiService', '$http'];
    
    angular.module('appMDMS')
        .controller('charityController', charityController);
    
}());