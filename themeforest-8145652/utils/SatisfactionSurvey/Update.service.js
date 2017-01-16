
(function(angular){
    'use strict';

    function serviceUpdateFn(UpdateResource){
        this.getAll = function(){
            return UpdateResource.query().$promise;
        }
        this.updateSatisfaction=function (satisfaction) {
            console.log(satisfaction);

            return UpdateResource.update(satisfaction).$promise;
        }
    }


    angular.module("myApp").service("UpdateServices",serviceUpdateFn);
})(angular);