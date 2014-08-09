var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('detailsCtrl', ['$scope', 'parseService', '$routeParams', '$location', function ($scope, parseService, $routeParams, $location) {

    var profile = {};

    var conversionFactor = 703;

    //form Controlls
    $scope.edit = false;
    $scope.editDetails = function () {
        $scope.edit = !$scope.edit;
    };


    //$scope Variables
    $scope.bloodTypes = ['A -', 'B -', 'O -', 'AB -', 'A +', 'B +', 'O +', 'AB +'];


    //$scope Functions
    var getProfile = function () {
        parseService.getProfile($routeParams.id).then(function (response) {
            profile = response;
            console.log(response);
            $scope.profile = profile;
            $scope.height = profile.height;
            $scope.weight = profile.weight;
            $scope.bloodType = profile.bloodType;
            $scope.gender = profile.gender;
            getGenderClass();
            $scope.calculateBMI();
        });
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

    $scope.calculateBMI = function() {

        $scope.BMI = ($scope.weight / ($scope.height * $scope.height)) * conversionFactor;

        if ($scope.BMI) {
            if ($scope.BMI <= 18.5) {
                $('#BMI').css({ 'color': 'red' });
            } else if ($scope.BMI >= 25 && $scope.BMI < 30) {
                $('#BMI').css({ 'color': 'orangered' });
            } else if ($scope.BMI >= 30) {
                $('#BMI').css({ 'color': 'red' });
            } else {
                $('#BMI').css({ 'color': 'green' });
            }
        }
    };

    $scope.saveDetails = function () {
            $scope.calculateBMI();
            getGenderClass();
            profile.height = $scope.height;
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

            parseService.removeProfile(profile).then(function(response) {
                console.log(response);
                $location.path('/profiles');
            });
        } else {
            alert('The profile was not removed');
        }

    };

        getProfile();

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