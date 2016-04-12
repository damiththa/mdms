(function () {
    "use strict";
    var aboutController = function ($scope, wikiService, $http) {
        
        $scope.CharityWater_Intro = 'Charity water info. from Wikipedia';
        $scope.Movember_Intro = 'Movember info. from Wikipedia';
        
        $scope.load = function(){            
            jQuery('.popoverData').popover();
            
            //Charity Water
            var CharityWater_PromiseReturn = wikiService.getCharityWater();
            CharityWater_PromiseReturn.then(function (data){
                $scope.CharityWater_data = data;
//                console.log($scope.CharityWater_data.data.query.pages[0].extract);           
                $scope.CharityWater_Intro =$scope.CharityWater_data.data.query.pages[0].extract;
            });
            
            //Movember
            var Movember_PromiseReturn = wikiService.getMovember();
            Movember_PromiseReturn.then(function (data){
                $scope.Movember_data = data;
//                console.log($scope.Movember_data.data.query.pages[0].extract);           
                $scope.Movember_Intro =$scope.Movember_data.data.query.pages[0].extract;
            });
        };
        $scope.load();
        
    };
    
    aboutController.$inject = ['$scope', 'wikiService', '$http'];
    
    angular.module('appMDMS')
        .controller('aboutController', aboutController);    
}());