var myHealthApp = angular.module('myHealthApp');

//Defining Profile
var Profile = function (firstName, lastName, dob, profileId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.profileId = profileId;
};

myHealthApp.controller('profilesCtrl', ['$scope', 'profileService', function ($scope, profileService) {

    //form Controls
    $scope.showForm = false;
    $scope.toggleForm = function () {
        $scope.showForm = !$scope.showForm;
    };

    var getProfiles = function () {
        profileService.getProfiles().then(function (response) {
            $scope.profiles = response.data;
            $scope.profileId = $scope.profiles.length;
        });
    };


    //$scope.addProfile = function () {
    //    //new profile instance
    //    var profile = new Profile(this.firstName, this.lastName, this.dob, this.profileId);

    //    //pushes profile to parse
    //    parseService.addProfile(profile).then(function (status) {
    //        console.log(status);
    //        //gets Data from Parse to refresh the page with the profile just created
    //        getProfiles();
    //    });

    //    //resets form
    //    document.getElementById('addProfileForm').reset();
    //    $scope.showForm = false;
    //    $scope.addProfileForm.$setPristine();
    //};

    //$scope.restoreProfile = function () {
    //    if (confirm('Would you like to restore this profile?')) {
    //        this.profile.removed = false;
    //        this.profile.removedAt = null;

    //        parseService.updateProfile(this.profile).then(function(res) {
    //            console.log(res);
    //            getProfiles();
    //        });
    //    } 

    //};

    getProfiles();
}]);