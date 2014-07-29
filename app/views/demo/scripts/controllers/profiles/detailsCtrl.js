var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('detailsCtrl', ['$scope', 'parseService', '$routeParams', function ($scope, parseService, $routeParams) {
    var getProfile = function () {
        parseService.getProfile($routeParams.id).then(function (response) {
            console.log(response);
            $scope.profile = response;
        });
    };

    getProfile();
}]);