(function () {
    "use strict";   
    var SecretsService = function ($http) {
        var SecretsMethods = {
            getKeys: function(){
                return $http.get('app/Secrets/secretKeys.json');
            }
        };
        return SecretsMethods;
    };
    
    SecretsService.$inject = ['$http'];
        
    angular.module('appMDMS')
	  .service('SecretsService', SecretsService);    
}());