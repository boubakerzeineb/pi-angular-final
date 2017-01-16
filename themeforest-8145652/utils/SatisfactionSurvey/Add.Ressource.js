
(function(angular){
    'use strict';

    function ResourceFn($resource) {
        return $resource("http://localhost:18080/evpro-web/rest/satisfactionSurvey/addSurvey/:satisfaction", {
            "satisfaction": "@satisfaction"
        }, {
            "update": {
                "method": "PUT"
            }
        });
    }

    ResourceFn.$inject = ['$resource'];
    angular.module("myApp").factory("AddResource1", ResourceFn);
})(angular);