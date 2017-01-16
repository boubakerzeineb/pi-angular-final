
(function(angular){
    'use strict';

    function UpdateResourceFn($resource) {
        return $resource("http://localhost:18080/evpro-web/rest/satisfaction/update/:satisfaction", {
            "satisfaction": "@satisfaction"
        }, {
            "update": {
                "method": "PUT"
            }
        });
    }

    UpdateResourceFn.$inject = ['$resource'];
    angular.module("myApp").factory("UpdateResource", UpdateResourceFn);
})(angular);