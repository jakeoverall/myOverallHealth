var myHealthApp = angular.module('myHealthApp', ['ngRoute']);



myHealthApp.directive('nav', function () {
    return {
        restrict: 'A',
        controller: 'navCtrl',
        templateUrl: '/app/views/shared/nav.html'
    };
});

myHealthApp.controller('navCtrl', ['$scope', function ($scope) {
    $scope.nav = [{
        'name': 'Download',
        'link': '/app/views/index.html#/download'
    }, {
        'name': 'Back',
        'link': '/app/views/index.html'
    }];
}]);

var profiles = [];

myHealthApp.controller('profileCtrl', ['$scope', function($scope) {
    $scope.profiles = profiles;
    $scope.profile = {
        'firstName': '',
        'lastName': ''
    };
    $scope.addProfile = profiles.push(this.profile);
}]);


myHealthApp.config(function ($routeProvider) {
    $routeProvider
        .when('/download', {
            templateUrl: '/app/views/download/download.html'
        }).when('/profiles', {
            templateUrl: '/app/views/demo/views/profiles/profiles.html',
            controller: 'profileCtrl'
        });
});