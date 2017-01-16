/**
 * Created by salah on 08/01/2017.
 */
(function(angular){
    'use strict';

    function serviceUpdateFn(UpdateResource){
        this.getAll = function(){
            return UpdateResource.query().$promise;
        }
        this.updateEvent=function (event) {
            console.log(event);

            return UpdateResource.update(event).$promise;
        }
    }


    angular.module("myApp").service("UpdateServices",serviceUpdateFn);
})(angular);