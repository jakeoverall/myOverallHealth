var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('dxSearchCtrl', ['$scope', 'icd9DataService', function ($scope, icd9DataService) {

    $scope.searchDx = function () {
        icd9DataService.find($scope.dxSearch).then(function (res) {
            console.log(res);
            $scope.results = res;
        });
    };

}]);