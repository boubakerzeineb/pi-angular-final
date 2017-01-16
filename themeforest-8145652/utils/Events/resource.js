function EventsFN($resource) {
    var url="http://localhost:18080/evpro-web/rest/event";

    var Events=$resource (url);
    return Events;


}

EventsFN.$inject=["$resource"];
angular.module("myApp").factory("Events",EventsFN);