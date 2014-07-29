var myHealthApp = angular.module('myHealthApp');

myHealthApp.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = { 'X-Parse-Application-Id': 'Rz7k7Yk1AUqVw370t8o3w1NBPWJWBnT4xWNh8Ah3', 'X-Parse-REST-API-Key': 'MvUs7OKQ3znUSApjeQrrn7aeWNE0DAruviVDML6V' };
            return config;
        }
    };
});
