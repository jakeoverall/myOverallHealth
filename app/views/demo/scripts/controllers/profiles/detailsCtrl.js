var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('detailsCtrl', ['$scope', 'parseService', '$stateParams', '$location', 'profileRef', function ($scope, parseService, $stateParams, $location, profileRef) {

    var profile = profileRef;
    $scope.profile = profile;
    
    //form Controlls
    $scope.edit = false;
    $scope.showForm = function () {
        $scope.edit = !$scope.edit;
    };
    
    var getGenderClass = function () {
        if ($scope.profile.gender === 'Male') {
            $scope.genderBtn = 'btn btn-primary btn-sm';
            $scope.genderClass = 'fa fa-male';
        } else {
            $scope.genderBtn = 'btn btn-pink btn-sm';
            $scope.genderClass = 'fa fa-female';
        }
    };

    $scope.bloodTypes = ['A -', 'B -', 'O -', 'AB -', 'A +', 'B +', 'O +', 'AB +'];


    //$scope Functions
    var getProfile = function () {
        parseService.getProfile(profile.objectId).then(function (response) {
            profile = response;
            $scope.profile = profile;
        });
    };
    $scope.save = function () {
        parseService.updateProfile(profile).then(function (response) {
            getProfile();
        });
    };
    
    $scope.saveDetails = function () {
        getGenderClass();
        calculateBMI($scope.profile.weight);
        var details = profile;

        parseService.updateProfile(details).then(function (response) {
            console.log(response);
            getProfile();
            $scope.showForm();
        });
    };

    $scope.removeProfile = function () {

        var verify = prompt('To remove this profile type in ' + profile.firstName + ' ' + profile.lastName + ' Exactly as it appears here');

        if (verify === profile.firstName + ' ' + profile.lastName) {
            profile.removed = true;
            profile.removedAt = new Date();

            parseService.removeProfile(profile).then(function (response) {
                console.log(response);
                $location.path('/profiles');
            });
        } else {
            alert('The profile was not removed');
        }
    };
    


    //BMI Stuff
    
    var conversionFactor = 703;

    var calculateBMI = function (weight) {
        var heightInches = function () {
            var feetToInches = (12 * $scope.profile.feet);
            var inches = parseInt($scope.profile.inches);
            return feetToInches + inches;
        }();

        if (weight) {
            $scope.profile.BMI = (weight / (heightInches * heightInches)) * conversionFactor;
            $scope.profile.weight = weight;
            $scope.save();
        } else {
            $scope.profile.BMI = (this.profile.weight / (heightInches * heightInches)) * conversionFactor;
        }

        if ($scope.profile.BMI) {
            var b = $scope.profile.BMI;
            if (b <= 18.5) {
                $('#BMI').css({ 'color': 'red', 'top': 110 - b });
            } else if (b >= 25 && b < 30) {
                $('#BMI').css({ 'color': 'orangered', 'top': 70 - b });
            } else if (b >= 30) {
                $('#BMI').css({ 'color': 'red', 'top': 60 - b });
            } else {
                $('#BMI').css({ 'color': 'green', 'top': 90 - b });
            }
        }
    };
    $scope.calculateBMI = calculateBMI;

    ////////




    
    getGenderClass();
    
    //todo Extract Allergies to their own Directive or controller
    //$scope.Allergy = function (name, type, reaction) {
    //    this.name = name;
    //    this.type = type;
    //    this.reaction = reaction;
    //};

    //$scope.addAllergy = function (allergy) {
    //    $scope.allergies.push(allergy);
    //};

    //$scope.allergies = [];

    //$scope.redCrossLink = 'http://www.redcrossblood.org/learn-about-blood/blood-types';
}]);