var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('nav', function () {
    return {
        restrict: 'A',
        controller: 'navCtrl',
        templateUrl: '/app/views/shared/nav.html'
    };
});