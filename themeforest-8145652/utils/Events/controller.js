function evenControllerFN($scope,Events,AddService)
{
    $scope.eves=Events.query();
    $scope.eve=new Events;

    $scope.carIndex=-1;

    $scope.selectEvent=function(event,index){
        $scope.carIndex=index;
        console.log(event);
        $scope.event=event;

    }
    $scope.add=function () {

        AddService.addEvent($scope.event).then(function () {

            console.log($scope.event);
        });
    }

    }
    $scope.update=function () {


        UpdateServices.updateEvent($scope.event).then(function () {

            console.log($scope.event);
        });
    }
    $scope.delete=function () {


        DeleteServices.deleteEvent($scope.event).then(function () {

            console.log($scope.event);
        });
    }

}
angular.module("myApp").controller("sController",evenControllerFN);