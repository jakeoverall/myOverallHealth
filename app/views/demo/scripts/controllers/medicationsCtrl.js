var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('medicationsCtrl', ['$scope', 'parseService', function($scope, parseService) {

    var getMeds = function() {
        parseService.getMeds().then(function(res) {
            $scope.medications = res;
        });
    };

    $scope.addMed = function() {

        debugger;

        var med = {
            'name': $scope.name,
            'strength': $scope.strength,
            'quantity': $scope.quantity,
            'route': $scope.route,
            'frequency': $scope.frequency,
            'startDate': $scope.startDate,
            'rxNumber': $scope.rxNumber,
            'notes': $scope.notes,
            'profileId': profile.objectId
        };
        

        parseService.addMed(med).then(function (res) {
            console.log(res);
            getMeds();
        });
    };


    getMeds();

}]);