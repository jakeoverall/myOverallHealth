var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('medList', function () {
    return {
        restrict: 'A',
        controller: 'medicationsCtrl',
        templateUrl: '/app/views/demo/views/medications/med-list.html'
    };
});