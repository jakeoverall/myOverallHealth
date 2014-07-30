var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('bmi', function () {
    return {
        restrict: 'A',
        controller: 'detailsCtrl',
        templateUrl: '/app/views/demo/views/shared/bmi.html',
        transclude: true,
        scope: {
            'calculate': '&calculateBMI'
        },

    };
});