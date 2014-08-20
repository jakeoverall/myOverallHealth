var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('bmi', function () {
    return {
        restrict: 'A',
        controller: 'bmiCtrl',
        templateUrl: '/app/views/demo/views/shared/bmi.html'
    };
});