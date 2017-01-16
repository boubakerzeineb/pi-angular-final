
(function(angular){
    'use strict';

    function ResourcesatFn($resource) {
        return $resource("http://localhost:18080/evpro-web/rest/satisfactionSurvey/addSurvey/:satisfaction", {
            "satisfaction": "@satisfaction"
        }, {
            "update": {
                "method": "PUT"
            }
        });
    }

    ResourcesatFn.$inject = ['$resource'];
    angular.module("myApp").factory("AddResource1", ResourcesatFn);
})(angular);