var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('medicationsCtrl', ['$scope', '$modal', 'parseService', function ($scope, $modal, parseService) {

    
    var getMeds = function () {
        parseService.getMeds().then(function(res) {
            console.log(res);
            $scope.medications = res;
        });
    };

    $scope.updateMed = function (med, medSet) {
        parseService.setMed(med).then(function (res) {
            parseService.med = res;
            var modalInstance = $modal.open({
                templateUrl: '/app/views/demo/views/medications/form-edit.html',
                controller: editMedModal,
            });
        });
    };

    $scope.discontinueMedication = function (med) {
        med.active = false;
        if (med.dcDate === null) {
            med.dcDate = new Date();
        }
        parseService.updateMed(med).then(function () {
            getMeds();
        });
    };


    $scope.activateMed = function(med) {
        med.active = true;
        parseService.updateMed(med).then(function () {
            getMeds();
        });
    };

    $scope.removeMedication = function(med) {
        parseService.removeMedication(med).then(function () {
            getMeds();
        });
    };


    $scope.open = function() {
        var modalInstance = $modal.open({
            templateUrl: '/app/views/demo/views/medications/form.html',
            controller: newMedModal
        });
    };

    getMeds();

}]);