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
            abstract: true,
            url: '/profile/:profileId',
            template: '<div ui-view></div>',
            controller: 'detailsCtrl',
            resolve: {
                profileRef: function (parseService, $stateParams) {
                    return parseService.getProfile($stateParams.profileId);
                }
            }
        })
        .state('profile.details', {
            url: '/details',
            templateUrl: '/app/views/demo/views/profiles/details.html',
        })
        .state('profile.medications', {
            url: '/medications',
            templateUrl: '/app/views/demo/views/medications/medications.html',
        })
        .state('profile.schedules', {
            url: '/schedules',
            templateUrl: '/app/views/demo/views/schedules/schedules.html',
        })
        .state('profile.logs', {
            url: '/logs',
            templateUrl: '/app/views/demo/views/logs/logs.html',
        })
        .state('profile.history', {
            url: '/history',
            templateUrl: '/app/views/demo/views/history/history.html',
        })
        .state('profile.symptoms', {
            url: '/symptoms',
            templateUrl: '/app/views/demo/views/symptoms/symptoms.html',
        });
}]);