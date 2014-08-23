var myHealthApp = angular.module('myHealthApp');

myHealthApp.directive('formDetails', function () {
    return {
        restrict: 'A',
        templateUrl: '/app/views/demo/views/profiles/form-details.html'
    };
});