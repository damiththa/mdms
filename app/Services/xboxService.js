(function () {
    "use strict";   
    var xboxService = function ($http) { 
        return {
            getXBoxAPI: function(XBoxAPI_Secrets){
                return $http.get(XBoxAPI_Secrets.url+XBoxAPI_Secrets.Xuid+'/gamercard', {                                       
                    headers : {
                        'X-Auth' : XBoxAPI_Secrets.apikey,
                        'Content-Type' : 'application/json'
                    }
                });
            }
        };
    };
    
    xboxService.$inject = ['$http'];
    
    angular.module('appMDMS')
	  .service('xboxService', xboxService);
    
}());