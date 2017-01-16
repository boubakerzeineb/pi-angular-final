/**
 * Created by salah on 08/01/2017.
 */
(function(angular){
    'use strict';

    function UpdateResourceFn($resource) {
        return $resource("http://localhost:18080/evpro-web/rest/event/update/:event", {
            "event": "@event"
        }, {
            "update": {
                "method": "PUT"
            }
        });
    }

    UpdateResourceFn.$inject = ['$resource'];
    angular.module("myApp").factory("UpdateResource", UpdateResourceFn);
})(angular);