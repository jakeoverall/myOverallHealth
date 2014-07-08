var myHealth = angular.module('myHealth', ['ngRoute']);

myHealth.controller('navCtrl', ['$scope', function ($scope) {
    $scope.nav = [{
        'name': 'Download',
        'link': '#/download'
    }, {
        'name': 'Demo'
    }, {
        'name': 'About',
        'link': '#/about'
    }, {
        'name': 'Contact',
        'link': '#/contact'
    }];
}]);

myHealth.config(function ($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: '/app/views/about/about.html'
        }).when('/download', {
            templateUrl: '/app/views/download/download.html'
        }).when('/contact', {
            templateUrl: '/app/views/contact/contact.html'
        }).otherwise({
            redirectTo: '/download'
        });
});

myHealth.directive('nav', function () {
    return {
        restrict: 'A',
        controller: 'navCtrl',
        templateUrl: '/app/views/shared/nav.html'
    };
});

myHealth.directive('header', function () {
    return {
        restrict: 'A',
        templateUrl: '/app/views/shared/header.html'
    };
});

