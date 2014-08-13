var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('editMed', function () {
    return {
        restrict: 'A',
        templateUrl: '/app/views/demo/views/medications/form-edit.html'
    };
});