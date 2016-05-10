(function () {
    "use strict";
    var aboutController = function ($scope, wikiService, firebaseFactory, $http) {
        
        $scope.CharityWater_Intro = 'Charity water info. from Wikipedia';
        $scope.Movember_Intro = 'Movember info. from Wikipedia';
        
        $scope.load = function(){            
            jQuery('.popoverData').popover();
            
            //Golf Handicap
            var HandicapNow_PromiseReturn = firebaseFactory.getCurrentHandicap(); 
            HandicapNow_PromiseReturn.$loaded().then(function(){
                // console.log(HandicapNow_PromiseReturn.$value); 
                $scope.HandicapNow = HandicapNow_PromiseReturn.$value;
            });
        
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
    
    aboutController.$inject = ['$scope', 'wikiService', 'firebaseFactory', '$http'];
    
    angular.module('appMDMS')
        .controller('aboutController', aboutController);    
}());