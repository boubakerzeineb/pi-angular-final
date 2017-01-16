(function(angular){
    'use strict';
    function configFn($routeProvider) {
        $routeProvider
            .when('/event', {
                controller: "sController",
                templateUrl: "../eventon/event.html"
            })
            .otherwise({redirectTo: "/event"});
    }
    configFn.$inject=['$routeProvider'];
    
    angular.module("myApp").config(configFn);
})(angular);