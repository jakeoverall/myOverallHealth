var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('detailsCtrl', ['$scope', 'parseService', '$routeParams', function ($scope, parseService, $routeParams) {
    $scope.profile = {};
    var getProfile = function () {
        parseService.getProfile($routeParams.id).then(function (response) {
            console.log(response);
            $scope.profile = response;
        });
    };

    //$scope.stats = [{
    //    'name': 'Height',
    //    'value': 68
    //}, {
    //    'name': 'Weight',
    //    'value': 200
    //}];

    $scope.weight = '';
    $scope.height = '';

    $scope.Allergy = function(name, type, reaction) {
        this.name = name;
        this.type = type;
        this.reaction = reaction;
    };

    $scope.addAllergy = function(allergy) {
        $scope.allergies.push(allergy);
    };

    $scope.bloodTypes = ['A -', 'B -', 'O -', 'AB -', 'A +', 'B +', 'O +', 'AB +'];

    $scope.allergies = [];
    $scope.bloodType = 'A -';
    $scope.gender = 'M';

    $scope.redCrossLink = 'http://www.redcrossblood.org/learn-about-blood/blood-types';

    var conversionFactor = 703;

    $scope.calculateBMI = function () {
        debugger;
        $scope.BMI = ($scope.weight / ($scope.height * $scope.height)) * conversionFactor;
        
        if ($scope.BMI < 15 || $scope.BMI > 29) {
            $('#BMI').css({ 'color': 'red' });
        } else {
            $('#BMI').css({ 'color': 'green' });
        }
    };
    

    getProfile();
}]);