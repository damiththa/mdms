(function () {
    "use strict";
    var aboutController = function ($scope, SecretsService, wikiService, firebaseFactory, xboxService, $http) {
        $scope.CharityWater_Intro = 'Loading Charity water info. from Wikipedia...';
        $scope.Movember_Intro = 'Loading Movember info. from Wikipedia...';
        $scope.GamerScore = 'Getting XBox Info from XBoxAPI...'
        
        var Secret_Return = SecretsService.getKeys();
        Secret_Return.then(function(data){
            $scope.Secrets = data;
            $scope.XBoxAPI_Secrets = $scope.Secrets.data.urls.XBoxAPI;
            // console.log($scope.XBoxAPI_Secrets);
        
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
                        //console.log($scope.CharityWater_data.data.query.pages[0].extract);           
                    $scope.CharityWater_Intro =$scope.CharityWater_data.data.query.pages[0].extract;
                });
                
                //Movember
                var Movember_PromiseReturn = wikiService.getMovember();
                Movember_PromiseReturn.then(function (data){
                    $scope.Movember_data = data;
                        //console.log($scope.Movember_data.data.query.pages[0].extract);           
                    $scope.Movember_Intro =$scope.Movember_data.data.query.pages[0].extract;
                });

                //XBoxAPI
                var XBoxAPI_PromiseReturn = xboxService.getXBoxAPI($scope.XBoxAPI_Secrets);
                XBoxAPI_PromiseReturn.then(function(data){
                    $scope.myXBoxAPI = data;
                    console.log($scope.myXBoxAPI);                    
                    $scope.GamerScore = $scope.myXBoxAPI.data.gamerscore;                    
                })
            };
            $scope.load();

        }).catch(function(){
            console.log('error loading secrets');
        });        
    };
    
    aboutController.$inject = ['$scope', 'SecretsService', 'wikiService', 'firebaseFactory', 'xboxService', '$http'];
    
    angular.module('appMDMS')
        .controller('aboutController', aboutController);    
}());