(function () {
    "use strict";   
    var wikiService = function ($http, $q) {
        var wikiMethods = {
            getCharityWater: function(){
                var deferObject_CharityWater;
                var CharityWater_promise = $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&formatversion=2&prop=extracts&titles=Charity:_Water&exintro=true&exsentences=2&explaintext=true&format=json&callback=JSON_CALLBACK');
                deferObject_CharityWater = deferObject_CharityWater || $q.defer();
                
                CharityWater_promise.then(function(data){
                    deferObject_CharityWater.resolve(data);
                });
                
                return deferObject_CharityWater.promise;
            },
            getMovember: function(){
                var deferObject_Movember;
                var Movember_promise = $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&formatversion=2&prop=extracts&titles=Movember&exintro=true&exsentences=2&explaintext=true&format=json&callback=JSON_CALLBACK');
                deferObject_Movember = deferObject_Movember || $q.defer();
                
                Movember_promise.then(function(data){
                    deferObject_Movember.resolve(data);
                });
                
                return deferObject_Movember.promise;
            }
        };
        return wikiMethods;
    };
    
    wikiService.$inject = ['$http', '$q'];
        
    angular.module('appMDMS')
	  .service('wikiService', wikiService);    
}());