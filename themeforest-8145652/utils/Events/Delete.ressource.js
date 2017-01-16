/**
 * Created by salah on 08/01/2017.
 */
(function(angular){
    'use strict';

    function DeleteResourceFn($resource) {
        return $resource("http://localhost:18080/evpro-web/rest/event/delete/:event", {
            "event": "@event"
        }, {
            "update": {
                "method": "PUT"
            }
        });
    }

    DeleteResourceFn.$inject = ['$resource'];
    angular.module("myApp").factory("DeleteResource", DeleteResourceFn);
})(angular);