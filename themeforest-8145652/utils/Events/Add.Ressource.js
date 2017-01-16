/**
 * Created by salah on 08/01/2017.
 */
(function(angular){
    'use strict';

    function ResourceFn($resource) {
        return $resource("http://localhost:18080/evpro-web/rest/event/add/:event", {
            "event": "@event"
        }, {
            "update": {
                "method": "PUT"
            }
        });
    }

    ResourceFn.$inject = ['$resource'];
    angular.module("myApp").factory("AddResource", ResourceFn);
})(angular);