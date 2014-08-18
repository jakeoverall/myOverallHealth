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
        dx.profileId = $scope.profile.objectId;
        parseService.addDx(dx).then(function (res) {
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