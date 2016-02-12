(function () {
    "use strict";   
    var wikiService = function ($http, $q) {
        var wikiMethods = {
            getCharityWater: function(){
                var deferObject_CharityWater;
                var CharityWater_promise = $http.jsonp('https://en.wikipedia.org/w/api.php?titles=Charity:_Water&action=query&rawcontinue=true&prop=extracts&format=json&rvprop=content&callback=JSON_CALLBACK');
                deferObject_CharityWater = deferObject_CharityWater || $q.defer();
                
                CharityWater_promise.then(function(data){
                    deferObject_CharityWater.resolve(data);
                });
                
                return deferObject_CharityWater.promise;
            }
        };
        return wikiMethods;
    };
    
    wikiService.$inject = ['$http', '$q'];
        
    angular.module('appMDMS')
	  .service('wikiService', wikiService);
    
}());