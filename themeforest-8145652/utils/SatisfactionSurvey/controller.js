function evenControllerFN($scope,Satisfaction,AddService1,UpdateServices)
{
    $scope.sats=Satisfaction.query();
    $scope.sat=new Satisfaction();
    $scope.carIndex=-1;

    $scope.selectEvent=function(event,index){
        $scope.carIndex=index;
        console.log(event);
        $scope.event=event;
    }
    $scope.addsat=function () {

        AddService.addSatisfaction($scope.satisfaction).then(function () {

            console.log($scope.satisfaction);
        });
    }
    $scope.update=function () {


        UpdateServices.updateSatisfaction($scope.satisfaction).then(function () {

            console.log($scope.satisfaction);
        });
    }



}
angular.module("myApp").controller("sController",evenControllerFN);