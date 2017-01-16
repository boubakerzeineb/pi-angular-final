function SatisfactionFN($resource) {
    var url="http://localhost:18080/evpro-web/rest/satisfactionSurvey";

    var Satisfaction=$resource (url);
    return Satisfaction;


}

EventsFN.$inject=["$resource"];
angular.module("myApp").factory("Satisfaction",SatisfactionFN);