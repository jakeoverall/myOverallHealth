var myHealthApp = angular.module('myHealthApp', ['ngRoute', 'ui.bootstrap']);


//Defining Profiles
var profiles = [];

var Profile = function (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.link = '#/p' + profiles.length + '_' + this.firstName.trim().split(' ').join('');
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


myHealthApp.controller('profileCtrl', ['$scope', function ($scope) {
    $scope.showForm = false;
    $scope.profiles = profiles;
    $scope.toggleForm = function () {
        $scope.showForm = !$scope.showForm;
    };
    $scope.addProfile = function () {
        var profile = new Profile(this.firstName, this.lastName);
        profiles.push(profile);
        document.getElementById('addProfileForm').reset();
        $scope.showForm = false;
        $scope.addProfileForm.$setPristine();
        console.log(profiles);
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