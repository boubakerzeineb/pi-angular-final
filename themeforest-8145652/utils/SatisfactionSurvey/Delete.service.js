
(function(angular){
    'use strict';

    function serviceDeleteFn(DeleteResource){
        this.getAll = function(){
            return DeleteResource.query().$promise;
        }
        this.deleteSatisfaction=function (satisfaction) {
            console.log(satisfaction);

            return DeleteResource.update(satisfaction).$promise;
        }
    }


    angular.module("myApp").service("DeleteServices",serviceDeleteFn);
})(angular);