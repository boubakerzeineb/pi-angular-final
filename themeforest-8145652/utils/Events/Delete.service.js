/**
 * Created by salah on 08/01/2017.
 */
(function(angular){
    'use strict';

    function serviceDeleteFn(DeleteResource){
        this.getAll = function(){
            return DeleteResource.query().$promise;
        }
        this.deleteEvent=function (event) {
            console.log(event);

            return DeleteResource.update(event).$promise;
        }
    }


    angular.module("myApp").service("DeleteServices",serviceDeleteFn);
})(angular);