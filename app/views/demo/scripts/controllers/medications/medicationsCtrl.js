var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('medicationsCtrl', ['$scope', 'parseService', function($scope, parseService) {


    var getMeds = function() {
        parseService.getMeds().then(function(res) {
            console.log(res);
            $scope.medications = res;
        });
    };


    getMeds();

}]);