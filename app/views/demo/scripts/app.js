var myHealthApp = angular.module('myHealthApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);


//Defining Profile
var Profile = function (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
};


//Controllers
myHealthApp.controller('navCtrl', ['$scope', function ($scope) {
    $scope.nav = [{
        'name': 'Download',
        'link': '/app/views/index.html#/download'
    }, {
        'name': 'Back',
        'link': '/app/views/index.html'
    }];
}]);

//Services
myHealthApp.factory('Profiles', ['$http', function ($http) {
    return {
        get: function () {
            return [
                { 'firstName': 'Jake', 'lastName': 'Overall', 'dob': '01/01/1980' },
                { 'firstName': 'Kim', 'lastName': 'Overall', 'dob': '01/01/1990' }
            ];
        },
        post: function() {
            
        }
    };
}]);



myHealthApp.controller('profileCtrl', ['$scope', 'Profiles', function ($scope, Profiles) {
    $scope.showForm = false;
    $scope.profiles = Profiles.get();
    $scope.toggleForm = function () {
        $scope.showForm = !$scope.showForm;
    };
    $scope.addProfile = function () {
        debugger;
        var profile = new Profile(this.firstName, this.lastName, this.dob);
        Profiles.post(profile);
        document.getElementById('addProfileForm').reset();
        $scope.showForm = false;
        $scope.addProfileForm.$setPristine();
    };
}]);


myHealthApp.controller('datePickerCtrl', ['$scope', function ($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };

    $scope.format = 'MMMM dd, yyyy';

}]);

//Directives
myHealthApp.directive('nav', function () {
    return {
        restrict: 'A',
        controller: 'navCtrl',
        templateUrl: '/app/views/shared/nav.html'
    };
});




//Routes
myHealthApp.config(function ($routeProvider) {
    $routeProvider
        .when('/download', {
            templateUrl: '/app/views/download/download.html'
        }).when('/profiles', {
            templateUrl: '/app/views/demo/views/profiles/profiles.html',
            controller: 'profileCtrl',
        }).when('/medications', {
            templateUrl: '/app/views/demo/views/medications/medications.html',
            controller: 'profileCtrl',
        }).when('/schedules', {
            templateUrl: '/app/views/demo/views/schedules/schedules.html',
            controller: 'profileCtrl',
        }).when('/logs', {
            templateUrl: '/app/views/demo/views/logs/logs.html',
            controller: 'profileCtrl',
        }).when('/history', {
            templateUrl: '/app/views/demo/views/history/history.html',
            controller: 'profileCtrl',
        }).when('/symptoms', {
            templateUrl: '/app/views/demo/views/symptoms/symptoms.html',
            controller: 'profileCtrl',
        });
});