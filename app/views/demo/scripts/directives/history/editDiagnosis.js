var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('editDiagnosis', function () {
    return {
        restrict: 'A',
        templateUrl: '/app/views/demo/views/history/diagnoses/form-edit.html'
    };
});