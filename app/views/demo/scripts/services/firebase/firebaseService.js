var myHealthApp = angular.module('myHealthApp');

myHealthApp.service('firebaseService', function (environmentService, $firebase) {
    var firebaseUrl = environmentService.getEnv().firebase;
    
    return {
        getProfiles: function () {
            return $firebase(new Firebase(firebaseUrl + '/profiles'));
        },
        getProfile: function (id) {
            return $firebase(new Firebase(firebaseUrl + '/profiles/' + id));
        },
        getMedications: function (id) {
            return $firebase(new Firebase(firebaseUrl + '/profiles/' + id + '/medications'));
        }
    };

});
