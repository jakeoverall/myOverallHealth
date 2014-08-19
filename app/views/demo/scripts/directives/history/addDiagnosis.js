var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('addDiagnosis', function () {
    return {
        restrict: 'A',
        templateUrl: '/app/views/demo/views/history/diagnoses/form.html'
    };
});