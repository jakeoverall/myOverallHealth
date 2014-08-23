var myHealthApp = angular.module('myHealthApp');

myHealthApp.service('firebaseService', function (environmentService, $firebase) {
    var firebaseUrl = environmentService.getEnv().firebase;

    this.getProfiles = function () {
        return $firebase(new Firebase(firebaseUrl + '/profiles'));
    };

    this.getProfile = function (id) {
        return $firebase(new Firebase(firebaseUrl + '/profiles/' + id)).$asObject().$loaded().then(function (res) {
            return res;
        });
    };

    this.getMedications = function(id) {
        return $firebase(new Firebase(firebaseUrl + 'profiles/' + id + '/medications'));
    };
});
