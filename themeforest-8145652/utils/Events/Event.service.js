/**
 * Created by salah on 08/01/2017.
 */
(function(angular){
    'use strict';

    function serviceFn(AddResource){
        this.getAll = function(){
            return AddResource.query().$promise;
        }
        this.addEvent=function (event) {
            console.log(event);

            return AddResource.save(event).$promise;
        }
    }


    angular.module("myApp").service("AddService",serviceFn);
})(angular);