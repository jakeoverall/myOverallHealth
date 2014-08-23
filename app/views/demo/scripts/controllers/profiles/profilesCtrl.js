var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('profilesCtrl', ['$scope', 'profilesRef', function ($scope, profilesRef) {

    $scope.profiles = profilesRef.$asArray();

    //form Controls
    $scope.showForm = false;
    $scope.toggleForm = function () {
        $scope.showForm = !$scope.showForm;
    };

    //var getProfiles = function () {
    //    parseService.getProfiles().then(function (response) {
    //        $scope.profiles = response;
    //        $scope.profileId = $scope.profiles.length;
    //    });
    //};


    $scope.addProfile = function () {
        
        //pushes profile to parse
        //parseService.addProfile(profile).then(function (status) {
        //    console.log(status);
        //    //gets Data from Parse to refresh the page with the profile just created
        //    getProfiles();
        //});

        $scope.profiles.$add({firstName: $scope.firstName, lastName: $scope.lastName});
        
        //resets form
        document.getElementById('addProfileForm').reset();
        $scope.showForm = false;
        $scope.addProfileForm.$setPristine();
    };

    $scope.restoreProfile = function () {
        if (confirm('Would you like to restore this profile?')) {
            this.profile.removed = false;
            this.profile.removedAt = null;
            $scope.profiles.save();
            //parseService.updateProfile(this.profile).then(function(res) {
            //    console.log(res);
            //    getProfiles();
            //});
        } 

    };

    //getProfiles();
}]);