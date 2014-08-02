var myHealthApp = angular.module('myHealthApp');

myHealthApp.service('parseService', function ($http) {

    this.profile = {};

    this.getProfiles = function () {
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/profiles'
        });
    };

    this.addProfile = function (data) {
        return $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/profiles',
            data: data
        });
    };

    this.updateProfile = function(data, id) {
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/profiles/' + id,
            data: data
        });
    };


    this.removeProfile = function (data, id) {
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/profiles/' + id,
            data: data
    });
    };


    this.getProfile = function (id) {
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/profiles/' + id
        }).then(function (response) {
            return response.data;
        });
    };


    this.getMeds = function() {
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/medications/'
        });
    };

    this.addMed = function(data) {
        return $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/medications',
            data: data
        });
    };

    this.updateMed = function (data, id) {
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/medications/' + id,
            data: data
        });
    };


    this.disconinueMedication = function (data, id) {
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/medications/' + id,
            data: data
        });
    };
    
    this.removeMedication = function (data, id) {
        return $http({
            method: 'DELETE',
            url: 'https://api.parse.com/1/classes/medications/' + id,
        });
    };


});