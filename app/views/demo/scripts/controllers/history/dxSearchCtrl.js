var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('dxSearchCtrl', ['$scope', 'icd9DataService', 'parseService', function ($scope, icd9DataService, parseService) {

    var getDxs = function() {
        parseService.getDxs().then(function (res) {
            console.log(res);
            $scope.diagnosis = res;
        });
    };
    getDxs();

    $scope.searchDx = function () {
        icd9DataService.find($scope.dxSearch).then(function (res) {
            $scope.results = res;
        });
    };

    $scope.addDx = function (dx) {
        var add = true;
        $scope.diagnosis.forEach(function(d) {
            if (dx.description === d.description) {
                alert(dx.description + ' is already on your list of diagnosis.');
                add = false;
            }
        });
        if (add) {
            dx.onset = prompt("When was " + $scope.profile.firstName + "diagnosed with " + dx.description + "? If unkown please provide the approximent year of onset");
            dx.profileId = $scope.profile.objectId;
            parseService.addDx(dx).then(function (res) {
                console.log(res);
                getDxs();
            });
        }
    };

    $scope.updateDx = function(dx) {
        parseService.updateDx(dx).then(function(res) {
            console.log(res);
            getDxs();
        });
    };

    $scope.removeDx = function(dx) {
        parseService.removeDx(dx).then(function(res) {
            console.log(res);
            getDxs();
        });
    };

}]);