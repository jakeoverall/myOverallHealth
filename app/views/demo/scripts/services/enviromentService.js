var myHealthApp = angular.module('myHealthApp');

myHealthApp.service('environmentService', function ($window) {
    return {
        getEnv: function () {
            return $window.env;
        }
    };
});