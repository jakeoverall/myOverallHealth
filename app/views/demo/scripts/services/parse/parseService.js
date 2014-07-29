var myHealthApp = angular.module('myHealthApp');

myHealthApp.service('parseService', function ($http) {

    this.getProfiles = function () {
        return $http({
            'method': 'GET',
            'url': 'https://api.parse.com/1/classes/profiles'
        });
    };

    this.addProfile = function (data) {
        return $http({
            'method': 'POST',
            'url': 'https://api.parse.com/1/classes/profiles',
            'data': data
        });
    };

    this.removeProfile = function (id) {
        return $http({
            method: 'DELETE',
            url: 'https://api.parse.com/1/classes/profiles/' + id
        });
    };


    this.getProfile = function (id) {
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/profiles/'
        }).then(function (response) {
            var profile = response.data.results[id];
            return profile;
        });
    };


});