(function () {
    "use strict";   
    var firebaseFactory = function ($http, $firebaseObject) { 
        return {
            getCurrentHandicap: function(){
                var ref = new Firebase('https://mdms-golf.firebaseio.com/');                
                var HandicapNow = $firebaseObject(ref.child('CurrentHandicap').child('HandicapIs'));               
                return HandicapNow;                                
            }
        };
    };
    
    firebaseFactory.$inject = ['$http', '$firebaseObject'];
    
    angular.module('appMDMS')
	  .service('firebaseFactory', firebaseFactory);
    
}());