var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('detailsCtrl', ['$scope', 'parseService', '$routeParams', '$location', 'profileRef', function ($scope, parseService, $routeParams, $location, profileRef) {

    var profile = profileRef;
    $scope.profile = profile;
    //BMI Conversion Factor for non metric conversion
    var conversionFactor = 703;

    //form Controlls
    $scope.edit = false;
    $scope.editDetails = function () {
        $scope.edit = !$scope.edit;
    };
    
    var getGenderClass = function () {
        if ($scope.gender === 'Male') {
            $scope.genderBtn = 'btn btn-primary btn-sm';
            $scope.genderClass = 'fa fa-male';
        } else {
            $scope.genderBtn = 'btn btn-pink btn-sm';
            $scope.genderClass = 'fa fa-female';
        }
    };


    //$scope Variables
    //$scope.profile = profile;
    //$scope.height = profile.height;
    //$scope.feet = profile.feet;
    //$scope.inches = profile.inches;
    //$scope.weight = profile.weight;
    //$scope.bloodType = profile.bloodType;
    //$scope.gender = profile.gender;
    //getGenderClass();
    //$scope.calculateBMI();


    $scope.bloodTypes = ['A -', 'B -', 'O -', 'AB -', 'A +', 'B +', 'O +', 'AB +'];


    //$scope Functions
    //var getProfile = function () {
    //    parseService.getProfile($routeParams.id).then(function (response) {
    //        profile = response;
    //        console.log(response);
    //        $scope.profile = profile;
    //        $scope.height = profile.height;
    //        $scope.feet = profile.feet;
    //        $scope.inches = profile.inches;
    //        $scope.weight = profile.weight;
    //        $scope.bloodType = profile.bloodType;
    //        $scope.gender = profile.gender;
    //        getGenderClass();
    //        $scope.calculateBMI();
    //    });
    //};




    $scope.calculateBMI = function (weight) {

        var heightInches = function () {
            var feetToInches = (12 * $scope.feet);
            var inches = parseInt($scope.inches);
            return feetToInches + inches;
        }();

        if (weight) {
            $scope.BMI = (weight / (heightInches * heightInches)) * conversionFactor;
            $scope.weight = weight;
            $scope.saveDetails();
        } else {
            $scope.BMI = (this.weight / (heightInches * heightInches)) * conversionFactor;
        }

        if ($scope.BMI) {
            if ($scope.BMI <= 18.5) {
                $('#BMI').css({ 'color': 'red', 'top': 110 - $scope.BMI });
            } else if ($scope.BMI >= 25 && $scope.BMI < 30) {
                $('#BMI').css({ 'color': 'orangered', 'top': 70 - $scope.BMI });
            } else if ($scope.BMI >= 30) {
                $('#BMI').css({ 'color': 'red', 'top': 60 - $scope.BMI });
            } else {
                $('#BMI').css({ 'color': 'green', 'top': 90 - $scope.BMI });
            }
        }
    };

    $scope.saveDetails = function () {
        $scope.calculateBMI();
        getGenderClass();
        profile.inches = $scope.inches;
        profile.feet = $scope.feet;
        profile.weight = $scope.weight;
        profile.BMI = $scope.BMI;
        profile.gender = $scope.gender;
        profile.bloodType = $scope.bloodType;

        var details = profile;

        parseService.updateProfile(details).then(function (response) {
            console.log(response);
            $scope.editDetails();
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

    //getProfile();

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