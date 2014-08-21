var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('bmiSmall', function () {
    return {
        restrict: 'A',
        controller: 'bmiCtrl',
        templateUrl: '/app/views/demo/views/shared/BMI-small.html'
    };
});