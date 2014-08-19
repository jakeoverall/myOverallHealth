var myHealth = angular.module('myHealth', ['ui.router']);

myHealth.controller('navCtrl', ['$scope', function ($scope) {
    $scope.nav = [{
        'name': 'Download'
    }, {
        'name': 'Demo',
        'link': '/app/views/demo/views/index.html'
    }, {
        'name': 'About'
    }, {
        'name': 'Contact'
    }];
}]);


myHealth.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Download');

    $stateProvider
        .state('About', {
            url: '/About',
            templateUrl: '/app/views/about/about.html'
        }).state('Download', {
            url: '/Download',
            templateUrl: '/app/views/download/download.html'
        }).state('Contact', {
            url: '/Contact',
            templateUrl: '/app/views/contact/contact.html'
        }).state('Demo', {
            url: '/app/views/demo/views/index.html',
            templateUrl: '/app/views/demo/views/index.html'
        });
});

//myHealth.config(function ($routeProvider) {
//    $routeProvider
//        .when('/about', {
//            templateUrl: '/app/views/about/about.html'
//        }).when('/download', {
//            templateUrl: '/app/views/download/download.html'
//        }).when('/contact', {
//            templateUrl: '/app/views/contact/contact.html'
//        }).when('/demo', {
//            templateUrl: '/app/views/demo/views/index.html'
//        }).otherwise({
//            redirectTo: '/download'
//        });
//});

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

