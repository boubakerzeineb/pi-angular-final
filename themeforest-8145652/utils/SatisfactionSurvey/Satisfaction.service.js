
(function(angular){
    'use strict';

    function serviceFn(AddResource1){
        this.getAll = function(){
            return AddResource1.query().$promise;
        }
        this.addSatisfaction=function (satisfaction) {
            console.log(satisfaction);

            return AddResource1.save(satisfaction).$promise;
        }
    }


    angular.module("myApp").service("AddService1",serviceFn);
})(angular);