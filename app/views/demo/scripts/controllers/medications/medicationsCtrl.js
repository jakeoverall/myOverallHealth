var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('medicationsCtrl', ['$scope', 'parseService', function($scope, parseService) {

    
    var getMeds = function () {
        parseService.getMeds().then(function(res) {
            console.log(res);
            $scope.medications = res;
        });
    };

    $scope.discontinueMed = function (med) {
        med.active = false;
        parseService.discontinueMedication(med, med.objectId).then(function(res) {
            console.log(res);
            getMeds();
        });
    };


    getMeds();

}]);