var myHealthApp = angular.module('myHealthApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ui.calendar', 'firebase', 'ui.router', 'restangular']);

//Routes

myHealthApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');

    $urlRouterProvider.otherwise('/demo');
    
    $stateProvider
        .state('Back', {
            url: '/app/views/'
        })
        .state('Download', {
            templateUrl: '/app/views/download/download.html'
        })
        .state('demo', {
            url: '/demo',
            templateUrl: '/app/views/demo/views/shared/main.html'
        })
        .state('profiles', {
            url: '/profiles',
            templateUrl: '/app/views/demo/views/profiles/profiles.html',
            controller: 'profilesCtrl'
        })
        .state('profile', {
            url: '/profile/:id',
            templateUrl: '/app/views/demo/views/profiles/details.html',
            controller: 'detailsCtrl',
            resolve: {
                profileRef: function (parseService, $stateParams) {
                    return parseService.getProfile($stateParams.id);
                }
            }
        })
        .state('profile/:id/medications', {
            url: '/profile/:id/medications',
            templateUrl: '/app/views/demo/views/medications/medications.html',
        })
        .state('profile/:id/schedules', {
            url: '/profile/:id/schedules',
            templateUrl: '/app/views/demo/views/schedules/schedules.html',
        })
        .state('profile/:id/logs', {
            url: '/profile/:id/logs',
            templateUrl: '/app/views/demo/views/logs/logs.html',
        })
        .state('profile/:id/history', {
            url: '/profile/:id/history',
            templateUrl: '/app/views/demo/views/history/history.html',
        })
        .state('profile/:id/symptoms', {
            url: '/profile/:id/symptoms',
            templateUrl: '/app/views/demo/views/symptoms/symptoms.html',
        });
}]);



//myHealthApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

//    $httpProvider.interceptors.push('httpRequestInterceptor');

//    $routeProvider
//        .when('/', {
//            templateUrl: '/app/views/demo/views/shared/main.html'
//        }).when('/download', {
//            templateUrl: '/app/views/download/download.html'
//        }).when('/profiles', {
//            templateUrl: '/app/views/demo/views/profiles/profiles.html',
//            controller: 'profilesCtrl'
//        }).when('/details/:id', {
//            templateUrl: '/app/views/demo/views/profiles/details.html',
//            controller: 'detailsCtrl'
//            //resolve: {
//            //    load: function ($route, parseService) {
//            //        parseService.getProfile($route.current.params.id).then(function (response) {
//            //            parseService.profile = response;
//            //        });
//            //    }
//            //}
//        }).when('/medications/:id', {
//            templateUrl: '/app/views/demo/views/medications/medications.html',
//            controller: 'detailsCtrl',
//        }).when('/schedules/:id', {
//            templateUrl: '/app/views/demo/views/schedules/schedules.html',
//            controller: 'profilesCtrl',
//        }).when('/logs/:id', {
//            templateUrl: '/app/views/demo/views/logs/logs.html',
//            controller: 'profilesCtrl',
//        }).when('/history/:id', {
//            templateUrl: '/app/views/demo/views/history/history.html',
//            controller: 'profilesCtrl',
//        }).when('/history/:id/immunizations', {
//            templateUrl: '/app/views/demo/views/history/immunizations.html',
//            controller: 'profilesCtrl',
//        }).when('/symptoms/:id', {
//            templateUrl: '/app/views/demo/views/symptoms/symptoms.html',
//            controller: 'profilesCtrl',
//        });
//}]);