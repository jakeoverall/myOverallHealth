var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('addMed', function () {
    return {
        restrict: 'A',
        templateUrl: '/app/views/demo/views/medications/form.html'
    };
});