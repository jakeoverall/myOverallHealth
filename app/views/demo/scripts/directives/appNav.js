var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('appNav', function () {
    return {
        restrict: 'A',
        templateUrl: '/app/views/demo/views/shared/app-nav.html'
    };
});